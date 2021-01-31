import React, { useState } from 'react';
import { SearchBox, Pagination, PoweredBy } from 'react-instantsearch-dom';
import Configuration from '@/components/search/configuration';
import SearchResults from '@/components/search/results';
import Stats from '@/components/search/stats';

const SearchBar = () => {
  const [searchFocused, setFocus] = useState(false);
  const [searchHovered, setSearchHovered] = useState(false);
  const [resultsHovered, setResultsHovered] = useState(false);

  const active = searchFocused || searchHovered || resultsHovered;

  return (
    <div
      onMouseEnter={() => setSearchHovered(true)}
      onMouseLeave={() => setSearchHovered(false)}
      style={{
        flex: 1,
        padding: '0 10%',
        position: 'relative',
        backgroundColor: active ? 'rgb(1 44 84)' : 'transparent',
      }}
    >
      <Configuration />
      <SearchBox onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} />
      <div
        className="ais-results-panel"
        onMouseEnter={() => setResultsHovered(true)}
        onMouseLeave={() => setResultsHovered(false)}
        style={{ display: active ? 'block' : 'none' }}
      >
        <Pagination />
        <div style={{ paddingTop: 8 }} />
        <SearchResults />
        <div className="ais-meta-information">
          <Stats />
          <PoweredBy />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
