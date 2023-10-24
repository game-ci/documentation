import React from 'react';
import { SiDocker } from 'react-icons/si';
import Tooltip from '../../molecules/tooltip/tooltip';

interface Props {
  imageRepo: string;
  imageName: string;
  imageTag: string;
}

const DockerImageLink = ({ imageRepo, imageName, imageTag }: Props) => {
  return (
    <Tooltip content="Dockerhub Image">
      <a
        aria-label="Image url"
        target="_blank"
        rel="noreferrer"
        href={
          `https://hub.docker.com/repository/docker/${imageRepo}/${imageName}/tags` +
          `?page=1&ordering=last_updated&name=${imageTag}`
        }
        className="align-middle ml-2 text-blue-600"
      >
        <SiDocker />
      </a>
    </Tooltip>
  );
};

export default DockerImageLink;
