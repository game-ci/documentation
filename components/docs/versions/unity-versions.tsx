import UnityVersion from '@/components/docs/versions/unity-version';
import { Collapse } from 'antd';
import React, { Dispatch, SetStateAction } from 'react';
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
  setIsLoading(isLoading);

  const loading = <p>Fetching versions...</p>;
  return (
    <Collapse>
      {isLoading ? loading : data.map((version) => <UnityVersion data={version} />)}
    </Collapse>
  );
};

export default UnityVersions;
