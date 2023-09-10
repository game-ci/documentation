import React from 'react';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import BuildFailureDetails from '@site/src/components/docs/versions/builds/build-failure-details';
import styles from './builds.module.scss';
import BuildRow from './build-row';
import { Record } from '../docker-image-link-or-retry-button';

interface RepoVersionInfo {
  version: string;
  major: number;
  minor: number;
  patch: number;
}

interface Props {
  ciJobId: string;
  repoVersionInfo: RepoVersionInfo;
  editorVersionInfo;
}

const Builds = ({ ciJobId, repoVersionInfo, editorVersionInfo }: Props) => {
  const loading = <p>Fetching builds...</p>;

  const ciBuilds = useFirestore().collection('ciBuilds').where('relatedJobId', '==', ciJobId);

  const { status, data } = useFirestoreCollectionData<{ [key: string]: any }>(ciBuilds);
  const isLoading = status === 'loading';

  if (isLoading) {
    return loading;
  }

  const expandable = {
    expandedRowRender: (record) => (
      <BuildFailureDetails
        style={{ margin: 0 }}
        ciJob={ciJobId}
        editorVersionInfo={editorVersionInfo}
        repoVersionInfo={repoVersionInfo}
        ciBuild={record}
      />
    ),
  };

  return (
    <table className="w-full max-w-screen-lg block border-collapse">
      <tr className={styles.tableRow}>
        <th> </th>
        <th className="text-center">Status</th>
        <th>Build ID</th>
        <th>Image type</th>
        <th>OS</th>
        <th>Target Platform</th>
      </tr>
      {data.map((build: Record) => (
        <BuildRow build={build}>{expandable.expandedRowRender(build)}</BuildRow>
      ))}
    </table>
  );
};

export default Builds;
