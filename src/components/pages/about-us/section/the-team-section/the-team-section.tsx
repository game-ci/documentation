import React from 'react';
import Profile from '@site/src/components/pages/about-us/section/the-team-section/profile';
// @ts-ignore
import webber from './pictures/webber.png';
// @ts-ignore
import gabLeRoux from './pictures/gableroux.png';
// @ts-ignore
import david from './pictures/david.jpg';
// @ts-ignore
import fisher from './pictures/fisher.png';
import Pattern from './team-pattern.svg';

const membersPerTwo = [
  [
    {
      nick: 'Webber',
      name: 'Dick Webbink',
      title: 'Founder',
      image: webber,
      continent: 'Europe',
      social: {
        website: 'https://takken.io?utm_source=game-ci',
        linkedIn: 'https://www.linkedin.com/in/webbertakken/',
        github: 'https://github.com/webbertakken',
      },
    },
    {
      nick: 'GabLeRoux',
      name: 'Gabriel Le Breton',
      title: 'Founder',
      image: gabLeRoux,
      continent: 'Americas',
      social: {
        website: 'https://gableroux.com?utm_source=game-ci',
        linkedIn: 'https://www.linkedin.com/in/gableroux/',
        twitter: 'https://twitter.com/gableroux',
        github: 'https://github.com/gableroux',
      },
    },
  ],
  [
    {
      nick: 'David',
      name: 'David Finol',
      title: 'Core Maintainer',
      image: david,
      continent: 'Americas',
      social: {
        website: 'https://davidmfinol.website?utm_source=game-ci',
        linkedIn: 'https://www.linkedin.com/in/davidmfinol/',
        github: 'https://github.com/davidmfinol',
      },
    },
    {
      nick: 'Fisher',
      name: 'Markus Dugdale',
      title: 'Core Maintainer',
      image: fisher,
      continent: 'Europe',
      social: {
        linkedIn: 'https://www.linkedin.com/in/markus-dugdale-136112136/',
        github: 'https://github.com/frostebite',
      },
    },
  ],
];

const TheTeamSection = (): JSX.Element => {
  return (
    <div className="py-12 px-0 md:px-14 xl:px-8 flex justify-center items-center flex-col">
      <h1 className="text-xl md:text-2xl xl:text-4xl tracking-wider leading-5 md:leading-6 xl:leading-9 text-center">
        Core Maintainers
      </h1>
      <div className="mt-8 xl:mt-14 px-12 md:px-10 2xl:px-14 flex relative justify-center items-center">
        <Pattern className="object-cover w-44 h-44 md:w-60 md:h-60 lg:w-72 lg:h-72 absolute z-0 left-0 top-0" />
        <Pattern className="object-cover w-44 h-44 md:w-60 md:h-60 lg:w-72 lg:h-72 absolute z-0 right-0 bottom-0" />

        <div className="flex justify-center items-center space-y-4 sm:space-y-6 xl:space-y-0 xl:flex-row flex-col w-full xl:space-x-6 relative z-10">
          {membersPerTwo.map((group) => (
            <div className="flex sm:justify-start items-center justify-center flex-col sm:flex-row sm:items-start">
              {group.map((member, index) => {
                const isOdd = index % 2 === 0;
                const className = isOdd
                  ? 'px-14 mb-4 md:mb-0 sm:mr-6 xl:mr-6 2xl:mr-8'
                  : 'sm:mt-14 xl:mt-32';
                return <Profile {...member} className={className} />;
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TheTeamSection;
