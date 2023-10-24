import React, { useRef, useState } from 'react';
import Builds from '@site/src/components/docs/versions/builds/builds';
import DateTime from '@site/src/components/docs/versions/date-time';
import ShowAndCopyChangeSetHashButton from '@site/src/components/docs/versions/show-and-copy-change-set-hash-button';
import Spinner from '@site/src/components/molecules/spinner';
import styles from './unity-version.module.scss';

interface Props {
  data: { [key: string]: any };
}

const UnityVersion = ({ data }: Props) => {
  const spanRef: React.MutableRefObject<HTMLSpanElement> = useRef();

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
    completed: '✅',
    failed: '😢',
    superseded: '⏩',
    deprecated: '⭕',
  };

  const [enabled, setEnabled] = useState(false);

  const ToggleEnable = () => {
    if (enabled) {
      // Transitions don't work on auto, set height from auto to clientHeight (current height)
      spanRef.current.style.height = `${spanRef.current.clientHeight}px`;
    }

    // Wait for redraw
    setTimeout(() => {
      spanRef.current.style.height = `${enabled ? '0' : spanRef.current.scrollHeight}px`;
    }, 0);

    if (!enabled)
      setTimeout(() => {
        // allow expansion of elements
        spanRef.current.style.height = 'auto';
      }, 300);

    setEnabled(!enabled);
  };

  return (
    <div>
      <button className={styles.versionButton} type="button" onClick={ToggleEnable}>
        <span>
          <div style={{ display: 'inline-block', width: 30, paddingRight: 8 }}>
            {ciJobStatusToIconMap[status]}
          </div>
          <span>{id}</span>
          <ShowAndCopyChangeSetHashButton changeSet={editorVersionInfo.changeSet} />
          <span>
            <span style={{ color: 'rgba(255, 255, 255, 0.4)' }}> - Last updated: </span>
            <DateTime utcSeconds={modifiedDate.seconds} />
          </span>
        </span>
      </button>
      <span
        ref={spanRef}
        className={`block transition-all duration-300 h-0 overflow-hidden ${styles.expandedContentRow}`}
      >
        <Builds
          ciJobId={id}
          repoVersionInfo={repoVersionInfo}
          editorVersionInfo={editorVersionInfo}
        />
      </span>
    </div>
  );
};

export default UnityVersion;
