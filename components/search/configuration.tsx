import React from 'react';
import { Configure } from 'react-instantsearch-dom';

const Configuration = () => (
  <Configure hitsPerPage={9} attributesToSnippet={['content:14']} snippetEllipsisText=" [...]" />
);

export default Configuration;
