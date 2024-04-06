import React from 'react';
import cx from 'classnames';
import {
  FaGithub,
  FaGlobeAfrica,
  FaGlobeAmericas,
  FaGlobeAsia,
  FaGlobeEurope,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';
import FadeIntoView from '@site/src/components/molecules/animations/fade-into-view';
import { Continent } from './data/continent';

interface Props {
  className?: string;
  nick?: string;
  name: string;
  title: string;
  image: string;
  continent: Continent;
  social: {
    website?: string;
    twitter?: string;
    linkedIn?: string;
    github?: string;
  };
}

const ICON_SIZE = 20;

const getWebsiteIcon = (continent: Continent) => {
  const Components = {
    FaGlobeEurope,
    FaGlobeAmericas,
    FaGlobeAfrica,
    FaGlobeAsia,
  };
  const Icon = Components[`FaGlobe${continent}`];
  return <Icon size={ICON_SIZE} className="block" />;
};

const Profile = ({
  className,
  nick,
  name,
  image,
  title,
  continent,
  social,
}: Props): React.JSX.Element => {
  const displayName = nick || name;
  return (
    <div
      className={cx(
        'w-full py-10 space-y-4 md:space-y-8 bg-background-highlight-light dark:bg-background-highlight-dark flex justify-center items-center flex-col shadow hover:shadow-xl transition duration-500 ease-in-out border rounded-lg border-gray-100',
        className,
      )}
    >
      <FadeIntoView delay={100}>
        <img className="w-24 md:w-36 2xl:w-48 rounded-full" src={image} alt={name} />
      </FadeIntoView>

      <FadeIntoView delay={200}>
        <div className="flex flex-col jusitfy-center items-center space-y-2">
          {nick && (
            <h3 className="text-lg xl:text-xl font-medium xl:font-bold leading-none xl:leading-5 text-center">
              {nick}
            </h3>
          )}
          <p className="text-lg leading-none text-center">{name}</p>
          <p className="text-sm leading-none text-center opacity-75">{title}</p>
        </div>
      </FadeIntoView>

      <div className="flex gap-2">
        {social.website && (
          <FadeIntoView delay={100}>
            <a
              href={social.website}
              target="_blank"
              rel="noreferrer"
              title={`${displayName}'s website`}
            >
              {getWebsiteIcon(continent)}
            </a>
          </FadeIntoView>
        )}

        {social.twitter && (
          <FadeIntoView delay={200}>
            <a
              href={social.twitter}
              target="_blank"
              rel="noreferrer"
              title={`${displayName}'s Twitter`}
            >
              <FaTwitter size={ICON_SIZE} className="block" />
            </a>
          </FadeIntoView>
        )}

        {social.linkedIn && (
          <FadeIntoView delay={300}>
            <a
              href={social.linkedIn}
              target="_blank"
              rel="noreferrer"
              title={`${displayName}'s Linkedin`}
            >
              <FaLinkedin size={ICON_SIZE} className="block" />
            </a>
          </FadeIntoView>
        )}

        {social.github && (
          <FadeIntoView delay={400}>
            <a
              href={social.github}
              target="_blank"
              rel="noreferrer"
              title={`${displayName}'s Github`}
            >
              <FaGithub size={ICON_SIZE} className="block" />
            </a>
          </FadeIntoView>
        )}
      </div>
    </div>
  );
};

Profile.defaultProps = {
  nick: '',
  className: '',
};

export default Profile;
