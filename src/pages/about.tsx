import React from 'react';
import Layout from '@theme/Layout';
import OurStory from '@site/src/components/pages/about-us/section/our-story-section/our-story';
import HeaderSection from '@site/src/components/pages/about-us/section/header-section/header-section';
import TheTeamSection from '@site/src/components/pages/about-us/section/the-team-section/the-team-section';

export default function About(): React.JSX.Element {
  return (
    <Layout wrapperClassName="text-brand-text-light dark:text-brand-text-dark bg-brand-background-light dark:bg-brand-background-dark">
      <HeaderSection />
      <OurStory />
      <TheTeamSection />
    </Layout>
  );
}
