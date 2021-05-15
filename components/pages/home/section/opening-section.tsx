import Section from '@/components/pages/home/section/section';
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
      <GameCiLogo className={styles.logo} />
      <Title level={1} className={styles.title}>
        The fastest and <strong>easiest</strong> way to automatically test and build your game
        projects
      </Title>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <a onClick={scrollToNextSection} style={{ marginTop: '15vh', fontSize: '7vmin' }}>
        ⇩
      </a>
    </Section>
  );
};

export default OpeningSection;
