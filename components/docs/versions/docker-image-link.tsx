import React from 'react';
import { SiDocker } from 'react-icons/all';

interface Props {
  imageRepo: string;
  imageName: string;
  imageTag: string;
}

const DockerImageLink = ({ imageRepo, imageName, imageTag }: Props) => {
  return (
    <a
      aria-label="Image url"
      target="_blank"
      rel="noreferrer"
      href={
        `https://hub.docker.com/repository/docker/${imageRepo}/${imageName}/tags` +
        `?page=1&ordering=last_updated&name=${imageTag}`
      }
    >
      <SiDocker />
    </a>
  );
};

export default DockerImageLink;
