import React, { createRef } from 'react';
import cx from 'classnames';
import { useColorMode } from '@docusaurus/theme-common';
import GameCiLogo from '@site/static/assets/images/game-ci-brand-logo-wordmark.svg';
import GameCiLogoLight from '@site/static/assets/images/game-ci-brand-logo-wordmark-light.svg';
import Section from '@site/src/components/pages/home/section/section';
import FadeIntoView from '@site/src/components/molecules/animations/fade-into-view';
import styles from './section.module.scss';
import GettingStarted from './getting-started';

const OpeningSection = () => {
  const ref = createRef<HTMLDivElement>();

  const { colorMode } = useColorMode();
  const isDarkTheme = colorMode === 'dark';
  const Logo = isDarkTheme ? GameCiLogo : GameCiLogoLight;

  const scrollToNextSection = () => {
    const element = ref.current.getBoundingClientRect();
    window.scrollTo({ top: element.height, behavior: 'smooth' });
  };

  return (
    <Section ref={ref} className={styles.openingSection}>
      <FadeIntoView>
        <Logo className={styles.logo} />
      </FadeIntoView>

      <FadeIntoView delay={150}>
        <h1 className={cx('text-sm md:text-2xl', styles.title)}>
          The fastest and <strong>easiest</strong> way to automatically test and build your game
          projects
        </h1>
      </FadeIntoView>

      <GettingStarted />

      <button
        type="button"
        onClick={scrollToNextSection}
        className="hidden md:block"
        style={{
          fontSize: '7vmin',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          position: 'absolute',
          bottom: '0',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        ⇩
      </button>
    </Section>
  );
};

export default OpeningSection;
