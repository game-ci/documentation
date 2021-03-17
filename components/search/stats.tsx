import React from 'react';
import { connectStateResults } from 'react-instantsearch-dom';
import type StateResultsProvided from 'react-instantsearch-dom';

const Stats = ({ searchResults }: StateResultsProvided) => {
  if (searchResults === null || searchResults.nbHits === 0) return <div />;
  return (
    <div className="ais-Stats">
      <span role="img" aria-label="emoji">
        ⚡️
      </span>
      <strong>{` ${searchResults.nbHits} `}</strong>
      results found
      {searchResults.query !== '' && (
        <>
          for
          <strong>{` "${searchResults.query}" `}</strong>
        </>
      )}
      in
      <strong>{` ${searchResults.processingTimeMS}ms`}</strong>
    </div>
  );
};

export default connectStateResults(Stats);
