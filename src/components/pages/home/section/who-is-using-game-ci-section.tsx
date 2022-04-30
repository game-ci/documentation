import Section from '@site/src/components/pages/home/section/section';
import React from 'react';
import { Typography } from 'antd';

import styles from './section-module.scss';

const { Title } = Typography;

const WhoIsUsingGameCiSection = () => {
  return (
    <Section className={styles.whoIsUsingGameCiSection}>
      <Title level={2}>Developers that chose us</Title>
      {/* Todo: 5 columns 3 rows for mobile - 10 columns 4 rows for large screens */}
    </Section>
  );
};

export default WhoIsUsingGameCiSection;
