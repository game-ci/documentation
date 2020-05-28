import Head from 'next/head';

export default function DocsHome() {
  return (
    <div className="container">
      <Head>
        <title>Unity CI - Documentation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Unity CI</h1>

        <p>This site will host documentation for open source Unity CI projects.</p>

        <p>Follow the development on{' '}
          <a href="https://github.com/webbertakken/unity-ci">GitHub</a>
        </p>
      </main>
    </div>
  );
}
