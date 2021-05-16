import Section from '@/components/pages/home/section/section';
import React from 'react';
import { Typography } from 'antd';

import styles from './section-module.scss';

const { Title } = Typography;

const WhyChooseForUsSection = () => {
  return (
    <Section className={styles.whyGameCiSection}>
      <Title level={2}>Why choose for GameCI</Title>
    </Section>
  );
};

export default WhyChooseForUsSection;
