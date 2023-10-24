import React, { useState } from 'react';
import styles from './unity-version.module.scss';
import UnityVersion from './unity-version';

interface Props {
  versionString: string;
  versions: Array<Object>;
}
export default function MajorEditorVersion({ versionString, versions }: Props) {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className={styles.majorEditorVersion}>
      <button
        type="button"
        onClick={() => {
          setEnabled(!enabled);
        }}
      >
        <span
          className={styles.arrow}
          style={{
            transform: `rotateZ(${enabled ? '90deg' : 0})`,
            fontSize: '1.5rem',
          }}
        >
          &#9654; {/* ▶ */}
        </span>{' '}
        {versionString}
      </button>

      <div className={styles.content}>
        {enabled && versions.map((v) => <UnityVersion data={v} />)}
      </div>
    </div>
  );
}
