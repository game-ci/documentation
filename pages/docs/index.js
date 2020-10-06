import Head from 'next/head';
import Link from 'next/link';
import DocumentationLayout from '@/components/layout/documentation-layout';
import Discord from '../../images/discord-brand-logo-wordmark.svg';
import Github from '../../images/github-brand-text.svg';

export default function Page() {
  return (
    <DocumentationLayout>
      <Head>
        <title>Unity CI - Documentation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="ant-typography">
        <h1>Welcome to Unity CI</h1>

        <p>This site will host documentation for open source Unity CI projects.</p>

        <p style={{ display: 'flex', alignItems: 'center' }}>
          <span>Follow the development on&nbsp;</span>
          <a href="https://github.com/webbertakken/unity-ci">
            <Github alt="GitHub" style={{ height: 16 }} />
          </a>
        </p>

        <p style={{ display: 'flex', alignItems: 'center' }}>
          <span>Join the discussion on </span>
          <Link href="/discord">
            <a>
              <Discord alt="Unity-CI Discord" width="100" />
            </a>
          </Link>
        </p>
      </main>
    </DocumentationLayout>
  );
}
