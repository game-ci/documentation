import React from 'react';
import Section from '@site/src/components/pages/home/section/section';
import FadeIntoView from '@site/src/components/molecules/animations/fade-into-view';
import { getUrlWithUtmParameters } from '@site/src/core/url';

const studios = [
  {
    name: 'Madrona Games',
    url: 'https://www.madronagames.com/',
    logo: '/assets/images/devs/madronagames-logo.webp',
  },
  {
    name: 'Tobafeu Studio',
    url: 'https://tobafeustudio.com/',
    logoLight: '/assets/images/devs/tobafeu-studio-logo-light.svg',
    logoDark: '/assets/images/devs/tobafeu-studio-logo-dark.svg',
  },
];

const TrustedBySection = () => (
  <Section title="Trusted by studios and teams worldwide">
    <FadeIntoView>
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
        {studios.map((studio) => (
          <a
            key={studio.name}
            href={getUrlWithUtmParameters(studio.url)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-40 h-24 md:w-48 md:h-28 rounded-lg border border-secondary-light dark:border-secondary-dark bg-background-normal-light dark:bg-background-normal-dark p-4 hover:shadow-md transition-all duration-300"
          >
            {studio.logoDark ? (
              <>
                <img
                  src={studio.logoLight || studio.logo}
                  alt={studio.name}
                  className="block dark:hidden max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
                <img
                  src={studio.logoDark}
                  alt={studio.name}
                  className="hidden dark:block max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </>
            ) : (
              <img
                src={studio.logo}
                alt={studio.name}
                className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
            )}
          </a>
        ))}

        <span className="text-lg md:text-xl font-medium text-brand-text-light/60 dark:text-brand-text-dark/60">
          + 20,000 more projects
        </span>
      </div>
    </FadeIntoView>
  </Section>
);

export default TrustedBySection;
