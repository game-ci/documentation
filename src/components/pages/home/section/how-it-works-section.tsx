import React from 'react';
import { FiSettings, FiGitCommit, FiPackage } from 'react-icons/fi';
import Section from '@site/src/components/pages/home/section/section';
import FadeIntoView from '@site/src/components/molecules/animations/fade-into-view';

const steps = [
  {
    number: 1,
    title: 'Configure',
    description: 'Define your build matrix in a simple YAML workflow file.',
    icon: FiSettings,
  },
  {
    number: 2,
    title: 'Push',
    description: 'Push to your repository and let GameCI handle the rest.',
    icon: FiGitCommit,
  },
  {
    number: 3,
    title: 'Ship',
    description: 'Receive tested, production-ready builds for every platform.',
    icon: FiPackage,
  },
];

const HowItWorksSection = () => (
  <Section title="How it works">
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4 max-w-5xl w-full">
      {steps.map((step, index) => (
        <React.Fragment key={step.number}>
          <FadeIntoView delay={index * 150}>
            <div className="flex flex-col items-center text-center max-w-xs px-4">
              <div className="w-14 h-14 rounded-full bg-primary-light dark:bg-primary-dark text-white flex items-center justify-center text-xl font-bold mb-4">
                {step.number}
              </div>
              <step.icon className="text-2xl text-primary-light dark:text-primary-dark mb-2" />
              <h3 className="text-xl font-semibold text-brand-text-light dark:text-brand-text-dark mb-2">
                {step.title}
              </h3>
              <p className="text-brand-text-light dark:text-brand-text-dark opacity-80">
                {step.description}
              </p>
            </div>
          </FadeIntoView>
          {index < steps.length - 1 && (
            <span className="hidden md:block text-3xl text-gray-300 dark:text-gray-600 select-none">
              &rarr;
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  </Section>
);

export default HowItWorksSection;
