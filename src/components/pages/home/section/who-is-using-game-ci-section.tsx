import React from 'react';
import Section from '@site/src/components/pages/home/section/section';
import FadeIntoView from '@site/src/components/molecules/animations/fade-into-view';
import { getUrlWithUtmParameters } from '@site/src/core/url';

const list: DeveloperInfo[] = [
  {
    url: 'https://www.madronagames.com/',
    logoUrl: '/assets/images/devs/madronagames-logo.webp',
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
              className="bg-gray-800 w-[150px] h-[150px] transform rounded-sm duration-200 hover:scale-110"
            >
              <a
                href={getUrlWithUtmParameters(item.url)}
                className="w-full h-full flex items-center justify-center px-6 py-2"
              >
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
