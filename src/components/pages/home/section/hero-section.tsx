import React from 'react';
import { SiGithub } from 'react-icons/si';
import Section from '@site/src/components/pages/home/section/section';
import FadeIntoView from '@site/src/components/molecules/animations/fade-into-view';
import GameCiLogo from '@site/static/assets/images/game-ci-brand-logo-wordmark.svg';
import GameCiLogoLight from '@site/static/assets/images/game-ci-brand-logo-wordmark-light.svg';

const stats = [
  { value: '20,000+', label: 'Projects' },
  { value: '3,000+', label: 'GitHub stars' },
  { value: '3,000+', label: 'Discord members' },
  { value: '100+', label: 'Contributors' },
];

const HeroSection = () => (
  <>
    <Section className="min-h-[calc(100vh-60px)] justify-center">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto gap-8">
        <FadeIntoView>
          <GameCiLogoLight className="block dark:hidden h-24 md:h-32 w-auto" role="img" />
          <GameCiLogo className="hidden dark:block h-24 md:h-32 w-auto" role="img" />
        </FadeIntoView>

        <FadeIntoView delay={100}>
          <h1 className="text-4xl md:text-6xl font-bold text-primary-light dark:text-primary-dark leading-tight">
            The CI/CD platform built for game developers
          </h1>
        </FadeIntoView>

        <FadeIntoView delay={200}>
          <p className="text-lg md:text-xl text-brand-text-light dark:text-brand-text-dark max-w-2xl">
            Automate your builds, tests, and deployments — trusted by 20,000+ projects worldwide.
          </p>
        </FadeIntoView>

        <FadeIntoView delay={300}>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a
              href="/docs/github/getting-started"
              className="cta-filled inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold bg-[#227d5e] dark:bg-primary-dark hover:bg-[#1b6349] dark:hover:bg-[#2fa37d] hover:shadow-lg transition-all"
            >
              Get started
            </a>
            <a
              href="https://github.com/game-ci"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-outline inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold border-2 border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark hover:bg-[#227d5e] hover:border-[#227d5e] dark:hover:bg-primary-dark dark:hover:border-primary-dark hover:shadow-lg transition-all"
            >
              <SiGithub className="text-lg" />
              View on GitHub
            </a>
          </div>
        </FadeIntoView>

        <FadeIntoView delay={400}>
          <div
            data-testid="stats-desktop"
            className="hidden md:grid grid-cols-4 gap-12 mt-8 w-full"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="text-4xl font-bold text-primary-light dark:text-primary-dark">
                  {stat.value}
                </span>
                <span className="text-base text-brand-text-light dark:text-brand-text-dark mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </FadeIntoView>
      </div>
    </Section>
    <div className="md:hidden w-full min-h-[70vh] flex flex-col items-center justify-center p-6 bg-[#e8e8e8] dark:bg-[#2a2836]">
      <div data-testid="stats-mobile" className="grid grid-cols-2 gap-6 w-full max-w-4xl">
        {stats.map((stat, index) => (
          <FadeIntoView key={stat.label} delay={50 + index * 40}>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary-light dark:text-primary-dark">
                {stat.value}
              </span>
              <span className="text-sm text-brand-text-light dark:text-brand-text-dark mt-1">
                {stat.label}
              </span>
            </div>
          </FadeIntoView>
        ))}
      </div>
    </div>
  </>
);

export default HeroSection;
