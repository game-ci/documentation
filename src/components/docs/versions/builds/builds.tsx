import React, { useState } from 'react';
import { useFirestore, useFirestoreCollectionData, useUser } from 'reactfire';
import BuildFailureDetails from '@site/src/components/docs/versions/builds/build-failure-details';
import { SimpleAuthCheck } from '@site/src/components/auth/safe-auth-check';
import { useNotification } from '@site/src/core/hooks/use-notification';
import config from '@site/src/core/config';
import Spinner from '@site/src/components/molecules/spinner';
import styles from './builds.module.scss';
import BuildRow from './build-row';
import { Record } from '../docker-image-link-or-retry-button';

interface RepoVersionInfo {
  version: string;
  major: number;
  minor: number;
  patch: number;
}

interface Props {
  ciJobId: string;
  repoVersionInfo: RepoVersionInfo;
  editorVersionInfo;
}

const BulkActions = ({ selectedIds, onClear }: { selectedIds: string[]; onClear: () => void }) => {
  const [running, setRunning] = useState(false);
  const notify = useNotification();
  const { data: user } = useUser();

  const callEndpoint = async (endpoint: string, payload: object) => {
    const token = await user.getIdToken();
    const response = await fetch(`${config.backendUrl}/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify(payload),
    });
    const body = await response.json();
    if (!response.ok) {
      const detail = body.error ? `${body.message}: ${body.error}` : body.message;
      throw new Error(detail || `Request failed (${response.status})`);
    }
    return body;
  };

  const runBulkAction = async (endpoint: string, label: string) => {
    setRunning(true);
    try {
      let succeeded = 0;
      let failed = 0;
      const batchSize = 5;
      for (let offset = 0; offset < selectedIds.length; offset += batchSize) {
        const batch = selectedIds.slice(offset, offset + batchSize);
        // eslint-disable-next-line no-await-in-loop -- sequential batching is intentional
        const results = await Promise.allSettled(
          batch.map((buildId) => callEndpoint(endpoint, { buildId })),
        );
        succeeded += results.filter((r) => r.status === 'fulfilled').length;
        failed += results.filter((r) => r.status === 'rejected').length;
      }
      if (failed > 0) {
        notify.error(`${label} ${succeeded}/${selectedIds.length}. ${failed} failed.`);
      } else {
        notify.success(`${label} ${succeeded} of ${selectedIds.length} builds`);
      }
      onClear();
    } finally {
      setRunning(false);
    }
  };

  if (selectedIds.length === 0) return null;

  const barStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: '6px 12px',
    marginBottom: 8,
    borderRadius: 6,
    border: '1px solid #3b82f633',
    background: '#3b82f611',
    fontSize: '0.85em',
  };

  const buttonStyle: React.CSSProperties = {
    padding: '2px 10px',
    borderRadius: 4,
    border: '1px solid #ccc',
    background: 'transparent',
    cursor: running ? 'wait' : 'pointer',
    fontSize: '0.85em',
  };

  return (
    <div style={barStyle}>
      <strong>{selectedIds.length} selected</strong>
      <button
        type="button"
        style={buttonStyle}
        onClick={() => runBulkAction('resetFailedBuilds', 'Reset')}
        disabled={running}
      >
        {running ? <Spinner type="spin" /> : 'Reset failure counts'}
      </button>
      <button
        type="button"
        style={buttonStyle}
        onClick={() => runBulkAction('retryBuild', 'Retried')}
        disabled={running}
      >
        {running ? <Spinner type="spin" /> : 'Retry builds'}
      </button>
      <button
        type="button"
        style={{ ...buttonStyle, marginLeft: 'auto' }}
        onClick={onClear}
        disabled={running}
      >
        Clear selection
      </button>
    </div>
  );
};

const Builds = ({ ciJobId, repoVersionInfo, editorVersionInfo }: Props) => {
  const loading = <p>Fetching builds...</p>;
  const [selectedBuilds, setSelectedBuilds] = useState<Set<string>>(new Set());

  const ciBuilds = useFirestore().collection('ciBuilds').where('relatedJobId', '==', ciJobId);

  const { status, data } = useFirestoreCollectionData<{ [key: string]: any }>(ciBuilds);
  const isLoading = status === 'loading';

  if (isLoading) {
    return loading;
  }

  const toggleBuild = (buildId: string) => {
    setSelectedBuilds((previous) => {
      const next = new Set(previous);
      if (next.has(buildId)) next.delete(buildId);
      else next.add(buildId);
      return next;
    });
  };

  const toggleAll = () => {
    const failedBuilds = data.filter((b) => b.status === 'failed');
    if (selectedBuilds.size === failedBuilds.length && failedBuilds.length > 0) {
      setSelectedBuilds(new Set());
    } else {
      setSelectedBuilds(new Set(failedBuilds.map((b) => b.buildId)));
    }
  };

  const expandable = {
    expandedRowRender: (record) => (
      <BuildFailureDetails
        style={{ margin: 0 }}
        ciJob={ciJobId}
        editorVersionInfo={editorVersionInfo}
        repoVersionInfo={repoVersionInfo}
        ciBuild={record}
      />
    ),
  };

  const failedCount = data.filter((b) => b.status === 'failed').length;

  return (
    <>
      <SimpleAuthCheck fallback={<span />} requiredClaims={{ admin: true }}>
        <BulkActions
          selectedIds={[...selectedBuilds]}
          onClear={() => setSelectedBuilds(new Set())}
        />
      </SimpleAuthCheck>
      <table className="w-full max-w-screen-lg block border-collapse">
        <thead>
          <tr className={styles.tableRow}>
            <SimpleAuthCheck
              fallback={<th style={{ width: 30 }}> </th>}
              requiredClaims={{ admin: true }}
            >
              <th style={{ width: 30 }}>
                {failedCount > 0 && (
                  <input
                    type="checkbox"
                    checked={selectedBuilds.size === failedCount && failedCount > 0}
                    onChange={toggleAll}
                    title="Select all failed builds"
                    style={{ cursor: 'pointer' }}
                  />
                )}
              </th>
            </SimpleAuthCheck>
            <th> </th>
            <th className="text-center">Status</th>
            <th>Build ID</th>
            <th>Image type</th>
            <th>OS</th>
            <th>Target Platform</th>
          </tr>
        </thead>
        <tbody>
          {data.map((build: Record) => (
            <BuildRow
              key={build.buildId}
              build={build}
              selected={selectedBuilds.has(build.buildId)}
              onToggleSelect={() => toggleBuild(build.buildId)}
            >
              {expandable.expandedRowRender(build)}
            </BuildRow>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Builds;
