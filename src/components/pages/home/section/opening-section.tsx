import React, { createRef } from 'react';
import GameCiLogo from '@site/static/assets/images/game-ci-brand-logo-wordmark.svg';
import GameCiLogoLight from '@site/static/assets/images/game-ci-brand-logo-wordmark-light.svg';
import Section from '@site/src/components/pages/home/section/section';
import FadeIntoView from '@site/src/components/molecules/animations/fade-into-view';
import GettingStarted from './getting-started';

const OpeningSection = () => {
  const ref = createRef<HTMLDivElement>();

  const scrollToNextSection = () => {
    const element = ref.current.getBoundingClientRect();
    window.scrollTo({ top: element.height, behavior: 'smooth' });
  };

  return (
    <Section ref={ref} className="!py-0 !px-4 !min-h-[calc(100vh-60px)]">
      <FadeIntoView>
        <h1>
          <span className="invisible absolute w-0 h-0">GameCI</span>
          <GameCiLogoLight className="block dark:hidden select-none w-full max-w-[320px] h-auto" />
          <GameCiLogo className="hidden dark:block select-none w-full max-w-[320px] h-auto" />
        </h1>
      </FadeIntoView>

      <FadeIntoView delay={150}>
        <h2 className="text-sm md:text-2xl text-center w-full max-w-[500px]">
          The fastest and <strong>easiest</strong> way to automatically test and build your game
          projects
        </h2>
      </FadeIntoView>

      <FadeIntoView delay={200}>
        <div className="mt-8 md:mt-12">
          <GettingStarted />
        </div>
      </FadeIntoView>

      <button
        type="button"
        onClick={scrollToNextSection}
        className="hidden md:block bg-transparent border-none cursor-pointer text-7xl absolute bottom-0 mb-2 focus-visible:outline focus-visible:outline-2"
        aria-label="Click to scroll to the next section"
      >
        ⇩
      </button>
    </Section>
  );
};

export default OpeningSection;
