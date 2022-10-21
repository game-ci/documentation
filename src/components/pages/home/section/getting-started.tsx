import FadeIntoView from '@site/src/components/molecules/animations/fade-into-view';
import Link from '@docusaurus/Link';
import React from 'react';
import styles from '@site/src/components/pages/home/section/section.module.scss';
import cx from 'classnames';
import Section from '@site/src/components/pages/home/section/section';

const GettingStarted = () => {
  return (
    <Section className={styles.gettingStartedSection}>
      <FadeIntoView>
        <h2 className={cx('text-center text-5xl font-bold mb-10', styles.title)}>Get started</h2>
      </FadeIntoView>

      <FadeIntoView>
        <p className="text-center text-xl">My automation runs on</p>
        <div className="mt-6 inline-flex gap-2">
          <Link to="/docs/github/getting-started" className={styles.button}>
            GitHub
          </Link>
          <Link to="/docs/gitlab/getting-started" className={styles.button}>
            GitLab
          </Link>
          <Link to="/docs/circleci/getting-started" className={styles.button}>
            CircleCI
          </Link>
        </div>
      </FadeIntoView>
    </Section>
  );
};

export default GettingStarted;
