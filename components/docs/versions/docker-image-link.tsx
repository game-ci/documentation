import React from 'react';
import { SiDocker } from 'react-icons/all';

interface Props {
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
}

const DockerImageLink = ({ buildInfo, dockerInfo }: Props) => {
  const { baseOs, editorVersion, targetPlatform, repoVersion } = buildInfo;
  const { imageRepo, imageName } = dockerInfo || {};

  const filterTag = `${baseOs}-${editorVersion}-${targetPlatform}-${repoVersion}`;
  return (
    <a
      aria-label="Image url"
      target="_blank"
      rel="noreferrer"
      href={
        `https://hub.docker.com/repository/docker/${imageRepo}/${imageName}/tags` +
        `?page=1&ordering=last_updated&name=${filterTag}`
      }
    >
      <SiDocker />
    </a>
  );
};

export default DockerImageLink;
