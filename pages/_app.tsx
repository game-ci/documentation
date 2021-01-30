import { AppProps } from 'next/app';
import { IconContext } from 'react-icons';
import { InstantSearch } from 'react-instantsearch-dom';
import { client as searchClient, indexName as searchIndex } from '@/core/search';

import 'antd/dist/antd.css';
// import 'antd/dist/antd.dark.css';
import '../styles/vars.css';
import '../styles/global.css';
import '../styles/layout.css';
import '../styles/markdown.css';
import '../styles/search.css';
import 'highlight.js/styles/dracula.css';
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <InstantSearch searchClient={searchClient} indexName={searchIndex}>
      <IconContext.Provider value={{ className: 'anticon' }}>
        <Component {...pageProps} />
      </IconContext.Provider>
    </InstantSearch>
  );
}
