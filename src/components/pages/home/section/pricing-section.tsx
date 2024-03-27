import React, { ComponentType, MouseEventHandler, SVGProps, useState } from 'react';
import { SiGitlab, SiGithub, SiCircleci } from 'react-icons/si';
import Section from '@site/src/components/pages/home/section/section';
import FadeIntoView from '@site/src/components/molecules/animations/fade-into-view';

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

const list = [
  {
    name: 'github',
    logo: SiGithub,
  },
  {
    name: 'gitlab',
    logo: SiGitlab,
  },
  {
    name: 'circleci',
    logo: SiCircleci,
  },
];

type ButtonProps = {
  name: string;
  isSelected: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  logo: ComponentType<SVGProps<SVGSVGElement>>;
};

const Button = ({ name, onClick, isSelected, logo: Logo }: ButtonProps) => {
  const isSelectedClassNames = isSelected
    ? '!border-primary-light !dark:border-primary-dark border-4'
    : '';

  return (
    <button
      onClick={onClick}
      className={`rounded-md p-1 mx-1 aspect-square w-11 h-11 transition-all duration-300 cursor-pointer bg-transparent border border-solid border-secondary-light dark:border-secondary-dark ${isSelectedClassNames}`}
      type="button"
    >
      <Logo className="w-5 h-5" aria-label={name} />
    </button>
  );
};

const PricingSection = () => {
  const [minutes, setMinutes] = useState(0);
  const [currency, setCurrency] = useState('EUR');
  const [selectedVsc, setVsc] = useState('github');

  return (
    <Section title="Pricing calculator">
      <FadeIntoView>
        <div className="p-3 rounded-md flex gap-3 h-52 bg-primary-light dark:bg-primary-dark">
          <div className="bg-white dark:bg-black p-3 rounded-md flex flex-col justify-between">
            <div>
              {list.map(({ name, logo }) => (
                <Button
                  key={name}
                  name={name}
                  isSelected={selectedVsc === name}
                  logo={logo}
                  onClick={() => setVsc(name)}
                />
              ))}
            </div>
            <label htmlFor="minutes">
              <p className="font-bold">Minutes:</p>
              <div className="flex items-center gap-1">
                <input
                  name="minutes"
                  min={0}
                  max={1000}
                  defaultValue={0}
                  type="range"
                  step={10}
                  onChange={(event) => {
                    setMinutes(Number.parseInt(event.target.value, 10));
                  }}
                />
                <span className="w-8">{minutes === 1000 ? <>&infin;</> : minutes}</span>
              </div>
            </label>
          </div>

          <div className="bg-white dark:bg-black p-3 rounded-md flex flex-col justify-between">
            <select onChange={(event) => setCurrency(event.target.value)} aria-label="currency">
              <option value="EUR">EUR &euro;</option>
              <option value="USD">USD $</option>
              <option value="ILS">ILS &#x20aa;</option>
              <option value="CAD">CAD $</option>
              <option value="AUD">AUD $</option>
              <option value="RUB">RUB &#x20bd;</option>
              <option value="JYP">JYP &yen;</option>
            </select>
            <span className="bg-gray-200 dark:bg-gray-800 p-2 rounded-sm">
              <p className="m-0 text-center font-bold">0.00 {currencyToSymbol(currency)}</p>
            </span>
          </div>
        </div>
      </FadeIntoView>
    </Section>
  );
};

export default PricingSection;
