import React from 'react';
import { IconType } from 'react-icons';
import { FiLayers, FiShield, FiUnlock, FiUsers, FiZap } from 'react-icons/fi';
import { SiUnity } from 'react-icons/si';
import FadeIntoView from '@site/src/components/molecules/animations/fade-into-view';
import Section from '@site/src/components/pages/home/section/section';

interface FeatureCard {
  title: string;
  description: string;
  icon: IconType;
}

const features: FeatureCard[] = [
  {
    title: 'Free and open source',
    description: 'No licence fees. No vendor lock-in. Fully open under MIT.',
    icon: FiUnlock,
  },
  {
    title: 'Battle-tested',
    description: 'Trusted by 20,000+ projects, from solo devs to enterprise studios.',
    icon: FiShield,
  },
  {
    title: 'Unity support',
    description: 'First-class support for Unity, with editor test and build actions.',
    icon: SiUnity,
  },
  {
    title: 'Five-minute setup',
    description: 'Add a workflow file, push, and your first build runs automatically.',
    icon: FiZap,
  },
  {
    title: 'Multi-platform builds',
    description: 'Build for iOS, Android, Windows, macOS, Linux, and WebGL.',
    icon: FiLayers,
  },
  {
    title: 'Active community',
    description: 'Get help on Discord, contribute on GitHub, or sponsor development.',
    icon: FiUsers,
  },
];

const FeaturesGridSection = () => (
  <Section title="Why GameCI?">
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0 w-full max-w-6xl">
      {features.map((feature, index) => (
        <li key={feature.title}>
          <FadeIntoView delay={50 + index * 33} className="h-full">
            <div className="h-full bg-background-highlight-light dark:bg-background-highlight-dark border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary-light/10 dark:bg-primary-dark/10 mb-4">
                <feature.icon className="w-6 h-6 text-primary-light dark:text-primary-dark" />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-brand-text-light/70 dark:text-brand-text-dark/70 m-0">
                {feature.description}
              </p>
            </div>
          </FadeIntoView>
        </li>
      ))}
    </ul>
  </Section>
);

export default FeaturesGridSection;
