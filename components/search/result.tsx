import React from 'react';
import PropTypes from 'prop-types';
import { Highlight } from 'react-instantsearch-dom';

const Result = ({ hit }) => {
  const { permalink } = hit;

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
    permalink: PropTypes.string,
  }).isRequired,
};

export default Result;
