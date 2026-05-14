import React, { useCallback, useEffect, useMemo, useState } from 'react';
import config from '@site/src/core/config';
import Spinner from '@site/src/components/molecules/spinner';
import { useClipboard } from '@site/src/core/hooks/use-clipboard';
import { useNotification } from '@site/src/core/hooks/use-notification';

type QueueJob = {
  NO_ID_FIELD?: string;
  id?: string;
  status: string;
  imageType: string;
  repoVersionInfo?: {
    version?: string;
  };
  addedDate?: {
    seconds?: number;
  };
  modifiedDate?: {
    seconds?: number;
  };
};

type QueueBuild = {
  buildId: string;
  relatedJobId: string;
  status: string;
  imageType: string;
  buildInfo: {
    repoVersion: string;
    editorVersion: string;
    baseOs: string;
    targetPlatform: string;
  };
  dockerInfo?: {
    digest?: string;
  } | null;
  meta?: {
    lastBuildStart?: {
      seconds?: number;
    } | null;
    publishedDate?: {
      seconds?: number;
    } | null;
    failureCount?: number;
  };
};

type QueueStatusResponse = {
  jobs: QueueJob[];
  builds: QueueBuild[];
};

interface Props {
  selectedRepoVersion: string;
}

const statStyle = (color: string): React.CSSProperties => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
  padding: '4px 12px',
  borderRadius: 6,
  border: `1px solid ${color}33`,
  background: `${color}11`,
  fontSize: '0.85em',
  fontWeight: 500,
});

const sectionStyle: React.CSSProperties = {
  padding: '12px',
  borderRadius: 8,
  border: '1px solid #33333322',
  background: '#fafafa08',
};

const tableStyle: React.CSSProperties = {
  width: '100%',
  borderCollapse: 'collapse',
  fontSize: '0.85em',
};

const cellStyle: React.CSSProperties = {
  textAlign: 'left',
  padding: '6px 8px',
  borderBottom: '1px solid #33333322',
  verticalAlign: 'top',
};

const getJobRepoVersion = (job: QueueJob | undefined): string =>
  job?.repoVersionInfo?.version || '';

const minutesSinceTimestamp = (
  timestamp?: {
    seconds?: number;
  } | null,
): number | null => {
  if (!timestamp?.seconds) return null;
  const diffMs = Date.now() - timestamp.seconds * 1000;
  return diffMs < 0 ? 0 : Math.floor(diffMs / 60000);
};

const formatAgeMinutes = (minutes: number | null): string => {
  if (minutes === null) return 'n/a';
  if (minutes < 60) return `${minutes}m`;
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return remainingMinutes === 0 ? `${hours}h` : `${hours}h ${remainingMinutes}m`;
};

