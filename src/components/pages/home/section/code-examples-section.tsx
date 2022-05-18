import React from 'react';
import Section from '@site/src/components/pages/home/section/section';
import styles from './section.module.scss';

const CodeExamplesSection = () => {
  return (
    <Section className={styles.codeExamplesSection}>
      <h2>Code examples</h2>
      <p>with editable code or checkbox add/remove functionality</p>
    </Section>
  );
};

export default CodeExamplesSection;
