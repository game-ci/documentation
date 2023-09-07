import Link from '@docusaurus/Link';
import React from 'react';
import cx from 'classnames';
import FadeIntoView from '@site/src/components/molecules/animations/fade-into-view';
import styles from '@site/src/components/pages/home/section/section.module.scss';
import Section from '@site/src/components/pages/home/section/section';

const SponsorsSection = () => {
  return (
    <Section className={styles.sponsorsSection}>
      <FadeIntoView>
        <h2 className={cx('text-center text-5xl font-bold mb-10', styles.title)}>Sponsors</h2>
      </FadeIntoView>

      <FadeIntoView>
        <div className="mt-12 inline-flex">
          <Link to="https://circleci.com?utm_source=game-ci" className="text-black dark:text-white">
            <span className={styles.linkSpan}>
              <img width={120} src="/assets/images/icons/circleci.svg" alt="CircleCI" />
            </span>
          </Link>
        </div>
      </FadeIntoView>
    </Section>
  );
};

export default SponsorsSection;
