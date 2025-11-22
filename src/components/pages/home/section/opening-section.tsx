import React, { createRef } from 'react';
import GameCiLogo from '@site/static/assets/images/game-ci-brand-logo-wordmark.svg';
import GameCiLogoLight from '@site/static/assets/images/game-ci-brand-logo-wordmark-light.svg';
import Section from '@site/src/components/pages/home/section/section';
import FadeIntoView from '@site/src/components/molecules/animations/fade-into-view';
import GettingStarted from './getting-started';

const OpeningSection = () => {
  const ref = createRef<HTMLDivElement>();

  return (
    <Section ref={ref} className="!pt-0 !pb-8 !px-4 !min-h-[calc(100vh-60px)]">
      <FadeIntoView>
        <h1 className="m-0">
          <span className="invisible absolute w-0 h-0">GameCI</span>
          <GameCiLogoLight className="block dark:hidden select-none w-full max-w-[280px] h-auto" />
          <GameCiLogo className="hidden dark:block select-none w-full max-w-[280px] h-auto" />
        </h1>
      </FadeIntoView>

      <FadeIntoView delay={150}>
        <h2 className="text-base md:text-2xl text-center w-full max-w-[500px] m-0">
          The fastest and <strong>easiest</strong> way to automatically test and build your game
          projects
        </h2>
      </FadeIntoView>

      <FadeIntoView delay={200}>
        <div className="mt-4 md:mt-8">
          <GettingStarted />
        </div>
      </FadeIntoView>
    </Section>
  );
};

export default OpeningSection;
