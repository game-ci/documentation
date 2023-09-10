import React, { useState } from 'react';
import SignInSignOutButton from '@site/src/components/auth/sign-in-sign-out-button';
import UnityVersions from './unity-versions';
import styles from './unity-version.module.scss';

// const { Option } = Select;

interface Props {
  versions: { [key: string]: any }[];
}

const ImageVersions = ({ versions }: Props) => {
  const [selectedVersion, setSelectedVersion] = useState<any>(versions[0].NO_ID_FIELD);

  return (
    <main className={styles.versionsPanel}>
      <h1>Supported Editor Versions</h1>

      <div>
        <span>Docker repo version: </span>

        <select onChange={(event) => setSelectedVersion(event.target.value)}>
          {versions.map((version) => {
            const { NO_ID_FIELD: id } = version;

            return (
              <option key={id} value={id}>
                {id}
              </option>
            );
          })}
        </select>
        <SignInSignOutButton style={{ float: 'right' }} />
      </div>

      <UnityVersions selectedRepoVersion={selectedVersion} />
    </main>
  );
};

export default ImageVersions;
