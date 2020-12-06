import Head from 'next/head';
import Link from 'next/link';
import DocumentationLayout from '@/components/layout/documentation-layout';
import Discord from '../../images/discord-brand-logo-wordmark.svg';
import Github from '../../images/github-brand-text.svg';

export default function Page() {
  return (
    <DocumentationLayout>
      <Head>
        <title>GameCI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="ant-typography">
        <h1>Welcome to GameCI</h1>

        <p>
          This site hosts all documentation for GameCI, and will help you setup Continuous
          Integration for your game projects.
        </p>

        <p>
          Continuous Integration is a widely-used practice where automated pipelines check the
          latest code changes actually work, before merging them into the main branch. This helps
          developers stay in the flow and release faster and (ultimately) with more confidence.
        </p>

        <p style={{ display: 'flex', alignItems: 'center' }}>
          <span>Follow the development on&nbsp;</span>
          <a href="https://github.com/game-ci/documentation">
            <Github alt="GitHub" style={{ height: 16 }} />
          </a>
        </p>

        <p style={{ display: 'flex', alignItems: 'center' }}>
          <span>Join the discussion on </span>
          <Link href="/discord">
            <a>
              <Discord alt="GameCI Discord" width="100" />
            </a>
          </Link>
        </p>

        <p>
          <i><strong>Disclaimer</strong>: This website is not sponsored by or affiliated with Unity Technologies.</i>
        </p>
      </main>
    </DocumentationLayout>
  );
}
