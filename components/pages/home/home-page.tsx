import BaseLayout from '@/components/layout/base-layout';
import CodeExamplesSection from '@/components/pages/home/section/code-examples-section';
import OpeningSection from '@/components/pages/home/section/opening-section';
import OurVisionSection from '@/components/pages/home/section/our-vision-section';
import PricingSection from '@/components/pages/home/section/pricing-section';
import VisualRepresentationOfWhatWeDoSection from '@/components/pages/home/section/visual-representation-of-what-we-do-section';
import WhyChooseForUsSection from '@/components/pages/home/section/why-choose-for-us-section';
import React from 'react';

const HomePage = () => (
  <BaseLayout showSearch={false} stickyHeader>
    <OpeningSection />
    <OurVisionSection />
    <VisualRepresentationOfWhatWeDoSection />
    <WhyChooseForUsSection />
    <CodeExamplesSection />
    <PricingSection />
  </BaseLayout>
);

export default HomePage;
