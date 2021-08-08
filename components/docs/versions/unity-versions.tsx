import UnityVersion from '@/components/docs/versions/unity-version';
import Heading from '@/components/markdown/components/heading';
import { Collapse } from 'antd';
import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';

interface Props {
  selectedRepoVersion: string | undefined;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const UnityVersions = ({ selectedRepoVersion, setIsLoading }: Props) => {
  if (!selectedRepoVersion) return null;

  const ciJobs = useFirestore()
    .collection('ciJobs')
    .orderBy('editorVersionInfo.major', 'desc')
    .orderBy('editorVersionInfo.minor', 'desc')
    .orderBy('editorVersionInfo.patch', 'desc')
    .where('repoVersionInfo.version', '==', selectedRepoVersion);

  const { status, data } = useFirestoreCollectionData<{ [key: string]: any }>(ciJobs);
  const isLoading = status === 'loading';
  useEffect(() => {
    setIsLoading(isLoading);
  });

  const loading = <p>Fetching versions...</p>;
  const failures = isLoading ? [] : data.filter((version) => version.status === 'failed');

  if (data) {
    // Sorting the data based on the version numbers to maintain the version order
    data.sort((a, b) => {
      const numberStringA = a.NO_ID_FIELD.split('-')[1];
      const numberStringB = b.NO_ID_FIELD.split('-')[1];

      let numberArrayA = numberStringA.split('.');
      let numberArrayB = numberStringB.split('.');

      if (numberArrayA[0] > numberArrayB[0]) return -1;
      if (numberArrayA[0] < numberArrayB[0]) return 1;

      // Assuming here f keyword is present in last version.
      const temporaryA = numberArrayA[2].split('f');
      const temporaryB = numberArrayB[2].split('f');

      numberArrayA.pop();
      numberArrayA = [...numberArrayA, ...temporaryA];
      numberArrayB.pop();
      numberArrayB = [...numberArrayB, ...temporaryB];

      // sorting based on the versions. Using Multiplication to give priority
      const productionA =
        Number.parseInt(numberArrayA[1], 10) * 1000000 +
        Number.parseInt(numberArrayA[2], 10) * 1000 +
        Number.parseInt(numberArrayA[3], 10);
      const productionB =
        Number.parseInt(numberArrayB[1], 10) * 1000000 +
        Number.parseInt(numberArrayB[2], 10) * 1000 +
        Number.parseInt(numberArrayB[3], 10);

      return productionB - productionA;
    });
  }

  return (
    <main style={{ paddingTop: 24 }}>
      {failures.length > 0 && (
        <>
          <Heading level={3}>Current failures</Heading>
          <Collapse accordion style={{ marginBottom: 24 }}>
            {failures.map((version) => (
              <UnityVersion key={version.NO_ID_FIELD} data={version} />
            ))}
          </Collapse>
        </>
      )}

      <Heading level={3}>All versions</Heading>
      <Collapse accordion>
        {isLoading
          ? loading
          : data.map((version) => <UnityVersion key={version.NO_ID_FIELD} data={version} />)}
      </Collapse>
    </main>
  );
};

export default UnityVersions;
