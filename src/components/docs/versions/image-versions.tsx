import React, { useState } from 'react';
import SignInSignOutButton from '@site/src/components/auth/sign-in-sign-out-button';
import { SimpleAuthCheck } from '@site/src/components/auth/safe-auth-check';
import CleanUpStuckBuildsButton from './clean-up-stuck-builds-button';
import ResetAllFailedBuildsButton from './reset-all-failed-builds-button';
import BuildStatusDashboard from './build-status-dashboard';
import UnityVersions from './unity-versions';
import QueueManagementPanel from './queue-management-panel';
import styles from './unity-version.module.scss';

interface Props {
  versions: { [key: string]: any }[];
}

export type StatusFilter = 'all' | 'started' | 'failed' | 'published' | 'stuck';

const ImageVersions = ({ versions }: Props) => {
  const [selectedVersion, setSelectedVersion] = useState<any>(versions[0].NO_ID_FIELD);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');

  const filterBarStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    alignItems: 'center',
    padding: '8px 0',
  };

  const selectStyle: React.CSSProperties = {
    padding: '4px 8px',
    borderRadius: 4,
    border: '1px solid #ccc',
    background: 'transparent',
    fontSize: '0.85em',
  };

  const inputStyle: React.CSSProperties = {
    ...selectStyle,
    minWidth: 220,
  };

  const headerCardStyle: React.CSSProperties = {
    display: 'grid',
    gap: 12,
    padding: '14px 16px',
    borderRadius: 10,
    border: '1px solid #33333322',
    background: '#fafafa08',
    marginBottom: 12,
  };

  const toolbarStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  return (
    <main className={styles.versionsPanel}>
      <h1>Supported Editor Versions</h1>

      <div style={headerCardStyle}>
        <div style={toolbarStyle}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <strong>Docker repo version</strong>
            <select
              value={selectedVersion}
              onChange={(event) => setSelectedVersion(event.target.value)}
              style={selectStyle}
            >
              {versions.map((version) => {
                const { NO_ID_FIELD: id } = version;

                return (
                  <option key={id} value={id}>
                    {id}
                  </option>
                );
              })}
            </select>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <SimpleAuthCheck fallback={<span />} requiredClaims={{ admin: true }}>
              <ResetAllFailedBuildsButton />
              <CleanUpStuckBuildsButton />
            </SimpleAuthCheck>
            <SignInSignOutButton />
          </div>
        </div>

        <p style={{ margin: 0, opacity: 0.7, fontSize: '0.85em' }}>
          Admin controls for queue recovery, retry management, and selected-repo diagnostics live
          below. Use the dashboard first, then the queue panel for root-cause detail.
        </p>
      </div>

      <BuildStatusDashboard selectedRepoVersion={selectedVersion} />

      <SimpleAuthCheck fallback={<span />} requiredClaims={{ admin: true }}>
        <QueueManagementPanel selectedRepoVersion={selectedVersion} />
      </SimpleAuthCheck>

      <div style={filterBarStyle}>
        <input
          type="text"
          placeholder="Search by version, platform, OS..."
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          style={inputStyle}
        />
        <select
          value={statusFilter}
          onChange={(event) => setStatusFilter(event.target.value as StatusFilter)}
          style={selectStyle}
        >
          <option value="all">All statuses</option>
          <option value="published">Published</option>
          <option value="started">In progress</option>
          <option value="failed">Failed</option>
          <option value="stuck">Stuck (15+ failures)</option>
        </select>
        {(searchQuery || statusFilter !== 'all') && (
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setStatusFilter('all');
            }}
            style={{
              padding: '4px 8px',
              borderRadius: 4,
              border: '1px solid #ccc',
              background: 'transparent',
              fontSize: '0.85em',
              cursor: 'pointer',
            }}
          >
            Clear filters
          </button>
        )}
      </div>

      <UnityVersions
        selectedRepoVersion={selectedVersion}
        searchQuery={searchQuery}
        statusFilter={statusFilter}
      />
    </main>
  );
};

export default ImageVersions;
