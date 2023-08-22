import React, { useState } from 'react';

import Section from '@site/src/components/pages/home/section/section';
import styles from './section.module.scss';

const PricingSection = () => {
  const [minutes, setMinutes] = useState(0);

  return (
    <Section className={styles.pricingSection}>
      <h1 className={styles.title}>Pricing calculator (WIP)</h1>

      <div>
        Choose your VSC:
        <button type="button">Github</button>
        <button type="button">Gitlab</button>
        <button type="button">CircleCi</button>
        <br />
        <label htmlFor="minutes">
          Minutes:
          <br />
          <div>
            {minutes <= 999 ? minutes : <>&infin;</>}
            <input
              id="minutes"
              min={0}
              max={1000}
              defaultValue={0}
              type="range"
              onChange={(event) => {
                setMinutes(Number.parseInt(event.target.value, 10));
              }}
            />
          </div>
        </label>
      </div>
    </Section>
  );
};

export default PricingSection;
