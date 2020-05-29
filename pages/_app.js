import { MDXProvider } from '@mdx-js/react';
import { Typography, Card, Table, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import '../styles/vars.css';
import '../styles/global.css';
import '../styles/layout.css';

import Layout from '../components/layout/layout';

const components = {
  p: Typography.Paragraph,
  // table: Table,
  // h1: DesignSystem.H1,
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
