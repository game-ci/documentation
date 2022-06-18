import React from 'react';
import Layout from '@theme/Layout';
import OurStory from '@site/src/components/pages/about-us/section/our-story-section/our-story';
import HeaderSection from '@site/src/components/pages/about-us/section/header-section/header-section';
import TheTeamSection from '@site/src/components/pages/about-us/section/the-team-section/the-team-section';

export default function About(): JSX.Element {
  return (
    <Layout wrapperClassName="layout">
      <HeaderSection />
      <OurStory />
      <TheTeamSection />
    </Layout>
  );
}
