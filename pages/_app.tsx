/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app';
import { IconContext } from 'react-icons';
import { InstantSearch } from 'react-instantsearch-dom';
import { client } from '@/core/search';

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
    <InstantSearch searchClient={client} indexName="demo_media">
      <IconContext.Provider value={{ className: 'anticon' }}>
        <Component {...pageProps} />
      </IconContext.Provider>
    </InstantSearch>
  );
}
