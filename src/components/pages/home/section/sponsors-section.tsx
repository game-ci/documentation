import React from 'react';
import FadeIntoView from '@site/src/components/molecules/animations/fade-into-view';
import Section from '@site/src/components/pages/home/section/section';

const SponsorsSection = () => {
  return (
    // Would be nice if the banner had a dark mode that we could use for `dark:*`
    <Section title="Sponsors" className="bg-white dark:bg-white">
      <FadeIntoView className="w-full max-w-7xl">
        <iframe
          title="Game CI Sponsors"
          className="w-full h-[1200px] sm:h-[1000px] md:h-[900px] lg:h-[750px] xl:h-[667px]"
          src="https://opencollective.com/game-ci/banner.html"
          frameBorder="0"
          scrolling="no"
        />
      </FadeIntoView>
    </Section>
  );
};

export default SponsorsSection;
