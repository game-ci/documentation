import Section from '@site/src/components/pages/home/section/section';
import React from 'react';
import { Typography } from 'antd';

import styles from './section-module.scss';

const { Title } = Typography;

const VisualRepresentationOfWhatWeDoSection = () => (
  <Section className={styles.visualRepresentationOfWhatWeDoSection}>
    <Title level={2}>Visual (WIP)</Title>
  </Section>
);

export default VisualRepresentationOfWhatWeDoSection;
