import { MDXProvider } from '@mdx-js/react';
import { Card, Table, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import '../styles/vars.css';
import '../styles/global.css';

import Layout from '../components/layout';

const components = {
  p: Card,
  // table: Table,
  // etc.
};

export default function App({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MDXProvider>
  );
}
// src/App.js
import React from 'react';