const buildDiagnosticsPrompt = (
  selectedRepoVersion: string,
  diagnostics: {
    staleFailedJobs: Array<{ jobId?: string; jobRepoVersion?: string }>;
    staleCreatedJobs: Array<{ jobId?: string; jobRepoVersion?: string }>;
    repoDriftBuilds: Array<{
      buildId: string;
      relatedJobId: string;
      jobRepoVersion?: string;
      buildInfo: { repoVersion: string };
    }>;
    failedWithDockerInfo: Array<{ buildId: string; dockerInfo?: { digest?: string } | null }>;
    selectedRepoStaleCreatedJobs: Array<{ jobId?: string; ageMinutes: number }>;
    selectedRepoStaleStartedBuilds: Array<{
      buildId: string;
      relatedJobId: string;
      ageMinutes: number;
    }>;
    selectedRepoJobCounts: {
      created: number;
      scheduled: number;
      inProgress: number;
      completed: number;
      failed: number;
    };
    selectedRepoBuildCounts: {
      started: number;
      failed: number;
      published: number;
    };
    selectedRepoBaseJobStatus: string;
    selectedRepoHubJobStatus: string;
    selectedRepoCreatedJobsOlderThan60m: number;
    selectedRepoOldestCreatedJobAgeMinutes: number | null;
    selectedRepoStartedBuildsOlderThan45m: number;
    selectedRepoStartedBuildsOlderThan6h: number;
    selectedRepoOldestStartedBuildAgeMinutes: number | null;
    selectedRepoMaxedOutFailedBuilds: number;
    totals: {
      jobs: number;
      builds: number;
      failedJobs: number;
      createdJobs: number;
    };
  },
) => {
  const lines = [
    `Investigate GameCI queue blockage for Docker repo version ${selectedRepoVersion}.`,
    '',
    'Scope notes:',
    '- Job counts below are GLOBAL - queueStatus returns jobs across all repo versions.',
    `- Build counts below are SCOPED to repo version ${selectedRepoVersion}.`,
    '',
    'Summary:',
    `- Total jobs returned (global): ${diagnostics.totals.jobs}`,
    `- Total builds returned (repo ${selectedRepoVersion}): ${diagnostics.totals.builds}`,
    `- Failed editor jobs (global): ${diagnostics.totals.failedJobs}`,
    `- Created editor jobs (global): ${diagnostics.totals.createdJobs}`,
    `- Older-version failed jobs: ${diagnostics.staleFailedJobs.length}`,
    `- Older-version created jobs: ${diagnostics.staleCreatedJobs.length}`,
    `- Repo-version drift builds (build repo == ${selectedRepoVersion}, job repo != ${selectedRepoVersion}): ${diagnostics.repoDriftBuilds.length}`,
    `- Failed builds with Docker metadata: ${diagnostics.failedWithDockerInfo.length}`,
    `- Selected repo base job status: ${diagnostics.selectedRepoBaseJobStatus}`,
    `- Selected repo hub job status: ${diagnostics.selectedRepoHubJobStatus}`,
    `- Selected repo editor jobs by status: created=${diagnostics.selectedRepoJobCounts.created}, scheduled=${diagnostics.selectedRepoJobCounts.scheduled}, inProgress=${diagnostics.selectedRepoJobCounts.inProgress}, completed=${diagnostics.selectedRepoJobCounts.completed}, failed=${diagnostics.selectedRepoJobCounts.failed}`,
    `- Selected repo builds by status: started=${diagnostics.selectedRepoBuildCounts.started}, failed=${diagnostics.selectedRepoBuildCounts.failed}, published=${diagnostics.selectedRepoBuildCounts.published}`,
    `- Selected repo created jobs older than 60m: ${diagnostics.selectedRepoCreatedJobsOlderThan60m}`,
    `- Selected repo oldest created job age: ${formatAgeMinutes(diagnostics.selectedRepoOldestCreatedJobAgeMinutes)}`,
    `- Selected repo started builds older than 45m: ${diagnostics.selectedRepoStartedBuildsOlderThan45m}`,
    `- Selected repo started builds older than 6h: ${diagnostics.selectedRepoStartedBuildsOlderThan6h}`,
    `- Selected repo oldest started build age: ${formatAgeMinutes(diagnostics.selectedRepoOldestStartedBuildAgeMinutes)}`,
    `- Selected repo maxed-out failed builds (15+ failures): ${diagnostics.selectedRepoMaxedOutFailedBuilds}`,
  ];

  if (diagnostics.selectedRepoStaleCreatedJobs.length > 0) {
    const total = diagnostics.selectedRepoStaleCreatedJobs.length;
    const label =
      total > 10
        ? `Selected repo created jobs older than 60m: (showing first 10 of ${total})`
        : 'Selected repo created jobs older than 60m:';
    lines.push('', label);
    diagnostics.selectedRepoStaleCreatedJobs.slice(0, 10).forEach((job) => {
      lines.push(`- ${job.jobId} (${formatAgeMinutes(job.ageMinutes)} old)`);
    });
  }

  if (diagnostics.selectedRepoStaleStartedBuilds.length > 0) {
    const total = diagnostics.selectedRepoStaleStartedBuilds.length;
    const label =
      total > 10
        ? `Selected repo started builds older than 45m: (showing first 10 of ${total})`
        : 'Selected repo started builds older than 45m:';
    lines.push('', label);
    diagnostics.selectedRepoStaleStartedBuilds.slice(0, 10).forEach((build) => {
      lines.push(
        `- ${build.buildId} linked to ${build.relatedJobId} (${formatAgeMinutes(build.ageMinutes)} old)`,
      );
    });
  }

  if (diagnostics.staleFailedJobs.length > 0) {
    const total = diagnostics.staleFailedJobs.length;
    const label =
      total > 10
        ? `Older-version failed jobs: (showing first 10 of ${total})`
        : 'Older-version failed jobs:';
    lines.push('', label);
    diagnostics.staleFailedJobs.slice(0, 10).forEach((job) => {
      lines.push(`- ${job.jobId} (repo ${job.jobRepoVersion})`);
    });
  }

  if (diagnostics.staleCreatedJobs.length > 0) {
    const total = diagnostics.staleCreatedJobs.length;
    const label =
      total > 10
        ? `Older-version created jobs: (showing first 10 of ${total})`
        : 'Older-version created jobs:';
    lines.push('', label);
    diagnostics.staleCreatedJobs.slice(0, 10).forEach((job) => {
      lines.push(`- ${job.jobId} (repo ${job.jobRepoVersion})`);
    });
  }

  if (diagnostics.repoDriftBuilds.length > 0) {
    const total = diagnostics.repoDriftBuilds.length;
    const label =
      total > 10
        ? `Repo-version drift builds: (showing first 10 of ${total})`
        : 'Repo-version drift builds:';
    lines.push('', label);
    diagnostics.repoDriftBuilds.slice(0, 10).forEach((build) => {
      lines.push(
        `- ${build.buildId} linked to ${build.relatedJobId} (job repo ${build.jobRepoVersion}, build repo ${build.buildInfo.repoVersion})`,
      );
    });
  }

  if (diagnostics.failedWithDockerInfo.length > 0) {
    const total = diagnostics.failedWithDockerInfo.length;
    const label =
      total > 10
        ? `Failed builds that already have Docker metadata: (showing first 10 of ${total})`
        : 'Failed builds that already have Docker metadata:';
    lines.push('', label);
    diagnostics.failedWithDockerInfo.slice(0, 10).forEach((build) => {
      lines.push(`- ${build.buildId} (digest ${build.dockerInfo?.digest || 'n/a'})`);
    });
  }

  lines.push(
    '',
    'Determine whether failed jobs are blocking created jobs, whether maxed-out failed builds need automatic reset/retry, and whether any builds should be reconciled as published from DockerHub state.',
  );

  return lines.join('\n');
};

