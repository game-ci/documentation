import Heading from '@/components/markdown/components/heading';
import React from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

interface Props {
  data: { [key: string]: string };
}

const Version = ({ data, ...rest }: Props) => {
  const {
    NO_ID_FIELD: id,
    status,
    // imageType,
    editorVersionInfo,
    repoVersionInfo,
    meta,
    // addedDate,
    // modifiedDate,
  } = data;

  if (status === 'deprecated') return null;

  const mapStatus = {
    completed: '✔',
    failed: '😢',
    created: `${Math.random() < 0.5 ? '👷‍♀️' : '👷‍♂️'}`,
  };

  return (
    <Panel {...rest} header={`${mapStatus[status]} ${id}`} key={id}>
      <Heading level={4}>
        Status: {mapStatus[status]} {status}
      </Heading>
      <Heading level={4}>Publication</Heading>
      <pre>{JSON.stringify(repoVersionInfo, null, 2)}</pre>
      <Heading level={4}>Editor</Heading>
      <pre>{JSON.stringify(editorVersionInfo, null, 2)}</pre>
      <Heading level={4}>Job</Heading>
      <pre>{JSON.stringify(meta, null, 2)}</pre>
    </Panel>
  );
};

export default Version;
