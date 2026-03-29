import React from 'react';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import Spinner from '@site/src/components/molecules/spinner';

interface Props {
  selectedRepoVersion: string | undefined;
}

const BuildStatusDashboard = ({ selectedRepoVersion }: Props) => {
  if (!selectedRepoVersion) return null;

  const ciBuilds = useFirestore()
    .collection('ciBuilds')
    .where('buildInfo.repoVersion', '==', selectedRepoVersion);

  const { status, data } = useFirestoreCollectionData<{ [key: string]: any }>(ciBuilds);

  if (status === 'loading') {
    return (
      <div style={{ padding: '8px 0', display: 'flex', alignItems: 'center', gap: 8 }}>
        <Spinner type="slow" /> Loading build stats...
      </div>
    );
  }

  const builds = data || [];
  const started = builds.filter((b) => b.status === 'started').length;
  const failed = builds.filter((b) => b.status === 'failed').length;
  const published = builds.filter((b) => b.status === 'published').length;
  const maxedOut = builds.filter(
    (b) => b.status === 'failed' && (b.meta?.failureCount || 0) >= 15,
  ).length;
  const total = builds.length;

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

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
        padding: '12px 0',
        alignItems: 'center',
      }}
    >
      <span style={statStyle('#666')}>
        Total: <strong>{total}</strong>
      </span>
      <span style={statStyle('#22c55e')}>
        Published: <strong>{published}</strong>
      </span>
      <span style={statStyle('#3b82f6')}>
        In progress: <strong>{started}</strong>
      </span>
      <span style={statStyle('#ef4444')}>
        Failed: <strong>{failed}</strong>
      </span>
      {maxedOut > 0 && (
        <span style={statStyle('#b45309')}>
          Stuck (15+): <strong>{maxedOut}</strong>
        </span>
      )}
      <span
        style={{
          marginLeft: 'auto',
          fontSize: '0.75em',
          opacity: 0.6,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 4,
        }}
      >
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: '#22c55e',
            display: 'inline-block',
            animation: 'pulse 2s infinite',
          }}
        />
        Live
      </span>
    </div>
  );
};

export default BuildStatusDashboard;
