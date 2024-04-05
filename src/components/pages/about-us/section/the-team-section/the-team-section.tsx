import React from 'react';
import Profile from '@site/src/components/pages/about-us/section/the-team-section/profile';
import Pattern from './team-pattern.svg';
import { members } from './data/team-info';

const TheTeamSection = (): React.JSX.Element => {
  return (
    <div className="py-12 px-0 md:px-14 xl:px-8 flex justify-center items-center flex-col">
      <h1 className="text-xl md:text-2xl xl:text-4xl tracking-wider leading-5 md:leading-6 xl:leading-9 text-center">
        Core Maintainers
      </h1>
      <div className="mt-8 xl:mt-14 px-12 md:px-10 2xl:px-14 relative">
        <Pattern className="object-cover w-44 h-44 md:w-60 md:h-60 lg:w-72 lg:h-72 absolute left-0 top-0" />
        <Pattern className="object-cover w-44 h-44 md:w-60 md:h-60 lg:w-72 lg:h-72 absolute right-0 bottom-0" />

        <div className="gap-6 grid items-start w-full relative grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
          {members.map((member) => (
            <Profile key={member.nick} {...member} className="even:sm:mt-14 even:xl:mt-32" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TheTeamSection;
