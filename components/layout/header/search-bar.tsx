import { DocSearch } from '@docsearch/react';
import '@docsearch/css';
import config from '@/core/config';

const SearchBar = () => {
  return (
    <div
      style={{
        flex: 1,
        padding: '14px 0',
        position: 'relative',
      }}
    >
      <DocSearch
        apiKey={config.search.publicApiKey}
        indexName={config.search.index}
        appId={config.search.applicationId}
      />
    </div>
  );
};

export default SearchBar;
