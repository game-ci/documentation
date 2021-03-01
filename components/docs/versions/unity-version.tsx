import Builds from '@/components/docs/versions/builds';
import DateTime from '@/components/docs/versions/date-time';
import ShowAndCopyChangeSetHashButton from '@/components/docs/versions/show-and-copy-change-set-hash-button';
import Spinner from '@/components/reusable/spinner';
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

  const ciJobStatusToIconMap = {
    created: `${Math.random() < 0.5 ? '👷‍♀️' : '👷‍♂️'}`,
    scheduled: <Spinner type="dots" />,
    inProgress: <Spinner type="pulse" />,
    completed: '✔',
    failed: '😢',
    superseded: '⏩',
    deprecated: '⭕',
  };

  return (
    <Panel
      {...props}
      className={styles.panel}
      header={
        <>
          <div style={{ display: 'inline-block', width: 30, paddingRight: 8, textAlign: 'center' }}>
            {ciJobStatusToIconMap[status]}
          </div>
          <span>{id}</span>
          <ShowAndCopyChangeSetHashButton changeSet={editorVersionInfo.changeSet} />
          <span style={{ float: 'right', opacity: 0.5 }}>
            <span style={{ opacity: 0.6 }}>Last updated:</span>{' '}
            <DateTime utcSeconds={modifiedDate.seconds} />
          </span>
        </>
      }
      key={id}
    >
      <Builds
        ciJobId={id}
        repoVersionInfo={repoVersionInfo}
        editorVersionInfo={editorVersionInfo}
      />
    </Panel>
  );
};

export default UnityVersion;
