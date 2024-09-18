import React from 'react';
import FadeIntoView from '@site/src/components/molecules/animations/fade-into-view';
import Section from '@site/src/components/pages/home/section/section';

const SponsorsSection = () => {
  return (
    <Section title="Sponsors" className="bg-white dark:bg-[#020612]">
      <FadeIntoView>
        <iframe
          title="Game CI Sponsors"
          height="667"
          width="800"
          src="https://opencollective.com/game-ci/banner.html"
          frameBorder="0"
          scrolling="no"
        />
      </FadeIntoView>
    </Section>
  );
};

export default SponsorsSection;
