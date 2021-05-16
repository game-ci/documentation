import Section from '@/components/pages/home/section/section';
import FadeIntoView from '@/components/reusable/animations/fade-into-view';
import React, { createRef } from 'react';
import { Typography } from 'antd';
import GameCiLogo from '../../../../assets/images/game-ci-brand-logo-wordmark.svg';

import styles from './section-module.scss';

const { Title } = Typography;

const OpeningSection = () => {
  const ref = createRef<HTMLDivElement>();

  const scrollToNextSection = () => {
    const element = ref.current.getBoundingClientRect();
    window.scrollTo({ top: element.height, behavior: 'smooth' });
  };

  return (
    <Section ref={ref} className={styles.openingSection}>
      <FadeIntoView delay={100}>
        <GameCiLogo className={styles.logo} />
      </FadeIntoView>

      <FadeIntoView delay={300}>
        <Title level={1} className={styles.title}>
          The fastest and <strong>easiest</strong> way to automatically test and build your game
          projects
        </Title>
      </FadeIntoView>

      <FadeIntoView delay={750}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <a onClick={scrollToNextSection} style={{ marginTop: '15vh', fontSize: '7vmin' }}>
          ⇩
        </a>
      </FadeIntoView>
    </Section>
  );
};

export default OpeningSection;
