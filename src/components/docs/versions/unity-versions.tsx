import React from 'react';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import UnityVersion from '@site/src/components/docs/versions/unity-version';
import MajorEditorVersion from './major-editor-version';
import type { StatusFilter } from './image-versions';
import { EditorVersionGroups, type CiJob } from './editor-version-groups';

interface Props {
  selectedRepoVersion: string | undefined;
  searchQuery: string;
  statusFilter: StatusFilter;
}

const UnityVersions = ({ selectedRepoVersion, searchQuery, statusFilter }: Props) => {
  const firestore = useFirestore();
  const ciJobs = firestore
    .collection('ciJobs')
    .orderBy('editorVersionInfo.major', 'desc')
    .orderBy('editorVersionInfo.minor', 'desc')
    .orderBy('editorVersionInfo.patch', 'desc')
    .where('repoVersionInfo.version', '==', selectedRepoVersion || '__none__');

  const { status, data } = useFirestoreCollectionData<CiJob>(ciJobs);

  if (!selectedRepoVersion) return null;
  const isLoading = status === 'loading';

  const loading = <p>Fetching versions...</p>;

  // Apply filters
  const listed = isLoading ? [] : data.filter(EditorVersionGroups.isListed);
  let filtered = listed;

  // Status filter
  if (statusFilter !== 'all') {
    filtered = filtered.filter((version) => {
      if (statusFilter === 'stuck') {
        return version.status === 'failed' && (version.meta?.failureCount || 0) >= 15;
      }
      return version.status === statusFilter;
    });
  }

  // Search filter (matches against the job ID which contains version info)
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter((version) => {
      const id = (version.NO_ID_FIELD || '').toLowerCase();
      const editor = version.editorVersionInfo
        ? `${version.editorVersionInfo.major}.${version.editorVersionInfo.minor}.${version.editorVersionInfo.patch}`
        : '';
      return id.toLowerCase().includes(q) || editor.toLowerCase().includes(q);
    });
  }

  const failures = filtered.filter((version) => version.status === 'failed');
  const groups = EditorVersionGroups.byMajor(filtered);

  const hasFilters = searchQuery || statusFilter !== 'all';

  return (
    <main>
      {hasFilters && !isLoading && (
        <p style={{ opacity: 0.6, fontSize: '0.85em' }}>
          Showing {filtered.length} of {listed.length} versions
        </p>
      )}

      {failures.length > 0 && (
        <>
          <h3>Current failures</h3>
          {failures.map((version) => (
            <UnityVersion key={version.NO_ID_FIELD} data={version} />
          ))}
        </>
      )}

      <div className="mt-4">
        {isLoading
          ? loading
          : groups.map(({ major, jobs }) => (
              <MajorEditorVersion key={major} versionString={major} versions={jobs} />
            ))}
      </div>
    </main>
  );
};

export default UnityVersions;
