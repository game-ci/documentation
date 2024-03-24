import React from 'react';
import cx from 'classnames';
import Section from '@site/src/components/pages/home/section/section';
import styles from './section.module.scss';

const list: DeveloperInfo[] = [
  {
    url: 'https://www.madronagames.com/',
    logoUrl: '/assets/images/devs/madronagames-logo.png',
    name: 'Madrona Games',
  },
  {
    url: 'https://totemastudio.com/',
    logoUrl: '/assets/images/devs/totemastudio-logo.svg',
    name: 'Totema Studios',
  },
];

type DeveloperInfo = {
  url: string;
  logoUrl: string;
  name: string;
};

const WhoIsUsingGameCiSection = () => {
  return (
    <Section className={styles.whoIsUsingGameCiSection}>
      <h2 className={cx('text-center text-5xl font-bold mb-10', styles.title)}>
        Developers that chose us
      </h2>
      <ul className={styles.devsList}>
        {list.map((item) => (
          <li key={item.name} className={styles.item}>
            <a href={item.url}>
              <img src={item.logoUrl} alt={item.name} />
            </a>
          </li>
        ))}
      </ul>
      <h4>
        <i>And more than 3,500 other developers</i>
      </h4>
    </Section>
  );
};

export default WhoIsUsingGameCiSection;
