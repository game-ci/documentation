import Section from '@/components/pages/home/section/section';
import React from 'react';
import { Typography } from 'antd';

import styles from './section-module.scss';

const { Title } = Typography;

const PricingSection = () => {
  return (
    <Section className={styles.pricingSection}>
      <Title level={2}>Pricing calculator &lt;3</Title>
    </Section>
  );
};

export default PricingSection;
