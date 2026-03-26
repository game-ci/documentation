import React, { useState } from 'react';
import { HiOutlineRefresh } from 'react-icons/hi';
import { MdRestartAlt } from 'react-icons/md';
import { SimpleAuthCheck } from '@site/src/components/auth/safe-auth-check';
import DockerImageLink from '@site/src/components/docs/versions/docker-image-link';
import { useAuthenticatedEndpoint } from '@site/src/core/hooks/use-authenticated-endpoint';
import { useNotification } from '@site/src/core/hooks/use-notification';
import Spinner from '@site/src/components/molecules/spinner';
import Tooltip from '@site/src/components/molecules/tooltip/tooltip';

type Record = {
  buildId: string;
  relatedJobId: string;
  buildInfo: {
    baseOs: string;
    editorVersion: string;
    targetPlatform: string;
    repoVersion: string;
  };
  dockerInfo: {
    digest: string;
    imageRepo: string;
    imageName: string;
  };
  meta?: {
    failureCount?: number;
  };
  status: string;
  [key: string]: any;
};

interface Props {
  record: Record;
}

export { Record };

const DockerImageLinkOrRetryButton = ({ record }: Props) => {
  const { buildInfo, dockerInfo, buildId, relatedJobId, status } = record;
  const { baseOs, editorVersion, targetPlatform, repoVersion } = buildInfo;
  const { imageRepo, imageName } = dockerInfo || {};
  const imageTag = `${baseOs}-${editorVersion}-${targetPlatform}-${repoVersion}`;

  const [retryRequested, setRetryRequested] = useState<boolean>(false);
  const [resetRequested, setResetRequested] = useState<boolean>(false);
  const notify = useNotification();
  const retryBuild = useAuthenticatedEndpoint('retryBuild', { buildId, relatedJobId });
  const resetBuild = useAuthenticatedEndpoint('resetFailedBuilds', { buildId });

  // Also show the retry button when the build has been sent to `failed` manually.
  if (dockerInfo && status !== 'failed') {
    return <DockerImageLink imageRepo={imageRepo} imageName={imageName} imageTag={imageTag} />;
  }

  const onRetryClick = async () => {
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

  const onResetClick = async () => {
    try {
      setResetRequested(true);
      await notify.promise(resetBuild(), {
        loading: <Spinner type="spin" />,
        success: (message) => message,
        error: (error) => error.message,
      });
    } catch {
      setResetRequested(false);
    }
  };

  const failureCount = record.meta?.failureCount || 0;
  const isMaxedOut = failureCount >= 15;
  const buttonStyle = { padding: 0, border: 0, outline: 0, cursor: 'pointer' };

  return (
    <SimpleAuthCheck fallback={<span />} requiredClaims={{ admin: true }}>
      <Tooltip content={`Delete tag "${imageTag}" then click this retry button.`}>
        <button type="button" onClick={onRetryClick} style={buttonStyle}>
          <HiOutlineRefresh color={retryRequested ? 'orange' : 'red'} />
        </button>
      </Tooltip>
      {isMaxedOut && (
        <Tooltip
          content={`Reset failure count (${failureCount}) so Ingeminator retries this build.`}
        >
          <button type="button" onClick={onResetClick} style={buttonStyle}>
            <MdRestartAlt color={resetRequested ? 'orange' : '#b45309'} />
          </button>
        </Tooltip>
      )}
    </SimpleAuthCheck>
  );
};

export default DockerImageLinkOrRetryButton;
