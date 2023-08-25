import React, { useState } from 'react';
import Spinner from '@site/src/components/molecules/spinner';
import styles from './builds.module.scss';

const mapBuildStatusToIcon = {
  started: <Spinner type="slow" />,
  failed: '⚠',
  published: '✅',
};

type Props = {
  build: {
    [key: string]: any;
  };
  children: React.JSX.Element | React.JSX.Element[];
};
export default function BuildRow({ children, build }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <tr className={styles.tableRow}>
        <td
          onClick={() => setExpanded(!expanded)}
          className="text-center select-none cursor-pointer"
        >
          {expanded ? '➖' : '➕'}
        </td>
        <td className="text-center">{mapBuildStatusToIcon[build.status]}</td>
        <td>
          <a
            href={`https://hub.docker.com/layers/unityci/editor/${build.buildInfo.baseOs}-${build.buildInfo.editorVersion}-${build.buildInfo.targetPlatform}-${build.buildInfo.repoVersion}/images/${build.dockerInfo.digest}`}
          >
            {build.buildId}
          </a>
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
