import { getUrlWithUtmParameters } from '@site/src/core/url';
import webberPicture from './pictures/webber.webp';
import gabLeRouxPicture from './pictures/gableroux.webp';
import davidPicture from './pictures/david.webp';
import fisherPicture from './pictures/fisher.webp';
import { Continent } from './continent';

export const webber = {
  nick: 'Webber',
  name: 'Dick Webbink',
  title: 'Founder',
  image: webberPicture,
  continent: Continent.Europe,
  social: {
    website: getUrlWithUtmParameters('https://takken.io'),
    linkedIn: 'https://www.linkedin.com/in/webbertakken/',
    github: 'https://github.com/webbertakken',
  },
};

export const gabLeRoux = {
  nick: 'GabLeRoux',
  name: 'Gabriel Le Breton',
  title: 'Founder',
  image: gabLeRouxPicture,
  continent: Continent.Americas,
  social: {
    website: getUrlWithUtmParameters('https://gableroux.com'),
    linkedIn: 'https://www.linkedin.com/in/gableroux/',
    twitter: 'https://twitter.com/gableroux',
    github: 'https://github.com/gableroux',
  },
};

export const david = {
  nick: 'David',
  name: 'David Finol',
  title: 'Core Maintainer',
  image: davidPicture,
  continent: Continent.Americas,
  social: {
    website: getUrlWithUtmParameters('https://davidmfinol.com'),
    linkedIn: 'https://www.linkedin.com/in/davidmfinol/',
    github: 'https://github.com/davidmfinol',
  },
};

export const fisher = {
  nick: 'Fisher',
  name: 'Markus Dugdale',
  title: 'Core Maintainer',
  image: fisherPicture,
  continent: Continent.Europe,
  social: {
    linkedIn: 'https://www.linkedin.com/in/markus-dugdale-136112136/',
    github: 'https://github.com/frostebite',
  },
};

export const members = [webber, gabLeRoux, david, fisher];
