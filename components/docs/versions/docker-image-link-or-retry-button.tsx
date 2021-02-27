import { SimpleAuthCheck } from '@/components/auth/safe-auth-check';
import DockerImageLink from '@/components/docs/versions/docker-image-link';
import { Tooltip } from 'antd';
import React from 'react';
import { HiOutlineRefresh } from 'react-icons/all';

interface Props {
  record: {
    buildInfo: {
      baseOs: string;
      editorVersion: string;
      targetPlatform: string;
      repoVersion: string;
    };
    dockerInfo: {
      imageRepo: string;
      imageName: string;
    };
  };
}

const DockerImageLinkOrRetryButton = ({ record }: Props) => {
  const { buildInfo, dockerInfo } = record;
  const { baseOs, editorVersion, targetPlatform, repoVersion } = buildInfo;
  const { imageRepo, imageName } = dockerInfo || {};
  const imageTag = `${baseOs}-${editorVersion}-${targetPlatform}-${repoVersion}`;

  if (dockerInfo) {
    return <DockerImageLink imageRepo={imageRepo} imageName={imageName} imageTag={imageTag} />;
  }

  return (
    <SimpleAuthCheck fallback={<span />} requiredClaims={{ admin: true }}>
      <Tooltip title={`Delete tag "${imageTag}" then click this retry button.`}>
        <HiOutlineRefresh color="orange" />
      </Tooltip>
    </SimpleAuthCheck>
  );
};

export default DockerImageLinkOrRetryButton;
