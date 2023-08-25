import React from 'react';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import Spinner from '@site/src/components/molecules/spinner';
import DockerImageLinkOrRetryButton from '@site/src/components/docs/versions/docker-image-link-or-retry-button';
import BuildFailureDetails from '@site/src/components/docs/versions/builds/build-failure-details';
import styles from './builds.module.scss';
import BuildRow from './build-row';

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

  // TODO: Tooltip component
  // TODO: Tooltips for build start/fail
  // TODO: Table sorting
  // TODO: Expandable information about build

  // const columns = [
  //   {
  //     width: 45,
  //     dataIndex: 'status',
  //     key: 'status',
  //     render: (value, record) => {
  //       const icon = mapBuildStatusToIcon[value];
  //       switch (value) {
  //         case 'published':
  //           return icon;
  //         case 'failed':
  //           return <Tooltip title={record.failure?.reason}>{icon}</Tooltip>;
  //         case 'started':
  //           return <Tooltip title="Build has started">{icon}</Tooltip>;
  //         default:
  //           return value;
  //       }
  //     },
  //   },
  //   {
  //     width: 45,
  //     render: (value, record) => <DockerImageLinkOrRetryButton record={record} />,
  //     key: 'docker-image-link-or-retry-button',
  //   },
  //   {
  //     title: 'Build identifier',
  //     dataIndex: 'buildId',
  //     key: 'buildId',
  //     onFilter: (value, record) => record.buildId.includes(value),
  //     defaultSortOrder: 'ascend',
  //     sorter: (a, b) => a.buildId.localeCompare(b.buildId, 'en-GB'),
  //     ellipsis: true,
  //   },
  //   {
  //     title: 'Image type',
  //     dataIndex: 'imageType',
  //     key: 'imageType',
  //     onFilter: (value, record) => record.imageType.includes(value),
  //     sorter: (a, b) => a.imageType.localeCompare(b.imageType, 'en-GB'),
  //     ellipsis: true,
  //   },
  //   {
  //     title: 'OS',
  //     dataIndex: ['buildInfo', 'baseOs'],
  //     key: 'buildInfo.baseOs',
  //     onFilter: (value, record) => record.buildInfo.baseOs.includes(value),
  //     sorter: (a, b) => a.buildInfo.baseOs.localeCompare(b.buildInfo.baseOs, 'en-GB'),
  //     ellipsis: true,
  //   },
  //   {
  //     title: 'Target platform',
  //     dataIndex: ['buildInfo', 'targetPlatform'],
  //     key: 'buildInfo.targetPlatform',
  //     onFilter: (value, record) => record.buildInfo.targetPlatform.includes(value),
  //     sorter: (a, b) =>
  //       a.buildInfo.targetPlatform.localeCompare(b.buildInfo.targetPlatform, 'en-GB'),
  //     ellipsis: true,
  //   },
  //   {
  //     title: 'Editor version',
  //     dataIndex: ['buildInfo', 'editorVersion'],
  //     key: 'buildInfo.editorVersion',
  //     onFilter: (value, record) => record.buildInfo.editorVersion.includes(value),
  //     sorter: (a, b) => a.buildInfo.editorVersion.localeCompare(b.buildInfo.editorVersion, 'en-GB'),
  //     ellipsis: true,
  //   },
  //   {
  //     title: 'Repo version',
  //     dataIndex: ['buildInfo', 'repoVersion'],
  //     key: 'buildInfo.repoVersion',
  //     onFilter: (value, record) => record.buildInfo.repoVersion.includes(value),
  //     sorter: (a, b) => a.buildInfo.repoVersion.localeCompare(b.buildInfo.repoVersion, 'en-GB'),
  //     ellipsis: true,
  //   },
  // ] as ColumnsType<any>;

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
      {data.map((build) => (
        <BuildRow build={build}>{expandable.expandedRowRender(build)}</BuildRow>
      ))}
    </table>
  );
};

export default Builds;
