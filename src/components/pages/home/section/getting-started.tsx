import FadeIntoView from '@site/src/components/molecules/animations/fade-into-view';
import Link from '@docusaurus/Link';
import React from 'react';

const GettingStarted = () => {
  const buttonClasses =
    'py-4 px-6 mx-3 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg';

  return (
    <div className="bg-white dark:bg-gray-800 ">
      <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <FadeIntoView>
          <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block">Quickly get started</span>
            <span>My Unity project is hosted on</span>
          </h2>
        </FadeIntoView>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <FadeIntoView>
            <div className="mt-12 inline-flex rounded-md shadow">
              <Link to="/docs/github/getting-started" className={buttonClasses}>
                github
              </Link>
              <Link to="/docs/gitlab/getting-started" className={buttonClasses}>
                gitlab
              </Link>
            </div>
          </FadeIntoView>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
