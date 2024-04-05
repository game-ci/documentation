import React from 'react';
import Timeline from '@site/src/components/pages/about-us/section/our-story-section/timeline/timeline';
import TimelineItem from '@site/src/components/pages/about-us/section/our-story-section/timeline/timeline-item';
import FadeIntoView from '@site/src/components/molecules/animations/fade-into-view';
import { david, gabLeRoux, webber, fisher } from '../the-team-section/data/team-info';

const OurStory = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 px-4">
      <div className="flex lg:flex-row flex-col items-start lg:space-x-8">
        <div className="w-full lg:w-7/12 p-5 bg-theme-highlight rounded-md">
          <FadeIntoView>
            <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7">Our Story</h2>
          </FadeIntoView>

          <FadeIntoView>
            <p>
              We are a community of enthusiastic developers that bundle their time and skills around
              a shared common goal: to build tools for automatically building, testing and deploying
              their projects.
            </p>
          </FadeIntoView>
        </div>
        <div className="lg:pt-16 xl:pt-0 w-full lg:w-5/12 lg:mt-0 sm:mt-10 mt-8">
          <Timeline>
            <TimelineItem
              title="Founded (2019)"
              subTitle={
                <>
                  GameCI was founded by{' '}
                  <a href={webber.social.website} target="_blank" rel="noreferrer">
                    {webber.nick}
                  </a>{' '}
                  and{' '}
                  <a href={gabLeRoux.social.website} target="_blank" rel="noreferrer">
                    {gabLeRoux.nick}
                  </a>
                  .
                </>
              }
            />

            <TimelineItem
              right
              title="Core Maintainers (2020)"
              subTitle={
                <>
                  <a href={david.social.website} target="_blank" rel="noreferrer">
                    {david.nick}
                  </a>{' '}
                  and{' '}
                  <a href={fisher.social.github} target="_blank" rel="noreferrer">
                    {fisher.nick}
                  </a>{' '}
                  joined as Core Maintainers.
                </>
              }
            />

            <TimelineItem
              title="1000+ teams (2021)"
              subTitle="Over 1000 teams are using GameCI, many of which are also contributing their ideas."
            />

            <TimelineItem
              right
              title="Roadmap (future)"
              subTitle={
                <>
                  ... we&apos;re working to become CI-platform agnostic. See our{' '}
                  <a
                    href="https://github.com/orgs/game-ci/projects/4"
                    target="_blank"
                    rel="noreferrer"
                  >
                    roadmap
                  </a>{' '}
                  for details.
                </>
              }
            />
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
