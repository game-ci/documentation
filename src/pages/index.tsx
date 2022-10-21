import React from 'react';
import Layout from '@theme/Layout';
import ThePerksSection from '@site/src/components/pages/home/section/the-perks-section';
import OpeningSection from '@site/src/components/pages/home/section/opening-section';
import GettingStarted from '@site/src/components/pages/home/section/getting-started';
import SponsorsSection from '@site/src/components/pages/home/section/sponsors-section';

export default function Home(): JSX.Element {
  return (
    <Layout>
      <OpeningSection />
      {/* <OurVisionSection /> */}
      {/* <VisualRepresentationOfWhatWeDoSection /> */}
      <ThePerksSection />
      <GettingStarted />
      <SponsorsSection />
      {/* <WhoIsUsingGameCiSection /> */}
      {/* <CodeExamplesSection /> */}
      {/* <PricingSection /> */}
      {/* <GallerySection /> */}
    </Layout>
  );
}
