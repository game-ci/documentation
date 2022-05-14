import SignInSignOutButton from "@site/src/components/auth/sign-in-sign-out-button";
import { Select } from 'antd';
import React, { useState } from 'react';
import UnityVersions from './unity-versions';

const { Option } = Select;

interface Props {
  versions: { [key: string]: any }[];
}

const ImageVersions = ({ versions }: Props) => {
  const [selectedVersion, setSelectedVersion] = useState<any>(versions[0].NO_ID_FIELD);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <main>
      <h1>Versions</h1>

      <div>
        <span>Docker repo version: </span>
        <Select defaultValue={selectedVersion} onChange={setSelectedVersion} loading={isLoading}>
          {versions.map((version) => {
            const { NO_ID_FIELD: id } = version;

            return (
              <Option key={id} value={id}>
                {id}
              </Option>
            );
          })}
        </Select>
        <SignInSignOutButton style={{ float: 'right' }} />
      </div>

      <UnityVersions selectedRepoVersion={selectedVersion} setIsLoading={setIsLoading} />
    </main>
  );
};

export default ImageVersions;
