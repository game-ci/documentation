import RepoVersions from '@/components/docs/versions/repo-versions';
import React from 'react';
import isServer from '@/core/is-server';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';

const Versions = () => {
  const loading = <p>Fetching versions...</p>;
  if (isServer()) return loading;

  const repoVersions = useFirestore().collection('repoVersions');
  const { status, data } = useFirestoreCollectionData<{ [key: string]: any }>(repoVersions);
  // easily check the loading status
  return status === 'loading' ? loading : <RepoVersions versions={data} />;
};

export default Versions;
