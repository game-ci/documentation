import React from 'react';
import { Hits } from 'react-instantsearch-dom';
import type { StateResultsProvided } from 'react-instantsearch-dom';
import { connectStateResults } from 'react-instantsearch/connectors';
import ResultPage from './results/result-page';

const SearchResults = ({ searchState, searchResults }: StateResultsProvided) =>
  searchResults && searchResults.nbHits !== 0 ? (
    <Hits hitComponent={ResultPage} />
  ) : (
    <div>
      No results found for <strong>{searchState.query}</strong>.
    </div>
  );

export default connectStateResults(SearchResults);
