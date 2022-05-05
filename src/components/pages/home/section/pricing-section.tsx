import React from 'react';
import { Typography } from 'antd';

import styles from './section.module.scss';
import Section from "@site/src/components/pages/home/section/section";

const { Title } = Typography;

const PricingSection = () => {
  return (
    <Section className={styles.pricingSection}>
      <Title level={2}>Pricing calculator &lt;3</Title>
    </Section>
  );
};

export default PricingSection;
