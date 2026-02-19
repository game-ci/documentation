import React from 'react';
import FadeIntoView from '@site/src/components/molecules/animations/fade-into-view';
import Section from '@site/src/components/pages/home/section/section';

const stats = [
  { value: '20,000+', label: 'Projects' },
  { value: '3,000+', label: 'GitHub stars' },
  { value: '3,000+', label: 'Discord members' },
  { value: '100+', label: 'Contributors' },
];

const StatsSection = () => (
  <Section>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 w-full max-w-4xl">
      {stats.map((stat, index) => (
        <FadeIntoView key={stat.label} delay={50 + index * 40}>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-bold text-primary-light dark:text-primary-dark">
              {stat.value}
            </span>
            <span className="text-sm md:text-base text-brand-text-light dark:text-brand-text-dark mt-1">
              {stat.label}
            </span>
          </div>
        </FadeIntoView>
      ))}
    </div>
  </Section>
);

export default StatsSection;
