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

interface Props {
  className?: string;
  nick?: string;
  name: string;
  title: string;
  image: string;
  continent: 'Africa' | 'Americas' | 'Asia' | 'Europe';
  social: {
    website?: string;
    twitter?: string;
    linkedIn?: string;
    github?: string;
  };
}

const Profile = ({
  className,
  nick,
  name,
  image,
  title,
  continent,
  social,
}: Props): JSX.Element => {
  return (
    <div
      className={cx(
        'w-64 xl:w-72 py-10 space-y-8 bg-white flex justify-center items-center flex-col shadow hover:shadow-xl transition duration-500 ease-in-out border rounded-lg border-gray-100 bg-theme-highlight',
        className,
      )}
    >
      <FadeIntoView delay={100}>
        <img className="w-20 xl:w-32 2xl:w-48 rounded-full" src={image} alt={name} />
      </FadeIntoView>

      <FadeIntoView delay={200}>
        <div className="flex flex-col jusitfy-center items-center space-y-2">
          {nick && (
            <h3 className="text-lg xl:text-xl font-medium xl:font-bold leading-none xl:leading-5 text-center">
              {nick}
            </h3>
          )}
          <p className="text-lg leading-none text-center">{name}</p>
          <p className="text-sm leading-none text-center text-softer">{title}</p>
        </div>
      </FadeIntoView>

      <div className="flex flex-row space-x-2">
        {social.website && (
          <FadeIntoView delay={100}>
            <a href={social.website} target="_blank" rel="noreferrer">
              {continent === 'Europe' && <FaGlobeEurope />}
              {continent === 'Africa' && <FaGlobeAfrica />}
              {continent === 'Americas' && <FaGlobeAmericas />}
              {continent === 'Asia' && <FaGlobeAsia />}
            </a>
          </FadeIntoView>
        )}

        {social.twitter && (
          <FadeIntoView delay={200}>
            <a href={social.twitter} target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
          </FadeIntoView>
        )}

        {social.linkedIn && (
          <FadeIntoView delay={300}>
            <a href={social.linkedIn} target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </FadeIntoView>
        )}

        {social.github && (
          <FadeIntoView delay={400}>
            <a href={social.github} target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </FadeIntoView>
        )}
      </div>
    </div>
  );
};

Profile.defaultProps = {
  nick: null,
  className: '',
};

export default Profile;
