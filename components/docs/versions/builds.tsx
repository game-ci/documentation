import BuildFailureDetails from '@/components/docs/versions/build-failure-details';
import DockerImageLink from '@/components/docs/versions/docker-image-link';
import { ColumnsType } from 'antd/es/table';
import React from 'react';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { Table, Tooltip } from 'antd';
import styles from './builds.module.css';

interface RepoVersionInfo {
  version: string;
  major: number;
  minor: number;
  patch: number;
}

interface Props {
  ciJobId: string;
  repoVersionInfo: RepoVersionInfo;
}

const Builds = ({ ciJobId, repoVersionInfo, ...props }: Props) => {
  const loading = <p>Fetching builds...</p>;

  const ciBuilds = useFirestore().collection('ciBuilds').where('relatedJobId', '==', ciJobId);

  const { status, data } = useFirestoreCollectionData<{ [key: string]: any }>(ciBuilds);
  const isLoading = status === 'loading';

  if (isLoading) {
    return loading;
  }

  const columns = [
    {
      width: 45,
      dataIndex: 'status',
      key: 'status',
      render: (value, record) => {
        if (value === 'published') return '✅';
        if (value === 'failed') return <Tooltip title={record.failure?.reason}>⚠</Tooltip>;
        return value;
      },
    },
    {
      width: 45,
      render: (value, record) => {
        const { buildInfo, dockerInfo } = record;
        return dockerInfo && <DockerImageLink dockerInfo={dockerInfo} buildInfo={buildInfo} />;
      },
      key: 'dockerInfo-link-button',
    },
    {
      title: 'Build identifier',
      dataIndex: 'buildId',
      key: 'buildId',
      onFilter: (value, record) => record.buildId.includes(value),
      defaultSortOrder: 'ascend',
      sorter: (a, b) => a.buildId.localeCompare(b.buildId, 'en-GB'),
      ellipsis: true,
    },
    {
      title: 'Image type',
      dataIndex: 'imageType',
      key: 'imageType',
      onFilter: (value, record) => record.imageType.includes(value),
      sorter: (a, b) => a.imageType.localeCompare(b.imageType, 'en-GB'),
      ellipsis: true,
    },
    {
      title: 'OS',
      dataIndex: ['buildInfo', 'baseOs'],
      key: 'buildInfo.baseOs',
      onFilter: (value, record) => record.buildInfo.baseOs.includes(value),
      sorter: (a, b) => a.buildInfo.baseOs.localeCompare(b.buildInfo.baseOs, 'en-GB'),
      ellipsis: true,
    },
    {
      title: 'Target platform',
      dataIndex: ['buildInfo', 'targetPlatform'],
      key: 'buildInfo.targetPlatform',
      onFilter: (value, record) => record.buildInfo.targetPlatform.includes(value),
      sorter: (a, b) =>
        a.buildInfo.targetPlatform.localeCompare(b.buildInfo.targetPlatform, 'en-GB'),
      ellipsis: true,
    },
    {
      title: 'Editor version',
      dataIndex: ['buildInfo', 'editorVersion'],
      key: 'buildInfo.editorVersion',
      onFilter: (value, record) => record.buildInfo.editorVersion.includes(value),
      sorter: (a, b) => a.buildInfo.editorVersion.localeCompare(b.buildInfo.editorVersion, 'en-GB'),
      ellipsis: true,
    },
    {
      title: 'Repo version',
      dataIndex: ['buildInfo', 'repoVersion'],
      key: 'buildInfo.repoVersion',
      onFilter: (value, record) => record.buildInfo.repoVersion.includes(value),
      sorter: (a, b) => a.buildInfo.repoVersion.localeCompare(b.buildInfo.repoVersion, 'en-GB'),
      ellipsis: true,
    },
  ] as ColumnsType<any>;

  const expandable = {
    rowExpandable: () => true,
    expandedRowClassName: () => styles.expandedContentRow,
    expandedRowRender: (record) => (
      <BuildFailureDetails
        style={{ margin: 0 }}
        ciJob={ciJobId}
        repoVersionInfo={repoVersionInfo}
        ciBuild={record}
      />
    ),
  };

  return (
    <Table
      {...props}
      key={ciJobId}
      dataSource={data}
      columns={columns}
      sticky
      rowKey={(row) => row.NO_ID_FIELD}
      rowClassName={() => styles.stickyRow}
      expandable={expandable}
      pagination={false}
    />
  );
};

export default Builds;
