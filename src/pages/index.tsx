import React from 'react';
import Layout from '@theme/Layout';
import ThePerksSection from '@site/src/components/pages/home/section/the-perks-section';
import OpeningSection from '@site/src/components/pages/home/section/opening-section';
import SponsorsSection from '@site/src/components/pages/home/section/sponsors-section';
// import VisualRepresentationOfWhatWeDoSection from '@site/src/components/pages/home/section/visual-representation-of-what-we-do';
// import OurVisionSection from '@site/src/components/pages/home/section/our-vision-section';
import PricingSection from '@site/src/components/pages/home/section/pricing-section';
// import CodeExamplesSection from '@site/src/components/pages/home/section/code-examples-section';
import WhoIsUsingGameCiSection from '@site/src/components/pages/home/section/who-is-using-game-ci-section';
// import GallerySection from '@site/src/components/pages/home/section/gallery-section';

export default function Home(): React.JSX.Element {
  return (
    <Layout>
      <OpeningSection />
      {/* <GettingStarted /> */}
      {/* <OurVisionSection /> */}
      {/* <VisualRepresentationOfWhatWeDoSection /> */}
      <ThePerksSection />
      <SponsorsSection />
      <WhoIsUsingGameCiSection />
      {/* <CodeExamplesSection /> */}
      <PricingSection />
      {/* <GallerySection /> */}
    </Layout>
  );
}
