import Version from '@/components/docs/versions/version';
import Heading from '@/components/markdown/components/heading';
import { Collapse, Select } from 'antd';
import React, { useState } from 'react';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';

const { Option } = Select;

interface Props {
  versions: { [key: string]: any }[];
}

const RepoVersions = ({ versions }: Props) => {
  const [selectedVersion, setSelectedVersion] = useState<any>(versions.slice(-1)[0].NO_ID_FIELD);
  const loading = <p>Fetching versions...</p>;

  const ciJobs = useFirestore()
    .collection('ciJobs')
    .where('repoVersionInfo.version', '==', selectedVersion);

  const { status, data } = useFirestoreCollectionData<{ [key: string]: any }>(ciJobs);
  const isLoading = status === 'loading';

  return (
    <main>
      <Heading level={1}>Versions (WIP)</Heading>
      <span>Docker repo version: </span>
      <Select defaultValue={selectedVersion} onChange={setSelectedVersion} loading={isLoading}>
        {versions.map((version) => {
          const { NO_ID_FIELD: id } = version;

          return <Option value={id}>{id}</Option>;
        })}
      </Select>
      <br />
      <br />
      <Collapse>{isLoading ? loading : data.map((version) => <Version data={version} />)}</Collapse>
    </main>
  );
};

export default RepoVersions;
