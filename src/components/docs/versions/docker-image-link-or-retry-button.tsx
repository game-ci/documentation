import { Tooltip } from 'antd';
import React, { useState } from 'react';
import { HiOutlineRefresh } from 'react-icons/hi';
import { SimpleAuthCheck } from '@site/src/components/auth/safe-auth-check';
import DockerImageLink from '@site/src/components/docs/versions/docker-image-link';
import { useAuthenticatedEndpoint } from '@site/src/core/hooks/use-authenticated-endpoint';
import { useNotification } from '@site/src/core/hooks/use-notification';
import Spinner from '@site/src/components/molecules/spinner';

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
    status: string;
  };
}

const DockerImageLinkOrRetryButton = ({ record }: Props) => {
  const { buildInfo, dockerInfo, buildId, relatedJobId, status } = record;
  const { baseOs, editorVersion, targetPlatform, repoVersion } = buildInfo;
  const { imageRepo, imageName } = dockerInfo || {};
  const imageTag = `${baseOs}-${editorVersion}-${targetPlatform}-${repoVersion}`;

  const [retryRequested, setRetryRequested] = useState<boolean>(false);
  const notify = useNotification();
  const retryBuild = useAuthenticatedEndpoint('retryBuild', { buildId, relatedJobId });

  // Also show the retry button when the build has been sent to `failed` manually.
  if (dockerInfo && status !== 'failed') {
    return <DockerImageLink imageRepo={imageRepo} imageName={imageName} imageTag={imageTag} />;
  }

  const onClick = async () => {
    try {
      setRetryRequested(true);
      await notify.promise(retryBuild(), {
        loading: <Spinner type="spin" />,
        success: (message) => message,
        error: (error) => error.message,
      });
    } catch {
      setRetryRequested(false);
    }
  };

  return (
    <SimpleAuthCheck fallback={<span />} requiredClaims={{ admin: true }}>
      <Tooltip title={`Delete tag "${imageTag}" then click this retry button.`}>
        <button
          type="button"
          onClick={onClick}
          style={{ padding: 0, border: 0, outline: 0, cursor: 'pointer' }}
        >
          <HiOutlineRefresh color={retryRequested ? 'orange' : 'red'} />
        </button>
      </Tooltip>
    </SimpleAuthCheck>
  );
};

export default DockerImageLinkOrRetryButton;
