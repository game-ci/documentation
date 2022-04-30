import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Versions from "@site/src/components/docs/versions/versions";

import 'firebase/auth';
import 'firebase/firestore';
import { IconContext } from 'react-icons';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { FirebaseAppProvider } from 'reactfire';

// import "antd/dist/antd.css";
// import '../assets/styles/antd-custom.less';
// import 'highlight.js/styles/dracula.css';
import config from "@site/src/core/config";
import {reducer} from "@site/src/logic";

const store = configureStore({reducer});

export default function VersionsPage(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Provider store={store}>
      <FirebaseAppProvider firebaseConfig={config.firebase}>
        <IconContext.Provider value={{ className: 'anticon' }}>
          <Layout
            title={`${siteConfig.title} - Docker images versions`}
            description="Docker images versions">
            <main>
              <Versions />
            </main>
          </Layout>
        </IconContext.Provider>
      </FirebaseAppProvider>
    </Provider>
  );
}
