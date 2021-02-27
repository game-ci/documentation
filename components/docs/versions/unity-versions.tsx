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
