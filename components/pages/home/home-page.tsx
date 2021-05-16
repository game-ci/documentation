/* eslint-disable @typescript-eslint/no-unused-vars */

import BaseLayout from '@/components/layout/base-layout';
import CodeExamplesSection from '@/components/pages/home/section/code-examples-section';
import GallerySection from '@/components/pages/home/section/gallery-section';
import OpeningSection from '@/components/pages/home/section/opening-section';
import OurVisionSection from '@/components/pages/home/section/our-vision-section';
import PricingSection from '@/components/pages/home/section/pricing-section';
import VisualRepresentationOfWhatWeDoSection from '@/components/pages/home/section/visual-representation-of-what-we-do-section';
import WhoChoseForUsSection from '@/components/pages/home/section/who-chose-for-us-section';
import ThePerksSection from '@/components/pages/home/section/the-perks-section';
import React from 'react';

const HomePage = () => (
  <BaseLayout showSearch={false} stickyHeader>
    <OpeningSection />
    {/* <OurVisionSection /> */}
    {/* <VisualRepresentationOfWhatWeDoSection /> */}
    <ThePerksSection />
    {/* <WhoChoseForUsSection /> */}
    {/* <CodeExamplesSection /> */}
    {/* <PricingSection /> */}
    {/* <GallerySection /> */}
  </BaseLayout>
);

export default HomePage;
