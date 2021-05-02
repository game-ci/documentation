import Head from 'next/head';
import Link from 'next/link';
import DocumentationPage from '@/components/layout/docs/page';
import { IoLogoDiscord, IoLogoGithub } from 'react-icons/all';

export default function Page() {
  return (
    <DocumentationPage>
      <Head>
        <title>GameCI</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/icons/site.webmanifest" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/icons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#373445" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
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
            <IoLogoGithub alt="GitHub" />
          </a>
        </p>

        <iframe
          title="GameCI discord widget"
          src="https://discord.com/widget?id=710946343828455455&theme=dark"
          width="350"
          height="500"
          allowTransparency="true"
          frameBorder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        />
        <p style={{ display: 'flex', alignItems: 'center' }}>
          <span>Join the discussion on&nbsp;</span>
          <Link href="/discord">
            <a>
              <IoLogoDiscord alt="GameCI Discord" />
            </a>
          </Link>
        </p>
      </main>
    </DocumentationPage>
  );
}
