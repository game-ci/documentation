import React, { useState } from 'react';
import CodeBlock from '@theme/CodeBlock';
import Spinner from '@site/src/components/molecules/spinner';
import styles from './builds.module.scss';

const mapBuildStatusToIcon = {
  started: <Spinner type="slow" />,
  failed: '⚠',
  published: '✅',
};

interface Props {
  build: {
    [key: string]: any;
  };
}
export default function BuildRow({ build }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <tr className={styles.tableRow}>
        <td onClick={() => setExpanded(!expanded)} className="text-center">
          {expanded ? '-' : '+'}
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
        <tr>
          <td colSpan={6}>
            <CodeBlock language="json">
              {
                '{ "t": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur harum, labore cupiditate tempore non fuga quasi laudantium eum eius minus expedita animi esse quis. Eius atque dolores laborum mollitia eaque."}'
              }
            </CodeBlock>
          </td>
        </tr>
      )}
    </>
  );
}
