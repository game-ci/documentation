import Section from '@/components/pages/home/section/section';
import React from 'react';
import { Typography } from 'antd';

import styles from './section-module.scss';

const { Title } = Typography;

const OurVisionSection = () => (
  <Section className={styles.ourVisionSection}>
    <Title level={2}>Our vision (WIP)</Title>
  </Section>
);

export default OurVisionSection;
