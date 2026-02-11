import React from 'react';
import { IconType } from 'react-icons';
import { FiGlobe } from 'react-icons/fi';
import {
  SiAndroid,
  SiApple,
  SiCircleci,
  SiGithub,
  SiGitlab,
  SiLinux,
  SiWindows,
} from 'react-icons/si';
import FadeIntoView from '@site/src/components/molecules/animations/fade-into-view';
import Section from '@site/src/components/pages/home/section/section';

interface PlatformItem {
  label: string;
  icon: IconType;
}

const ciPlatforms: PlatformItem[] = [
  { label: 'GitHub Actions', icon: SiGithub },
  { label: 'GitLab CI', icon: SiGitlab },
  { label: 'CircleCI', icon: SiCircleci },
];

const buildTargets: PlatformItem[] = [
  { label: 'iOS', icon: SiApple },
  { label: 'Android', icon: SiAndroid },
  { label: 'Windows', icon: SiWindows },
  { label: 'macOS', icon: SiApple },
  { label: 'Linux', icon: SiLinux },
  { label: 'WebGL', icon: FiGlobe },
];

interface PlatformGridProps {
  subtitle: string;
  items: PlatformItem[];
  delayOffset: number;
}

const PlatformGrid = ({ subtitle, items, delayOffset }: PlatformGridProps) => (
  <div className="w-full max-w-4xl mb-10 last:mb-0">
    <FadeIntoView delay={delayOffset}>
      <h3 className="text-center text-xl md:text-2xl font-semibold mb-6 text-brand-text-light dark:text-brand-text-dark">
        {subtitle}
      </h3>
    </FadeIntoView>
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
      {items.map((item, index) => (
        <FadeIntoView key={item.label} delay={delayOffset + 50 + index * 40}>
          <div className="flex flex-col items-center justify-center w-28 h-28 md:w-32 md:h-32 rounded-lg border border-gray-200 dark:border-gray-700 bg-background-highlight-light dark:bg-background-highlight-dark p-4 hover:shadow-lg transition-shadow duration-300">
            <item.icon className="text-3xl md:text-4xl text-primary-light dark:text-primary-dark mb-2" />
            <span className="text-sm font-medium text-brand-text-light/80 dark:text-brand-text-dark/80 text-center">
              {item.label}
            </span>
          </div>
        </FadeIntoView>
      ))}
    </div>
  </div>
);

const PlatformSupportSection = () => (
  <Section title="Works with your stack">
    <PlatformGrid subtitle="CI/CD platforms" items={ciPlatforms} delayOffset={50} />
    <PlatformGrid subtitle="Build targets" items={buildTargets} delayOffset={250} />
  </Section>
);

export default PlatformSupportSection;
