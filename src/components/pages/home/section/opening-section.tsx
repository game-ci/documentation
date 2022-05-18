import React, { createRef } from 'react';
import { Typography } from 'antd';
import GameCiLogo from '@site/static/assets/images/game-ci-brand-logo-wordmark.svg';
import GameCiLogoLight from '@site/static/assets/images/game-ci-brand-logo-wordmark-light.svg';
import { useColorMode } from '@docusaurus/theme-common';

import Section from '@site/src/components/pages/home/section/section';
import styles from './section.module.scss';

const { Title } = Typography;

const OpeningSection = () => {
  const ref = createRef<HTMLDivElement>();

  const { isDarkTheme } = useColorMode();

  const Logo = isDarkTheme ? GameCiLogo : GameCiLogoLight;

  const scrollToNextSection = () => {
    const element = ref.current.getBoundingClientRect();
    window.scrollTo({ top: element.height, behavior: 'smooth' });
  };

  return (
    <Section ref={ref} className={styles.openingSection}>
      <Logo className={styles.logo} />

      <Title level={1} className={styles.title}>
        The fastest and <strong>easiest</strong> way to automatically test and build your game
        projects
      </Title>

      <button
        type="button"
        onClick={scrollToNextSection}
        style={{
          marginTop: '15vh',
          fontSize: '7vmin',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        ⇩
      </button>
    </Section>
  );
};

export default OpeningSection;
