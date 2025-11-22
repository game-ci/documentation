import Link from '@docusaurus/Link';
import React, { SVGProps, ComponentType } from 'react';
import GitHubLogo from '@site/static/assets/images/icons/github.svg';
import GitLabLogo from '@site/static/assets/images/icons/gitlab.svg';
import CircleCiLogo from '@site/static/assets/images/icons/circleci.svg';

const list = [
  {
    name: 'github',
    logo: GitHubLogo,
    url: '/docs/github/getting-started',
  },
  {
    name: 'gitlab',
    logo: GitLabLogo,
    url: '/docs/gitlab/getting-started',
  },
  {
    name: 'circleci',
    logo: CircleCiLogo,
    url: '/docs/circleci/getting-started',
  },
];

type LinkButtonProps = {
  url: string;
  logo: ComponentType<SVGProps<SVGSVGElement>>;
};

const LinkButton = ({ url, logo: Logo }: LinkButtonProps) => (
  <Link
    to={url}
    className="group flex items-center justify-center border-gray-600 border-solid rounded-sm border-2 px-6 py-3 w-[180px] h-[70px] transition-all duration-200 hover:scale-110 hover:bg-gray-600"
  >
    <Logo className="fill-brand-text-light dark:fill-brand-text-dark group-hover:fill-white" />
  </Link>
);

const GettingStarted = () => {
  return (
    <>
      <h2 className="text-center font-bold mb-4 text-2xl md:text-4xl text-primary-light dark:text-primary-dark">
        Get Started Using:
      </h2>

      <ul className="list-none px-0 w-full m-0 md:mt-6 inline-flex gap-5 md:gap-10 flex-col md:flex-row items-center justify-center">
        {list.map(({ url, name, logo }) => (
          <li key={name}>
            <LinkButton url={url} logo={logo} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default GettingStarted;
