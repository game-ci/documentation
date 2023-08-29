import React, { useState } from 'react';
import { SiGitlab, SiGithub, SiCircleci } from 'react-icons/si';

import Section from '@site/src/components/pages/home/section/section';
import styles from './section.module.scss';

const currencyToSymbol = (currency: string) => {
  switch (currency) {
    case 'USD':
    case 'AUD':
    case 'CAD':
    default:
      return '$';

    case 'ILS':
      return '₪';

    case 'JYP':
      return '¥';

    case 'RUB':
      return '₽';

    case 'EUR':
      return '€';
  }
};

const PricingSection = () => {
  const [minutes, setMinutes] = useState(0);
  const [currency, setCurrency] = useState('EUR');
  const [selectedVsc, setVsc] = useState(0);

  return (
    <Section className={styles.pricingSection}>
      <h1 className={styles.title}>Pricing calculator</h1>

      <div className="p-3 rounded-md flex gap-3 h-52">
        <div className="bg-black p-3 rounded-md flex flex-col justify-between">
          <div>
            <button
              onClick={() => setVsc(0)}
              className={`${styles.vscButton} ${selectedVsc === 0 && styles.selected}`}
              type="button"
            >
              <SiGithub />
            </button>
            <button
              onClick={() => setVsc(1)}
              className={`${styles.vscButton} ${selectedVsc === 1 && styles.selected}`}
              type="button"
            >
              <SiGitlab />
            </button>
            <button
              onClick={() => setVsc(2)}
              className={`${styles.vscButton} ${selectedVsc === 2 && styles.selected}`}
              type="button"
            >
              <SiCircleci />
            </button>
            <br />
          </div>
          <label htmlFor="minutes">
            <h4>Minutes:</h4>
            <div className="flex items-center gap-1">
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
              <span>{minutes <= 999 ? minutes : <>&infin;</>}</span>
            </div>
          </label>
        </div>

        <div className="bg-black p-3 rounded-md flex flex-col justify-between">
          <select onChange={(event) => setCurrency(event.target.value)}>
            <option value="EUR">EUR &euro;</option>
            <option value="USD">USD $</option>
            <option value="ILS">ILS &#x20aa;</option>
            <option value="CAD">CAD $</option>
            <option value="AUD">AUD $</option>
            <option value="RUB">RUB &#x20bd;</option>
            <option value="JYP">JYP &yen;</option>
          </select>
          <span className="bg-gray-800 p-2 rounded-sm">
            <h5 className="m-0">0.00 {currencyToSymbol(currency)}</h5>
          </span>
        </div>
      </div>
    </Section>
  );
};

export default PricingSection;