const QueueManagementPanel = ({ selectedRepoVersion }: Props) => {
  const [data, setData] = useState<QueueStatusResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const clipboard = useClipboard();
  const notify = useNotification();

  const fetchQueueStatus = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const url = new URL(`${config.backendUrl}/queueStatus`);
      if (selectedRepoVersion) {
        url.searchParams.set('repoVersion', selectedRepoVersion);
      }

      const response = await fetch(url.toString());
      if (!response.ok) {
        let message = `Request failed (${response.status})`;
        try {
          const body = await response.json();
          message = body.message || message;
        } catch {
          /* non-JSON response */
        }
        throw new Error(message);
      }
      const body = await response.json();
      setData(body);
    } catch (fetchError: unknown) {
      const message =
        fetchError instanceof Error ? fetchError.message : 'Failed to load queue status';
      setError(message);
    } finally {
      setLoading(false);
    }
  }, [selectedRepoVersion]);

  useEffect(() => {
    fetchQueueStatus();
  }, [fetchQueueStatus]);

  const diagnostics = useMemo(() => {
    const jobs = data?.jobs || [];
    const builds = data?.builds || [];
    const jobMap = new Map<string, QueueJob>();

    for (const job of jobs) {
      const id = job.NO_ID_FIELD || job.id;
      if (id) {
        jobMap.set(id, job);
      }
    }

    const editorJobs = jobs.filter((job) => job.imageType === 'editor');
    const selectedRepoJobs = jobs.filter((job) => getJobRepoVersion(job) === selectedRepoVersion);
    const selectedRepoEditorJobs = selectedRepoJobs.filter((job) => job.imageType === 'editor');
    const selectedRepoBaseJob = selectedRepoJobs.find((job) => job.imageType === 'base');
    const selectedRepoHubJob = selectedRepoJobs.find((job) => job.imageType === 'hub');
    const staleFailedJobs = editorJobs
      .filter(
        (job) =>
          job.status === 'failed' &&
          getJobRepoVersion(job) &&
          getJobRepoVersion(job) !== selectedRepoVersion,
      )
      .map((job) => ({
        jobId: job.NO_ID_FIELD || job.id,
        jobRepoVersion: getJobRepoVersion(job),
        status: job.status,
      }));

    const staleCreatedJobs = editorJobs
      .filter(
        (job) =>
          job.status === 'created' &&
          getJobRepoVersion(job) &&
          getJobRepoVersion(job) !== selectedRepoVersion,
      )
      .map((job) => ({
        jobId: job.NO_ID_FIELD || job.id,
        jobRepoVersion: getJobRepoVersion(job),
        status: job.status,
      }));

    const repoDriftBuilds = builds
      .filter((build) => build.imageType === 'editor')
      .map((build) => {
        const job = jobMap.get(build.relatedJobId);
        return Object.assign({}, build, {
          jobRepoVersion: getJobRepoVersion(job),
        });
      })
      .filter(
        (build) =>
          build.jobRepoVersion &&
          build.buildInfo.repoVersion &&
          build.jobRepoVersion !== build.buildInfo.repoVersion,
      );

    const failedWithDockerInfo = builds.filter(
      (build) => build.status === 'failed' && build.dockerInfo?.digest,
    );
    const selectedRepoStartedBuilds = builds.filter((build) => build.status === 'started');
    const selectedRepoStartedBuildAges = selectedRepoStartedBuilds
      .map((build) => minutesSinceTimestamp(build.meta?.lastBuildStart))
      .filter((minutes): minutes is number => minutes !== null);
    const selectedRepoCreatedJobAges = selectedRepoEditorJobs
      .filter((job) => job.status === 'created')
      .map((job) => minutesSinceTimestamp(job.addedDate || job.modifiedDate))
      .filter((minutes): minutes is number => minutes !== null);

    return {
      staleFailedJobs,
      staleCreatedJobs,
      repoDriftBuilds,
      failedWithDockerInfo,
      selectedRepoStaleCreatedJobs: selectedRepoEditorJobs
        .filter((job) => job.status === 'created')
        .map((job) => ({
          jobId: job.NO_ID_FIELD || job.id,
          ageMinutes: minutesSinceTimestamp(job.addedDate || job.modifiedDate) || 0,
        }))
        .filter((job) => job.ageMinutes >= 60)
        .sort((a, b) => b.ageMinutes - a.ageMinutes),
      selectedRepoStaleStartedBuilds: selectedRepoStartedBuilds
        .map((build) => ({
          buildId: build.buildId,
          relatedJobId: build.relatedJobId,
          ageMinutes: minutesSinceTimestamp(build.meta?.lastBuildStart) || 0,
        }))
        .filter((build) => build.ageMinutes >= 45)
        .sort((a, b) => b.ageMinutes - a.ageMinutes),
      selectedRepoJobCounts: {
        created: selectedRepoEditorJobs.filter((job) => job.status === 'created').length,
        scheduled: selectedRepoEditorJobs.filter((job) => job.status === 'scheduled').length,
        inProgress: selectedRepoEditorJobs.filter((job) => job.status === 'inProgress').length,
        completed: selectedRepoEditorJobs.filter((job) => job.status === 'completed').length,
        failed: selectedRepoEditorJobs.filter((job) => job.status === 'failed').length,
      },
      selectedRepoBuildCounts: {
        started: builds.filter((build) => build.status === 'started').length,
        failed: builds.filter((build) => build.status === 'failed').length,
        published: builds.filter((build) => build.status === 'published').length,
      },
      selectedRepoBaseJobStatus: selectedRepoBaseJob?.status || 'missing',
      selectedRepoHubJobStatus: selectedRepoHubJob?.status || 'missing',
      selectedRepoCreatedJobsOlderThan60m: selectedRepoCreatedJobAges.filter(
        (minutes) => minutes >= 60,
      ).length,
      selectedRepoOldestCreatedJobAgeMinutes:
        selectedRepoCreatedJobAges.length > 0 ? Math.max(...selectedRepoCreatedJobAges) : null,
      selectedRepoStartedBuildsOlderThan45m: selectedRepoStartedBuildAges.filter(
        (minutes) => minutes >= 45,
      ).length,
      selectedRepoStartedBuildsOlderThan6h: selectedRepoStartedBuildAges.filter(
        (minutes) => minutes >= 360,
      ).length,
      selectedRepoOldestStartedBuildAgeMinutes:
        selectedRepoStartedBuildAges.length > 0 ? Math.max(...selectedRepoStartedBuildAges) : null,
      selectedRepoMaxedOutFailedBuilds: builds.filter(
        (build) => build.status === 'failed' && (build.meta?.failureCount || 0) >= 15,
      ).length,
      totals: {
        jobs: jobs.length,
        builds: builds.length,
        failedJobs: editorJobs.filter((job) => job.status === 'failed').length,
        createdJobs: editorJobs.filter((job) => job.status === 'created').length,
      },
    };
  }, [data, selectedRepoVersion]);

  const copyDiagnosticsPrompt = useCallback(async () => {
    await notify.promise(
      clipboard.write(buildDiagnosticsPrompt(selectedRepoVersion, diagnostics)),
      {
        loading: <Spinner type="spin" />,
        success: 'Copied diagnostics prompt to clipboard',
        error: 'Your browser does not support copying to clipboard',
      },
    );
  }, [clipboard, diagnostics, notify, selectedRepoVersion]);

  const likelyBlockers = useMemo(() => {
    const blockers: string[] = [];

    if (diagnostics.selectedRepoBaseJobStatus !== 'completed') {
      blockers.push(
        `Base image job for ${selectedRepoVersion} is ${diagnostics.selectedRepoBaseJobStatus}, so editor scheduling may be waiting on base-image completion.`,
      );
    }

    if (diagnostics.selectedRepoHubJobStatus !== 'completed') {
      blockers.push(
        `Hub image job for ${selectedRepoVersion} is ${diagnostics.selectedRepoHubJobStatus}, so editor scheduling may be waiting on hub-image completion.`,
      );
    }

    if (
      diagnostics.selectedRepoJobCounts.created > 0 &&
      diagnostics.selectedRepoJobCounts.scheduled === 0 &&
      diagnostics.selectedRepoJobCounts.inProgress === 0
    ) {
      blockers.push(
        `Selected repo has created editor jobs but no scheduled or in-progress editor jobs, which points to scheduling starvation rather than per-build failure recovery.`,
      );
    }

    if (diagnostics.selectedRepoStaleStartedBuilds.length > 0) {
      blockers.push(
        `Selected repo has started builds older than 45 minutes, so queue slots may be occupied by stale workflows that need backend reconciliation.`,
      );
    }

    if (diagnostics.selectedRepoMaxedOutFailedBuilds > 0) {
      blockers.push(
        `Selected repo still has builds at max retry count, so automatic reset/retry coverage is relevant for this repo version.`,
      );
    }

    if (blockers.length === 0) {
      blockers.push(
        'No obvious blocker from the current snapshot. Focus next on scheduled/in-progress job throughput and whether workers are actually reporting back to the backend.',
      );
    }

    return blockers;
  }, [diagnostics, selectedRepoVersion]);

  return (
    <section style={{ ...sectionStyle, marginBottom: 16 }}>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 8,
          alignItems: 'center',
          marginBottom: 12,
        }}
      >
        <strong>Admin Queue Management</strong>
        <span style={{ opacity: 0.65, fontSize: '0.85em' }}>
          Global queue diagnostics for the selected repo version `{selectedRepoVersion}`
        </span>
        <button
          type="button"
          onClick={() => {
            copyDiagnosticsPrompt();
          }}
          disabled={loading || !!error}
          style={{
            padding: '4px 8px',
            borderRadius: 4,
            border: '1px solid #ccc',
            background: 'transparent',
            cursor: loading || error ? 'not-allowed' : 'pointer',
            fontSize: '0.85em',
          }}
        >
          Copy diagnostics prompt
        </button>
        <button
          type="button"
          onClick={() => {
            fetchQueueStatus();
          }}
          style={{
            marginLeft: 'auto',
            padding: '4px 8px',
            borderRadius: 4,
            border: '1px solid #ccc',
            background: 'transparent',
            cursor: 'pointer',
            fontSize: '0.85em',
          }}
        >
          Refresh queue state
        </button>
      </div>

      {loading && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Spinner type="slow" /> Loading queue diagnostics...
        </div>
      )}

      {!loading && error && (
        <div style={{ ...statStyle('#ef4444') }}>
          Queue diagnostics failed: <strong>{error}</strong>
        </div>
      )}

      {!loading && !error && (
        <>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
            <span style={statStyle('#666')}>
              Jobs: <strong>{diagnostics.totals.jobs}</strong>
            </span>
            <span style={statStyle('#2563eb')}>
              Builds: <strong>{diagnostics.totals.builds}</strong>
            </span>
            <span style={statStyle('#ef4444')}>
              Failed editor jobs: <strong>{diagnostics.totals.failedJobs}</strong>
            </span>
            <span style={statStyle('#f59e0b')}>
              Created editor jobs: <strong>{diagnostics.totals.createdJobs}</strong>
            </span>
            <span style={statStyle('#b45309')}>
              Older-version failed jobs: <strong>{diagnostics.staleFailedJobs.length}</strong>
            </span>
            <span style={statStyle('#7c3aed')}>
              Repo-version drift builds: <strong>{diagnostics.repoDriftBuilds.length}</strong>
            </span>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
            <span style={statStyle('#0f766e')}>
              Base job: <strong>{diagnostics.selectedRepoBaseJobStatus}</strong>
            </span>
            <span style={statStyle('#0369a1')}>
              Hub job: <strong>{diagnostics.selectedRepoHubJobStatus}</strong>
            </span>
            <span style={statStyle('#7c2d12')}>
              Repo created 60m+: <strong>{diagnostics.selectedRepoCreatedJobsOlderThan60m}</strong>
            </span>
            <span style={statStyle('#92400e')}>
              Started 45m+: <strong>{diagnostics.selectedRepoStartedBuildsOlderThan45m}</strong>
            </span>
            <span style={statStyle('#991b1b')}>
              Started 6h+: <strong>{diagnostics.selectedRepoStartedBuildsOlderThan6h}</strong>
            </span>
            <span style={statStyle('#78350f')}>
              Maxed failed: <strong>{diagnostics.selectedRepoMaxedOutFailedBuilds}</strong>
            </span>
          </div>

          <p style={{ opacity: 0.75, fontSize: '0.85em', marginBottom: 12 }}>
            Use this panel to identify queue states that need intervention. Existing admin actions
            on this page remain the operational controls: reset failed builds, retry builds, and
            clean up stuck builds.
          </p>

          <div style={{ display: 'grid', gap: 12 }}>
            <div>
              <h3 style={{ marginBottom: 8 }}>Likely Blockers</h3>
              <div style={{ ...sectionStyle, padding: '10px 12px' }}>
                {likelyBlockers.map((blocker) => (
                  <p key={blocker} style={{ margin: '0 0 8px 0', fontSize: '0.85em' }}>
                    {blocker}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h3 style={{ marginBottom: 8 }}>Selected Repo Queue Health</h3>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={cellStyle}>Metric</th>
                    <th style={cellStyle}>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={cellStyle}>Editor jobs: created / scheduled / in progress</td>
                    <td style={cellStyle}>
                      {diagnostics.selectedRepoJobCounts.created} /{' '}
                      {diagnostics.selectedRepoJobCounts.scheduled} /{' '}
                      {diagnostics.selectedRepoJobCounts.inProgress}
                    </td>
                  </tr>
                  <tr>
                    <td style={cellStyle}>Editor jobs: completed / failed</td>
                    <td style={cellStyle}>
                      {diagnostics.selectedRepoJobCounts.completed} /{' '}
                      {diagnostics.selectedRepoJobCounts.failed}
                    </td>
                  </tr>
                  <tr>
                    <td style={cellStyle}>Builds: started / failed / published</td>
                    <td style={cellStyle}>
                      {diagnostics.selectedRepoBuildCounts.started} /{' '}
                      {diagnostics.selectedRepoBuildCounts.failed} /{' '}
                      {diagnostics.selectedRepoBuildCounts.published}
                    </td>
                  </tr>
                  <tr>
                    <td style={cellStyle}>Oldest created job</td>
                    <td style={cellStyle}>
                      {formatAgeMinutes(diagnostics.selectedRepoOldestCreatedJobAgeMinutes)}
                    </td>
                  </tr>
                  <tr>
                    <td style={cellStyle}>Oldest started build</td>
                    <td style={cellStyle}>
                      {formatAgeMinutes(diagnostics.selectedRepoOldestStartedBuildAgeMinutes)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h3 style={{ marginBottom: 8 }}>Selected Repo Created Jobs Older Than 60m</h3>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={cellStyle}>Job ID</th>
                    <th style={cellStyle}>Age</th>
                    <th style={cellStyle}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {diagnostics.selectedRepoStaleCreatedJobs.slice(0, 12).map((job) => (
                    <tr key={job.jobId}>
                      <td style={cellStyle}>{job.jobId}</td>
                      <td style={cellStyle}>{formatAgeMinutes(job.ageMinutes)}</td>
                      <td style={cellStyle}>
                        Scheduling has not promoted this job out of created state. Check whether
                        base/hub prerequisites or queue capacity are blocking dispatch.
                      </td>
                    </tr>
                  ))}
                  {diagnostics.selectedRepoStaleCreatedJobs.length === 0 && (
                    <tr>
                      <td style={cellStyle} colSpan={3}>
                        No selected-repo created jobs older than 60 minutes detected.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div>
              <h3 style={{ marginBottom: 8 }}>Selected Repo Started Builds Older Than 45m</h3>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={cellStyle}>Build ID</th>
                    <th style={cellStyle}>Job ID</th>
                    <th style={cellStyle}>Age</th>
                    <th style={cellStyle}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {diagnostics.selectedRepoStaleStartedBuilds.slice(0, 12).map((build) => (
                    <tr key={build.buildId}>
                      <td style={cellStyle}>{build.buildId}</td>
                      <td style={cellStyle}>{build.relatedJobId}</td>
                      <td style={cellStyle}>{formatAgeMinutes(build.ageMinutes)}</td>
                      <td style={cellStyle}>
                        If DockerHub already has the image, this should be auto-reconciled back to
                        published. If not, this build may still be occupying queue capacity.
                      </td>
                    </tr>
                  ))}
                  {diagnostics.selectedRepoStaleStartedBuilds.length === 0 && (
                    <tr>
                      <td style={cellStyle} colSpan={4}>
                        No selected-repo started builds older than 45 minutes detected.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div>
              <h3 style={{ marginBottom: 8 }}>Repo-Version Drift Builds</h3>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={cellStyle}>Build ID</th>
                    <th style={cellStyle}>Job ID</th>
                    <th style={cellStyle}>Job Repo</th>
                    <th style={cellStyle}>Build Repo</th>
                    <th style={cellStyle}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {diagnostics.repoDriftBuilds.slice(0, 12).map((build) => (
                    <tr key={build.buildId}>
                      <td style={cellStyle}>{build.buildId}</td>
                      <td style={cellStyle}>{build.relatedJobId}</td>
                      <td style={cellStyle}>{build.jobRepoVersion}</td>
                      <td style={cellStyle}>{build.buildInfo.repoVersion}</td>
                      <td style={cellStyle}>
                        Investigate retry churn. This build is attached to an older job but is
                        retrying against a newer repo version.
                      </td>
                    </tr>
                  ))}
                  {diagnostics.repoDriftBuilds.length === 0 && (
                    <tr>
                      <td style={cellStyle} colSpan={5}>
                        No repo-version drift detected.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div>
              <h3 style={{ marginBottom: 8 }}>Older-Version Failed Jobs</h3>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={cellStyle}>Job ID</th>
                    <th style={cellStyle}>Job Repo</th>
                    <th style={cellStyle}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {diagnostics.staleFailedJobs.slice(0, 12).map((job) => (
                    <tr key={job.jobId}>
                      <td style={cellStyle}>{job.jobId}</td>
                      <td style={cellStyle}>{job.jobRepoVersion}</td>
                      <td style={cellStyle}>
                        Should be superseded so it stops competing with `{selectedRepoVersion}`.
                      </td>
                    </tr>
                  ))}
                  {diagnostics.staleFailedJobs.length === 0 && (
                    <tr>
                      <td style={cellStyle} colSpan={3}>
                        No older-version failed jobs detected.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div>
              <h3 style={{ marginBottom: 8 }}>Older-Version Created Jobs</h3>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={cellStyle}>Job ID</th>
                    <th style={cellStyle}>Job Repo</th>
                    <th style={cellStyle}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {diagnostics.staleCreatedJobs.slice(0, 12).map((job) => (
                    <tr key={job.jobId}>
                      <td style={cellStyle}>{job.jobId}</td>
                      <td style={cellStyle}>{job.jobRepoVersion}</td>
                      <td style={cellStyle}>
                        Candidate for superseding if it remains after the queue moves to the latest
                        repo version.
                      </td>
                    </tr>
                  ))}
                  {diagnostics.staleCreatedJobs.length === 0 && (
                    <tr>
                      <td style={cellStyle} colSpan={3}>
                        No older-version created jobs detected.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div>
              <h3 style={{ marginBottom: 8 }}>Failed Builds With Docker Metadata</h3>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={cellStyle}>Build ID</th>
                    <th style={cellStyle}>Digest</th>
                    <th style={cellStyle}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {diagnostics.failedWithDockerInfo.slice(0, 12).map((build) => (
                    <tr key={build.buildId}>
                      <td style={cellStyle}>{build.buildId}</td>
                      <td style={cellStyle}>{build.dockerInfo?.digest}</td>
                      <td style={cellStyle}>
                        Reconcile this failed build against publication state before retrying.
                      </td>
                    </tr>
                  ))}
                  {diagnostics.failedWithDockerInfo.length === 0 && (
                    <tr>
                      <td style={cellStyle} colSpan={3}>
                        No failed builds with Docker metadata detected.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default QueueManagementPanel;
