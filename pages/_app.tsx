import React from 'react';
import 'firebase/auth';
import 'firebase/firestore';
import { AppProps } from 'next/app';
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
        <Component {...pageProps} />
      </FirebaseAppProvider>
    </Provider>
  );
}
