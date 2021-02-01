import React from 'react';
import PropTypes from 'prop-types';
import { Highlight } from 'react-instantsearch-dom';
import config from '@/core/config';

const Result = ({ hit }) => {
  const { docsPath } = config;
  const { basePath, anchorId } = hit;
  const permalink = `${docsPath}/${basePath}#${anchorId}`;

  return (
    <article style={{ padding: 8 }}>
      <a href={permalink} style={{ display: 'block', width: '100%' }}>
        <Highlight attribute="title" hit={hit} tagName="em" />
      </a>
      <Highlight attribute="summary" hit={hit} tagName="em" />
    </article>
  );
};

Result.propTypes = {
  hit: PropTypes.shape({
    title: PropTypes.string.isRequired,
    basePath: PropTypes.string,
    anchorId: PropTypes.string,
  }).isRequired,
};

export default Result;
