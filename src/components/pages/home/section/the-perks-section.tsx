import React from 'react';
import Section from '@site/src/components/pages/home/section/section';
import FadeIntoView from '@site/src/components/molecules/animations/fade-into-view';

const cards = [
  {
    title: 'Free for everyone, forever',
    content: (
      <p>
        We believe that for most individuals and game companies, CI is{' '}
        <strong>not the core-business</strong>. And that it is in everybody&apos;s interest to
        combine their knowledge and create a solution that is accessible for everyone.
      </p>
    ),
  },
  {
    title: 'Beginner-friendly',
    content: (
      <p>
        We have a strong focus on being beginner-friendly. GameCI is offering{' '}
        <strong>friendly functional APIs</strong>, that does not require much technical knowledge to
        configure. Making customisations is easily done by forking our projects, giving much{' '}
        <strong>flexibility</strong>.
      </p>
    ),
  },
  {
    title: 'Proactive community',
    content: (
      <p>
        GameCI is built by industry professionals across the globe. Please feel free to{' '}
        <strong>
          join us on{' '}
          <a href="/discord" className="text-primary-light dark:text-primary-dark" target="_blank">
            Discord
          </a>
        </strong>{' '}
        and have a chat!
      </p>
    ),
  },
  {
    title: 'Proven technologies',
    content: (
      <>
        <p>
          Our build stack is built on top of docker and official game engine standards. We follow{' '}
          <strong>industry best practices</strong> where applicable and build with very large scale
          in mind.
        </p>

        <p>
          This combination makes that we offer a solid basis for{' '}
          <strong>enterprise-grade capability</strong>.
        </p>
      </>
    ),
  },
  {
    title: 'Clear documentation',
    content: (
      <p>
        Our documentation can be edited directly on GitHub, making it easy to fix mistakes or update
        to the latest standards. Because of the <strong>community</strong>, docs always have a
        certain level of completeness. Can&apos;t find what you&apos;re looking for? Just ask.
      </p>
    ),
  },
  {
    title: 'Production ready',
    content: (
      <>
        <p>
          Companies both large and small use GameCI to test and build their production application
          as part of their daily workflows.
        </p>

        <p>
          Use the CI system and cloud provider you love.{' '}
          <strong>No need to switch technologies</strong>. On-prem? Self-hosted runners? Not a
          problem either.
        </p>
      </>
    ),
  },
];

const ThePerksSection = () => {
  return (
    <Section title="The perks">
      <ul className="list-none ps-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <li key={card.title}>
            <FadeIntoView delay={50 + index * 33} className="h-full">
              <div className="block p-6 h-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-900">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary-light dark:text-primary-dark">
                  {card.title}
                </h5>
                <div className="font-normal text-gray-900 dark:text-gray-100">{card.content}</div>
              </div>
            </FadeIntoView>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default ThePerksSection;
