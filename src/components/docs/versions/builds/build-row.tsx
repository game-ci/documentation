import React, { useState } from 'react';
import DockerImageLinkOrRetryButton, {
  type Record,
} from '@site/src/components/docs/versions/docker-image-link-or-retry-button';
import Spinner from '@site/src/components/molecules/spinner';
import Tooltip from '@site/src/components/molecules/tooltip/tooltip';
import styles from './builds.module.scss';

const mapBuildStatusToIcon = {
  started: <Spinner type="slow" />,
  failed: '⚠',
  published: '✅',
};

type Props = {
  children: React.JSX.Element | React.JSX.Element[];
  build: Record;
};

const CopyToClipboard = (copyString: string) => {
  navigator.clipboard.writeText(copyString);
};

export default function BuildRow({ children, build }: Props) {
  const [expanded, setExpanded] = useState(false);
  const [toolbarContent, setToolbarContent] = useState('Click to copy');

  const MapBuildStatusToElement = (status: string) => {
    const icon = mapBuildStatusToIcon[status];

    switch (status) {
      case 'started':
        return <Spinner type="slow" />;
      case 'failed':
        return <Tooltip content={build.failure?.reason}>{icon}</Tooltip>;
      case 'published':
        return icon;
      default:
        return status;
    }
  };

  return (
    <>
      <tr className={styles.tableRow}>
        <td
          onClick={() => setExpanded(!expanded)}
          className="text-center select-none cursor-pointer text-2xl"
        >
          {expanded ? '-' : '+'}
        </td>
        <td className="text-center">{MapBuildStatusToElement(build.status)}</td>
        <td>
          <span>
            <Tooltip content={toolbarContent}>
              <button
                onClick={() => {
                  CopyToClipboard(build.buildId);
                  setToolbarContent('Copied to clipboard!');
                }}
                onMouseLeave={() => {
                  setToolbarContent('Click to copy');
                }}
                type="button"
              >
                {build.buildId}
              </button>
            </Tooltip>
            <DockerImageLinkOrRetryButton record={build} />
          </span>
        </td>
        <td>{build.imageType}</td>
        <td>{build.buildInfo.baseOs}</td>
        <td>{build.buildInfo.targetPlatform}</td>
      </tr>
      {expanded && (
        <tr className={styles.expandedContentRow}>
          <td colSpan={6}>{children}</td>
        </tr>
      )}
    </>
  );
}
