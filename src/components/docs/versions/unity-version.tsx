import React, { useState } from 'react';
import Builds from '@site/src/components/docs/versions/builds/builds';
import DateTime from '@site/src/components/docs/versions/date-time';
import ShowAndCopyChangeSetHashButton from '@site/src/components/docs/versions/show-and-copy-change-set-hash-button';
import Spinner from '@site/src/components/molecules/spinner';
import styles from './unity-version.module.scss';

interface Props {
  data: { [key: string]: any };
}

const UnityVersion = ({ data }: Props) => {
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

  const [enabled, setEnabled] = useState(false);

  return (
    <div>
      <button className={styles.versionButton} type="button" onClick={() => setEnabled(!enabled)}>
        <span>
          <div style={{ display: 'inline-block', width: 30, paddingRight: 8 }}>
            {ciJobStatusToIconMap[status]}
          </div>
          <span>{id}</span>
          <ShowAndCopyChangeSetHashButton changeSet={editorVersionInfo.changeSet} />
          <span style={{ float: 'right', opacity: 0.5 }}>
            <span style={{ opacity: 0.6 }}>Last updated:</span>{' '}
            <DateTime utcSeconds={modifiedDate.seconds} />
          </span>
        </span>
      </button>
      {enabled && (
        <Builds
          ciJobId={id}
          repoVersionInfo={repoVersionInfo}
          editorVersionInfo={editorVersionInfo}
        />
      )}
    </div>
  );
};

export default UnityVersion;
