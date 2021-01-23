import React from 'react';
import PropTypes from 'prop-types';
import { Highlight, Snippet } from 'react-instantsearch-dom';

const ResultPage = ({ hit, ...props }) => {
  return (
    <div {...props} key="source:documentation2" style={{ display: 'block' }}>
      <a href={hit.permalink} rel="bookmark">
        <Highlight attribute="post_title" hit={hit} tagName="em" />
      </a>
      <div className="post-date">{hit.post_date_formatted}</div>
      <Snippet attribute="content" hit={hit} />
    </div>
  );
};

ResultPage.propTypes = {
  hit: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string.isRequired,
    permalink: PropTypes.string,
    post_date_formatted: PropTypes.string,
  }).isRequired,
};

export default ResultPage;
