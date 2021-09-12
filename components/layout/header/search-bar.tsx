import React from 'react';

import { DocSearch } from '@docsearch/react';
import '@docsearch/css';

const SearchBar = () => {
  return (
    <div
      style={{
        flex: 1,
        padding: '14px 0',
        position: 'relative',
      }}
    >
      <DocSearch apiKey="d085b783b0341babb98dc7fdc6a2a8be" indexName="game" />
    </div>
  );
};

export default SearchBar;
