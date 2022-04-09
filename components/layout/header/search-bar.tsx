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
      <DocSearch apiKey="1df02f65283b9c1c95637a3a0d8a024a" indexName="game" appId="E57FOT37U9" />
    </div>
  );
};

export default SearchBar;
