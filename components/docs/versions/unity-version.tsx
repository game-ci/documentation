import Builds from '@/components/docs/versions/builds';
import DateTime from '@/components/docs/versions/date-time';
import ShowAndCopyChangeSetHashButton from '@/components/docs/versions/show-and-copy-change-set-hash-button';
import React from 'react';
import { Collapse } from 'antd';
import styles from './unity-version.module.css';

const { Panel } = Collapse;

interface Props {
  data: { [key: string]: any };
}

const UnityVersion = ({ data, ...props }: Props) => {
  const {
    NO_ID_FIELD: id,
    status,
    // imageType,
    editorVersionInfo,
    repoVersionInfo,
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
      {...props}
      className={styles.panel}
      header={
        <>
          {`${mapStatus[status]} ${id}`}
          <ShowAndCopyChangeSetHashButton changeSet={editorVersionInfo.changeSet} />
          <span style={{ float: 'right', opacity: 0.5 }}>
            <span style={{ opacity: 0.6 }}>Last updated:</span>{' '}
            <DateTime utcSeconds={modifiedDate.seconds} />
          </span>
        </>
      }
      key={id}
    >
      <Builds ciJobId={id} repoVersionInfo={repoVersionInfo} />
    </Panel>
  );
};

export default UnityVersion;
