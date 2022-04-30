import DocumentationPage from '@site/src/components/pages/docs/documentation-page';
import Link from 'next/link';
import { IoLogoDiscord, IoLogoGithub } from 'react-icons/all';
import Header from '@site/src/components/pages/home/header';

export default function DocumentationIndex() {
  return (
    <DocumentationPage>
      <Header />

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
            <IoLogoGithub title="GitHub" />
          </a>
        </p>

        <iframe
          title="GameCI discord widget"
          src="https://discord.com/widget?id=710946343828455455&theme=dark"
          width="350"
          height="500"
          frameBorder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        />
        <p style={{ display: 'flex', alignItems: 'center' }}>
          <span>Join the discussion on&nbsp;</span>
          <Link href="/discord">
            <a>
              <IoLogoDiscord title="GameCI Discord" />
            </a>
          </Link>
        </p>
      </main>
    </DocumentationPage>
  );
}
