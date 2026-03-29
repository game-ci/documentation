import React from 'react';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import UnityVersion from '@site/src/components/docs/versions/unity-version';
import MajorEditorVersion from './major-editor-version';
import type { StatusFilter } from './image-versions';

interface Props {
  selectedRepoVersion: string | undefined;
  searchQuery: string;
  statusFilter: StatusFilter;
}

const UnityVersions = ({ selectedRepoVersion, searchQuery, statusFilter }: Props) => {
  if (!selectedRepoVersion) return null;

  const ciJobs = useFirestore()
    .collection('ciJobs')
    .orderBy('editorVersionInfo.major', 'desc')
    .orderBy('editorVersionInfo.minor', 'desc')
    .orderBy('editorVersionInfo.patch', 'desc')
    .where('repoVersionInfo.version', '==', selectedRepoVersion);

  const { status, data } = useFirestoreCollectionData<{ [key: string]: any }>(ciJobs);
  const isLoading = status === 'loading';

  const loading = <p>Fetching versions...</p>;

  // Apply filters
  let filtered = isLoading ? [] : [...data];

  // Status filter
  if (statusFilter !== 'all') {
    filtered = filtered.filter((version) => {
      if (statusFilter === 'stuck') {
        return version.status === 'failed';
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

  const versions = {};

  if (filtered.length > 0) {
    // Sorting the data based on the version numbers to maintain the version order
    filtered.sort((a, b) => {
      const infoA = a.editorVersionInfo;
      const infoB = b.editorVersionInfo;

      const { major: majorA, minor: minorA, patch: patchA } = infoA;
      const { major: majorB, minor: minorB, patch: patchB } = infoB;

      if (majorA > majorB) return -1;
      if (majorA < majorB) return 1;

      if (minorA > minorB) return -1;
      if (minorA < minorB) return 1;

      let patchANumber = 0;
      for (const [index, currentValue] of patchA.split('f').entries()) {
        patchANumber += 10 ** (9 - 3 * index) * Number.parseInt(currentValue, 10);
      }
      let patchBNumber = 0;
      for (const [index, currentValue] of patchB.split('f').entries()) {
        patchBNumber += 10 ** (9 - 3 * index) * Number.parseInt(currentValue, 10);
      }

      return patchBNumber - patchANumber;
    });

    // Sort versions into organized array by major version number
    filtered.map((version) => {
      if (Number.parseInt(version.editorVersionInfo.major, 10) <= 2017) return version;

      if (!versions[version.editorVersionInfo.major])
        versions[version.editorVersionInfo.major] = [];

      versions[version.editorVersionInfo.major] = [
        ...versions[version.editorVersionInfo.major],
        version,
      ];
      return version;
    });
  }

  const hasFilters = searchQuery || statusFilter !== 'all';

  return (
    <main>
      {hasFilters && !isLoading && (
        <p style={{ opacity: 0.6, fontSize: '0.85em' }}>
          Showing {filtered.length} of {data.length} versions
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
          : Object.keys(versions)
              .reverse()
              .map((major) => (
                <MajorEditorVersion key={major} versionString={major} versions={versions[major]} />
              ))}
      </div>
    </main>
  );
};

export default UnityVersions;
