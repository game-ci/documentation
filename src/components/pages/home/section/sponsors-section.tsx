import Link from '@docusaurus/Link';
import React from 'react';
import cx from 'classnames';
import FadeIntoView from '@site/src/components/molecules/animations/fade-into-view';
import styles from '@site/src/components/pages/home/section/section.module.scss';
import Section from '@site/src/components/pages/home/section/section';
import CircleCiLogo from '@site/static/assets/images/icons/circleci.svg';

const SponsorsSection = () => {
  return (
    <Section className={styles.sponsorsSection}>
      <FadeIntoView>
        <h2 className={cx('text-center text-5xl font-bold mb-10', styles.title)}>Sponsors</h2>
      </FadeIntoView>

      <FadeIntoView>
        <ul className="mt-12 flex gap-4 list-none p-0">
          <li>
            <Link
              to="https://circleci.com?utm_source=game-ci"
              className="text-black dark:text-white"
            >
              <CircleCiLogo className={styles.logo} />
            </Link>
          </li>
        </ul>
      </FadeIntoView>
    </Section>
  );
};

export default SponsorsSection;
