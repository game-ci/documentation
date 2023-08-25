import React from 'react';
import Section from '@site/src/components/pages/home/section/section';
import styles from './section.module.scss';

const WhoIsUsingGameCiSection = () => {
  return (
    <Section className={styles.whoIsUsingGameCiSection}>
      <h1>Developers that chose us</h1>
      <div className={styles.devsGrid}>
        <div className={styles.gridItem}>
          <a href="https://www.madronagames.com/">
            <img src="/assets/images/devs/madronagames-logo.png" alt="Madrona Games" />
          </a>
        </div>
        <div className={styles.gridItem}>
          <a href="https://totemastudio.com/">
            <img src="/assets/images/devs/totemastudio-logo.svg" alt="Totema Studios" />
          </a>
        </div>
        <div className={styles.gridItem}>
          <a href="/">
            <img src="/assets/images/devs/" alt="" />
          </a>
        </div>
        <div className={styles.gridItem}>
          <a href="/">
            <img src="/assets/images/devs/" alt="" />
          </a>
        </div>
        <div className={styles.gridItem}>
          <a href="/">
            <img src="/assets/images/devs/" alt="" />
          </a>
        </div>
        <div className={styles.gridItem}>
          <a href="/">
            <img src="/assets/images/devs/" alt="" />
          </a>
        </div>
        <div className={styles.gridItem}>
          <a href="/">
            <img src="/assets/images/devs/" alt="" />
          </a>
        </div>
        <div className={styles.gridItem}>
          <a href="/">
            <img src="/assets/images/devs/" alt="" />
          </a>
        </div>
        <div className={styles.gridItem}>
          <a href="/">
            <img src="/assets/images/devs/" alt="" />
          </a>
        </div>
        <div className={styles.gridItem}>
          <a href="/">
            <img src="/assets/images/devs/" alt="" />
          </a>
        </div>
      </div>
      <h4>And more than 3500+ other developers</h4>
    </Section>
  );
};

export default WhoIsUsingGameCiSection;
