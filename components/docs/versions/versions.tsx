import ImageVersions from '@/components/docs/versions/image-versions';
import React from 'react';
import isServer from '@/core/is-server';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';

const Versions = () => {
  const loading = <p>Fetching versions...</p>;
  if (isServer()) return loading;

  const repoVersions = useFirestore()
    .collection('repoVersions')
    .orderBy('major', 'desc')
    .orderBy('minor', 'desc')
    .orderBy('patch', 'desc');

  const { status, data } = useFirestoreCollectionData<{ [key: string]: any }>(repoVersions);

  return status === 'loading' ? loading : <ImageVersions versions={data} />;
};

export default Versions;
