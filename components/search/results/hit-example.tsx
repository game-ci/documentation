import React from 'react';
import PropTypes from 'prop-types';
import { Highlight, Snippet } from 'react-instantsearch-dom';

function ResultPage({ hit }) {
  return (
    <div>
      <article>
        <div className="post-img">
          <a href={hit.permalink}>
            <img alt={hit.name} src={hit.image} />
          </a>
        </div>
        <div className="post-content">
          <div className="post-date">{hit.post_date_formatted}</div>
          <h2 className="entry-title">
            <a href={hit.permalink} rel="bookmark">
              <Highlight attribute="post_title" hit={hit} tagName="em" />
            </a>
          </h2>
          <div className="post-excerpt">
            <Snippet attribute="content" hit={hit} />
          </div>
          <div className="entry-meta clear">
            <div className="author-gravatar">
              <img alt={hit.name} src={hit.author_image_url} width="40" height="40" />
            </div>
            <div className="entry-author-content">
              <div className="author-name">
                <Highlight attribute="author_name" hit={hit} tagName="em" />
              </div>
              <div className="post-meta-info">
                {hit.time_to_read} min read in{' '}
                <Highlight attribute="categories" hit={hit} tagName="em" />
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

ResultPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  hit: PropTypes.object.isRequired,
};

export default ResultPage;
