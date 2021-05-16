import Section from '@/components/pages/home/section/section';
import React from 'react';
import { Typography } from 'antd';

import styles from './section-module.scss';

const { Title } = Typography;

const CodeExamplesSection = () => {
  return (
    <Section className={styles.codeExamplesSection}>
      <Title level={2}>Code exmaples (WIP)</Title>
    </Section>
  );
};

export default CodeExamplesSection;
