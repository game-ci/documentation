import CodeBlock from '@theme/CodeBlock';
import React from 'react';
import FadeIntoView from '@site/src/components/molecules/animations/fade-into-view';
import Section from '@site/src/components/pages/home/section/section';

const workflowYaml = `name: Build project

on: [push, pull_request]

jobs:
  buildForAllSupportedPlatforms:
    name: Build for \${{ matrix.targetPlatform }}
    runs-on: ubuntu-latest
    strategy:
      fail-fast: false
      matrix:
        targetPlatform:
          - StandaloneOSX
          - StandaloneWindows64
          - StandaloneLinux64
          - iOS
          - Android
          - WebGL
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
          lfs: true
      - uses: game-ci/unity-builder@v4
        env:
          UNITY_LICENSE: \${{ secrets.UNITY_LICENSE }}
        with:
          targetPlatform: \${{ matrix.targetPlatform }}`;

const CodeSnippetSection = () => (
  <Section title="Get started in minutes">
    <FadeIntoView>
      <div className="max-w-2xl w-full">
        <CodeBlock language="yaml" title=".github/workflows/build.yml">
          {workflowYaml}
        </CodeBlock>
        <p className="text-center text-sm text-brand-text-light/60 dark:text-brand-text-dark/60 mt-4 mb-0">
          That&apos;s it. Push and your build runs automatically.
        </p>
      </div>
    </FadeIntoView>
  </Section>
);

export default CodeSnippetSection;
