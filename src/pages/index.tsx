import React from 'react';
import Layout from '@theme/Layout';
import HeroSection from '@site/src/components/pages/home/section/hero-section';
import TrustedBySection from '@site/src/components/pages/home/section/trusted-by-section';
import FeaturesGridSection from '@site/src/components/pages/home/section/features-grid-section';
import HowItWorksSection from '@site/src/components/pages/home/section/how-it-works-section';
import CodeSnippetSection from '@site/src/components/pages/home/section/code-snippet-section';
import PlatformSupportSection from '@site/src/components/pages/home/section/platform-support-section';
import TestimonialsSection from '@site/src/components/pages/home/section/testimonials-section';
import DonateCtaSection from '@site/src/components/pages/home/section/donate-cta-section';

export default function Home(): React.JSX.Element {
  return (
    <Layout description="The fastest and easiest way to automatically test and build your game projects">
      <HeroSection />
      <TrustedBySection />
      <FeaturesGridSection />
      <HowItWorksSection />
      <CodeSnippetSection />
      <PlatformSupportSection />
      <TestimonialsSection />
      <DonateCtaSection />
    </Layout>
  );
}
