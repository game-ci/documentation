import Builds from '@/components/docs/versions/builds';
import DateTime from '@/components/docs/versions/date-time';
import Heading from '@/components/markdown/components/heading';
import React from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

interface Props {
  data: { [key: string]: any };
}

const UnityVersion = ({ data, ...rest }: Props) => {
  const {
    NO_ID_FIELD: id,
    status,
    // imageType,
    // editorVersionInfo,
    // repoVersionInfo,
    // meta,
    // addedDate,
    modifiedDate,
  } = data;

  if (status === 'deprecated') return null;

  const mapStatus = {
    completed: '✔',
    failed: '😢',
    created: `${Math.random() < 0.5 ? '👷‍♀️' : '👷‍♂️'}`,
  };

  return (
    <Panel
      {...rest}
      header={
        <>
          {`${mapStatus[status]} ${id}`}
          <span style={{ float: 'right', opacity: 0.5 }}>
            <span style={{ opacity: 0.6 }}>Last updated:</span>{' '}
            <DateTime utcSeconds={modifiedDate.seconds} />
          </span>
        </>
      }
      key={id}
    >
      <Heading level={4}>Status: {status}</Heading>
      <Builds ciJob={id} />
      {/* <Heading level={4}>Publication</Heading> */}
      {/* <pre>{JSON.stringify(repoVersionInfo, null, 2)}</pre> */}
      {/* <Heading level={4}>Editor</Heading> */}
      {/* <pre>{JSON.stringify(editorVersionInfo, null, 2)}</pre> */}
      {/* <Heading level={4}>Job</Heading> */}
      {/* <pre>{JSON.stringify(meta, null, 2)}</pre> */}
    </Panel>
  );
};

export default UnityVersion;
