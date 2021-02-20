import { Tag } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import { Highlight } from 'react-instantsearch-dom';
import config from '@/core/config';

const Result = ({ hit }) => {
  const { docsPath } = config;
  const { path, version, anchorId } = hit;
  const permalink = `${docsPath}/${path}#${anchorId}`;

  return (
    <article style={{ padding: 8 }}>
      <a href={permalink} style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ flex: 1 }}>
          <Highlight attribute="title" hit={hit} tagName="em" />
        </span>
        {version && <Tag style={{ lineHeight: '120%', fontSize: '80%' }}>{version}</Tag>}
      </a>
    </article>
  );
};

Result.propTypes = {
  hit: PropTypes.shape({
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    anchorId: PropTypes.string,
    version: PropTypes.string,
    summary: PropTypes.string,
  }).isRequired,
};

export default Result;
