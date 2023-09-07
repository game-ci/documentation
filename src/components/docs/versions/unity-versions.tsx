import React from 'react';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import UnityVersion from '@site/src/components/docs/versions/unity-version';
import MajorEditorVersion from './major-editor-version';

interface Props {
  selectedRepoVersion: string | undefined;
  // setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const UnityVersions = ({ selectedRepoVersion }: Props) => {
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
  const failures = isLoading ? [] : data.filter((version) => version.status === 'failed');

  const versions = {};

  if (data) {
    // Sorting the data based on the version numbers to maintain the version order
    data.sort((a, b) => {
      const infoA = a.editorVersionInfo;
      const infoB = b.editorVersionInfo;

      // Using major , minor and patch to compare the two numbers
      const { major: majorA, minor: minorA, patch: patchA } = infoA;
      const { major: majorB, minor: minorB, patch: patchB } = infoB;

      // First checking for major version.
      if (majorA > majorB) return -1;
      if (majorA < majorB) return 1;

      // If major version is equal check for minor version.
      if (minorA > minorB) return -1;
      if (minorA < minorB) return 1;

      // If major and minor both are equal check the patch version.

      // For patch assuming "f" is present and splitting based on that.(Can use regex to split also).

      // Calculating a patchNumber which is the priority offset based sum of the numbers in
      // the array formed after split. The offset is used to correctly get the priority.
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
    data.map((version) => {
      // Ignore if version is older than 2018.x
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

  return (
    <main>
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
                <MajorEditorVersion versionString={major} versions={versions[major]} />
              ))}
      </div>
    </main>
  );
};

export default UnityVersions;
