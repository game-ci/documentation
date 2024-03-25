import Link from '@docusaurus/Link';
import React from 'react';
import cx from 'classnames';
import styles from '@site/src/components/pages/home/section/section.module.scss';
import FadeIntoView from '@site/src/components/molecules/animations/fade-into-view';
import GitHubLogo from '@site/static/assets/images/icons/github.svg';
import GitLabLogo from '@site/static/assets/images/icons/gitlab.svg';
import CircleCiLogo from '@site/static/assets/images/icons/circleci.svg';

const GettingStarted = () => {
  return (
    <span className={styles.gettingStartedSection}>
      <FadeIntoView>
        <h2 className={cx('text-center font-bold mb-4', styles.subtitle)}>Get Started Using:</h2>
      </FadeIntoView>

      <FadeIntoView className={styles.gettingStartedLinks}>
        <div className="w-full mt-6 inline-flex gap-10 flex-col md:flex-row items-center justify-center pb-16">
          <Link to="/docs/github/getting-started" className={styles.button}>
            <GitHubLogo />
          </Link>
          <Link to="/docs/gitlab/getting-started" className={styles.button}>
            <GitLabLogo />
          </Link>
          <Link to="/docs/circleci/getting-started" className={styles.button}>
            <CircleCiLogo />
          </Link>
        </div>
      </FadeIntoView>
    </span>
  );
};

export default GettingStarted;
