import BaseLayout from '@/components/layout/base-layout';
import OpeningSection from '@/components/pages/home/section/opening-section';
import WhyGameCiSection from '@/components/pages/home/section/why-game-ci-section';
import React from 'react';

const HomePage = () => (
  <BaseLayout showSearch={false} stickyHeader>
    <OpeningSection />
    <WhyGameCiSection />
  </BaseLayout>
);

export default HomePage;
