import React from 'react';
import 'firebase/auth';
import 'firebase/firestore';
import { AppProps } from 'next/app';
import { IconContext } from 'react-icons';
import { InstantSearch } from 'react-instantsearch-dom';
import { client as searchClient, indexName as searchIndex } from '@/core/search';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { reducer } from 'logic';
import { FirebaseAppProvider } from 'reactfire';
import config from 'core/config';

import '../assets/styles/antd-custom.less';
import 'highlight.js/styles/dracula.css';

const store = configureStore({ reducer });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <FirebaseAppProvider firebaseConfig={config.firebase}>
        <InstantSearch searchClient={searchClient} indexName={searchIndex}>
          <IconContext.Provider value={{ className: 'anticon' }}>
            <Component {...pageProps} />
          </IconContext.Provider>
        </InstantSearch>
      </FirebaseAppProvider>
    </Provider>
  );
}
