import React, { useState } from 'react';
import SignInSignOutButton from '@site/src/components/auth/sign-in-sign-out-button';
import CleanUpStuckBuildsButton from './clean-up-stuck-builds-button';
import ResetAllFailedBuildsButton from './reset-all-failed-builds-button';
import BuildStatusDashboard from './build-status-dashboard';
import UnityVersions from './unity-versions';
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

  return (
    <main className={styles.versionsPanel}>
      <h1>Supported Editor Versions</h1>

      <div>
        <span>Docker repo version: </span>

        <select onChange={(event) => setSelectedVersion(event.target.value)}>
          {versions.map((version) => {
            const { NO_ID_FIELD: id } = version;

            return (
              <option key={id} value={id}>
                {id}
              </option>
            );
          })}
        </select>
        <span style={{ float: 'right', display: 'flex', alignItems: 'center', gap: 8 }}>
          <ResetAllFailedBuildsButton />
          <CleanUpStuckBuildsButton />
          <SignInSignOutButton />
        </span>
      </div>

      <BuildStatusDashboard selectedRepoVersion={selectedVersion} />

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
