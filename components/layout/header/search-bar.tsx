import React, { useState } from 'react';
import { SiAlgolia } from 'react-icons/all';
import { SearchBox, Pagination } from 'react-instantsearch-dom';
import Configuration from '@/components/search/configuration';
import SearchResults from '@/components/search/results';
import Stats from '@/components/search/stats';

import styles from './search-bar.module.scss';

const SearchBar = () => {
  const [searchFocused, setFocus] = useState(false);
  const [searchHovered, setSearchHovered] = useState(false);
  const [resultsHovered, setResultsHovered] = useState(false);

  const active = searchFocused || searchHovered || resultsHovered;

  return (
    <div
      onMouseEnter={() => setSearchHovered(true)}
      onMouseLeave={() => setSearchHovered(false)}
      className={styles.searchBar}
      style={{
        flex: 1,
        padding: '0 10%',
        position: 'relative',
        backgroundColor: active ? '#373445' : 'transparent',
      }}
    >
      <Configuration />
      <SearchBox
        className={styles.searchBox}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
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
          <span>
            Powered by
            <a href="http://algolia.com/">
              <SiAlgolia size={24} style={{ marginLeft: 8 }} />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
