import { SimpleAuthCheck } from '@site/src/components/auth/safe-auth-check';
import DockerImageLink from '@site/src/components/docs/versions/docker-image-link';
import { useAuthenticatedEndpoint } from '@site/src/core/hooks/use-authenticated-endpoint';
import { useNotification } from '@site/src/core/hooks/use-notification';
import React, { useState } from 'react';
import { HiOutlineRefresh } from 'react-icons/all';

interface Props {
  record: {
    buildId: string;
    relatedJobId: string;
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
  const { buildInfo, dockerInfo, buildId, relatedJobId } = record;
  const { baseOs, editorVersion, targetPlatform, repoVersion } = buildInfo;
  const { imageRepo, imageName } = dockerInfo || {};
  const imageTag = `${baseOs}-${editorVersion}-${targetPlatform}-${repoVersion}`;

  const [retryRequested, setRetryRequested] = useState<boolean>(false);
  const notify = useNotification();
  const retryBuild = useAuthenticatedEndpoint('retryBuild', { buildId, relatedJobId });

  if (dockerInfo) {
    return <DockerImageLink imageRepo={imageRepo} imageName={imageName} imageTag={imageTag} />;
  }

  const onClick = async () => {
    try {
      setRetryRequested(true);
      const result = await retryBuild();
      notify.success(result);
    } catch (error) {
      setRetryRequested(false);
      notify.error(error);
    }
  };

  return (
    <SimpleAuthCheck fallback={<span />} requiredClaims={{ admin: true }}>
      {/*<Tooltip title={`Delete tag "${imageTag}" then click this retry button.`}>*/}
      {/*  <button*/}
      {/*    type="button"*/}
      {/*    onClick={onClick}*/}
      {/*    style={{ padding: 0, border: 0, outline: 0, cursor: 'pointer' }}*/}
      {/*  >*/}
      {/*    <HiOutlineRefresh color={retryRequested ? 'orange' : 'red'} />*/}
      {/*  </button>*/}
      {/*</Tooltip>*/}
      <button
        type="button"
        onClick={onClick}
        style={{ padding: 0, border: 0, outline: 0, cursor: 'pointer' }}
      >
        <HiOutlineRefresh color={retryRequested ? 'orange' : 'red'} />
      </button>
    </SimpleAuthCheck>
  );
};

export default DockerImageLinkOrRetryButton;
