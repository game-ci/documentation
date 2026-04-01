import React, { useEffect, useMemo, useState } from 'react';
import config from '@site/src/core/config';
import Spinner from '@site/src/components/molecules/spinner';

type QueueJob = {
  status: string;
  imageType: string;
  repoVersionInfo?: {
    version?: string;
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

const QueueManagementPanel = ({ selectedRepoVersion }: Props) => {
  const [data, setData] = useState<QueueStatusResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchQueueStatus = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`${config.backendUrl}/queueStatus`);
      const body = await response.json();
      if (!response.ok) {
        throw new Error(body.message || `Request failed (${response.status})`);
      }
      setData(body);
    } catch (fetchError: any) {
      setError(fetchError.message || 'Failed to load queue status');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchQueueStatus();
  }, []);

  const diagnostics = useMemo(() => {
    const jobs = data?.jobs || [];
    const builds = data?.builds || [];
    const jobMap = new Map<string, QueueJob>();

    jobs.forEach((job: any) => {
      const id = job.NO_ID_FIELD || job.id;
      if (id) {
        jobMap.set(id, job);
      }
    });

    const editorJobs = jobs.filter((job) => job.imageType === 'editor');
    const staleFailedJobs = editorJobs
      .filter(
        (job: any) =>
          job.status === 'failed' &&
          getJobRepoVersion(job) &&
          getJobRepoVersion(job) !== selectedRepoVersion,
      )
      .map((job: any) => ({
        jobId: job.NO_ID_FIELD || job.id,
        jobRepoVersion: getJobRepoVersion(job),
        status: job.status,
      }));

    const staleCreatedJobs = editorJobs
      .filter(
        (job: any) =>
          job.status === 'created' &&
          getJobRepoVersion(job) &&
          getJobRepoVersion(job) !== selectedRepoVersion,
      )
      .map((job: any) => ({
        jobId: job.NO_ID_FIELD || job.id,
        jobRepoVersion: getJobRepoVersion(job),
        status: job.status,
      }));

    const repoDriftBuilds = builds
      .filter((build) => build.imageType === 'editor')
      .map((build) => {
        const job = jobMap.get(build.relatedJobId);
        return {
          ...build,
          jobRepoVersion: getJobRepoVersion(job),
        };
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

    return {
      staleFailedJobs,
      staleCreatedJobs,
      repoDriftBuilds,
      failedWithDockerInfo,
      totals: {
        jobs: jobs.length,
        builds: builds.length,
        failedJobs: editorJobs.filter((job) => job.status === 'failed').length,
        createdJobs: editorJobs.filter((job) => job.status === 'created').length,
      },
    };
  }, [data, selectedRepoVersion]);

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
          onClick={() => void fetchQueueStatus()}
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

          <p style={{ opacity: 0.75, fontSize: '0.85em', marginBottom: 12 }}>
            Use this panel to identify queue states that need intervention. Existing admin actions
            on this page remain the operational controls: reset failed builds, retry builds, and
            clean up stuck builds.
          </p>

          <div style={{ display: 'grid', gap: 12 }}>
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
