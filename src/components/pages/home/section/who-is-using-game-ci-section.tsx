import React from 'react';
import Section from '@site/src/components/pages/home/section/section';
import FadeIntoView from '@site/src/components/molecules/animations/fade-into-view';

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
    <Section title="Developers that chose us">
      <FadeIntoView>
        <ul className="flex gap-5 list-none ps-0 flex-wrap justify-center">
          {list.map((item) => (
            <li
              key={item.name}
              className="focus-within:outline-primary-light dark:focus-within:outline-primary-dark focus-within:outline focus-within:outline-3 bg-gray-800 flex items-center justify-center w-[150px] px-6 py-2 transform rounded-sm duration-200 min-h-[70px] hover:scale-110"
            >
              <a href={item.url} className="focus:outline-none">
                <img src={item.logoUrl} alt={item.name} className="block" />
              </a>
            </li>
          ))}
        </ul>
        <p className="italic font-bold">And more than 3,500 other developers</p>
      </FadeIntoView>
    </Section>
  );
};

export default WhoIsUsingGameCiSection;
