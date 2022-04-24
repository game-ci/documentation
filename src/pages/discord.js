import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Discord`}
      description="GameCI Discord server">
      <main>
        <header className={clsx('hero', styles.heroBanner)}>
          <div className="container">
            <h1 className="hero__title">GameCI Discord Server</h1>
            <iframe
              title="GameCI discord widget"
              src="https://discord.com/widget?id=710946343828455455&theme=dark"
              width="350"
              height="500"
              frameBorder="0"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            />
          </div>
        </header>
      </main>
    </Layout>
  );
}
