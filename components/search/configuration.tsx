import React from 'react';
import { Configure } from 'react-instantsearch-dom';
import config from '@/core/config';

const Configuration = () => (
  <Configure
    hitsPerPage={config.search.hitsPerPage}
    attributesToSnippet={['content:14']}
    snippetEllipsisText=" [...]"
  />
);

export default Configuration;
