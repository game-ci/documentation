import React from 'react';
import Section from '@site/src/components/pages/home/section/section';
import styles from './section.module.scss';

const gridItems: GridItems = [
  {
    url: 'https://www.madronagames.com/',
    imgSrc: '/assets/images/devs/madronagames-logo.png',
    altText: 'Madrona Games',
  },
  {
    url: 'https://totemastudio.com/',
    imgSrc: '/assets/images/devs/totemastudio-logo.svg',
    altText: 'Totema Studios',
  },
];

type GridItems = {
  url: string;
  imgSrc: string;
  altText: string;
}[];

const WhoIsUsingGameCiSection = () => {
  return (
    <Section className={styles.whoIsUsingGameCiSection}>
      <h1>Developers that chose us</h1>
      <div className={styles.devsGrid}>
        {gridItems.map((item) => (
          <div className={styles.gridItem}>
            <a href={item.url}>
              <img src={item.imgSrc} alt={item.altText} />
            </a>
          </div>
        ))}
      </div>
      <h4>
        <i>And more than 3,500 other developers</i>
      </h4>
    </Section>
  );
};

export default WhoIsUsingGameCiSection;
