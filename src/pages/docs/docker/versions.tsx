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


import config from "@site/src/core/config";
import {reducer} from "@site/src/logic";
import {useColorMode} from "@docusaurus/theme-common";
import Section from "@site/src/components/pages/home/section/section";
import styles from '@site/src/components/pages/home/section/section.module.scss';

const store = configureStore({reducer});

function VersionsAntdWrapper() {
  const antdCss = "https://unpkg.com/antd/dist/antd.css";
  const antdDarkTheme = "https://unpkg.com/antd/dist/antd.dark.css";

  const {isDarkTheme} = useColorMode();


  const addCssToHead = () => {
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = isDarkTheme ? antdDarkTheme : antdCss;
    document.head.appendChild(css);
  };

  const removeCssFromHead = () => {
    const css = document.querySelector('link[href="' + antdCss + '"]');
    const darkCss = document.querySelector('link[href="' + antdDarkTheme + '"]');
    if (css) {
      css.remove();
    }
    if (darkCss) {
      darkCss.remove();
    }
  };

  React.useEffect(() => {
    addCssToHead();
    return () => {
      removeCssFromHead();
    };
  }, [isDarkTheme]);
  return <Versions />;
}

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
              <Section className={styles.versionsSection}>
                <VersionsAntdWrapper />
              </Section>
            </main>
          </Layout>
        </IconContext.Provider>
      </FirebaseAppProvider>
    </Provider>
  );
}
