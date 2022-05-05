import React from 'react';

import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import ThePerksSection from "@site/src/components/pages/home/section/the-perks-section";
import OpeningSection from "@site/src/components/pages/home/section/opening-section";

function HomepageHeader() {
  let buttonClasses = "py-4 px-6 mx-3 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"

  return (

    <div className="bg-white dark:bg-gray-800 ">
      <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
          <span className="block">Quickly get started</span>
          <span>My Unity project is hosted on</span>
        </h2>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 inline-flex rounded-md shadow">
            <Link to="/docs/github/getting-started" className={buttonClasses}>
              github
            </Link>
            <Link to="/docs/gitlab/getting-started" className={buttonClasses}>
              gitlab
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="The fastest and easiest way to automatically test and build your game projects">
      <main>
        <OpeningSection/>
        <HomepageHeader/>
        <ThePerksSection/>
      </main>
    </Layout>
  );
}
