import React from 'react';
import Section from '@site/src/components/pages/home/section/section';
import styles from './section.module.scss';

const WhoIsUsingGameCiSection = () => {
  return (
    <Section className={styles.whoIsUsingGameCiSection}>
      <h2>Developers that chose us</h2>
      {/* Todo: 5 columns 3 rows for mobile - 10 columns 4 rows for large screens */}
    </Section>
  );
};

export default WhoIsUsingGameCiSection;
