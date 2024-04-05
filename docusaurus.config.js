/* eslint-disable unicorn/no-array-push-push,global-require,@typescript-eslint/no-unused-vars */
// noinspection JSUnusedLocalSymbols,JSUnusedGlobalSymbols
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('./src/dracula-custom-code-theme');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GameCI',
  tagline: 'The fastest and easiest way to automatically test and build your game projects',
  url: 'https://game.ci',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'icons/favicon.ico',
  organizationName: 'game-ci', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.

  plugins: [
    ['docusaurus-plugin-sass', {}],
    [
      'docusaurus-gtm-plugin',
      {
        id: 'GTM-5CRN6W9',
        enabled: true,
      },
    ],
    async function tailwindcss(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          lastVersion: 'current',
          versions: {
            current: {
              label: 'v4 (current)',
            },
            3: {
              label: 'v3',
            },
            2: {
              label: 'v2',
            },
            1: {
              label: 'v1',
            },
          },
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/game-ci/documentation/tree/main/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl: 'https://github.com/game-ci/documentation/tree/main/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'E57FOT37U9',

        // Public API key: it is safe to commit it
        apiKey: '1df02f65283b9c1c95637a3a0d8a024a',

        indexName: 'game',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        // ... other Algolia params
      },
      navbar: {
        title: 'GameCI',
        logo: {
          alt: 'GameCI Logo',
          src: 'assets/images/game-ci-brand-logo-wordmark-light.svg',
          srcDark: 'assets/images/game-ci-brand-logo-wordmark.svg',
          width: 32,
          height: 32,
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Docs',
          },
          {
            label: 'FAQ',
            to: '/docs/faq',
          },
          {
            label: 'Merch',
            href: 'https://www.redbubble.com/shop/ap/125854959',
          },
          {
            label: 'About us',
            to: 'about',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'docsVersionDropdown',
            position: 'right',
            // dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
            // dropdownActiveClassDisabled: true,
          },
          {
            label: 'Source code',
            position: 'right',
            items: [
              {
                label: 'This Website',
                to: 'https://github.com/game-ci/documentation',
              },
              {
                label: 'Versioning Backend',
                to: 'https://github.com/game-ci/versioning-backend',
              },
              {
                label: 'Docker images for Unity',
                to: 'https://github.com/game-ci/docker',
              },
              {
                label: 'gitlab-ci unity3d example project',
                to: 'https://gitlab.com/game-ci/unity3d-gitlab-ci-example',
              },
              {
                label: 'Unity Actions',
                to: 'https://github.com/game-ci/unity-actions',
              },
              {
                label: 'Unity Request Activation',
                to: 'https://github.com/game-ci/unity-request-activation-file',
              },
              {
                label: 'Unity Activate',
                to: 'https://github.com/game-ci/unity-activate',
              },
              {
                label: 'Unity Test Runner',
                to: 'https://github.com/game-ci/unity-test-runner',
              },
              {
                label: 'Unity Builder',
                to: 'https://github.com/game-ci/unity-builder',
              },
              {
                label: 'Unity Return License',
                to: 'https://github.com/game-ci/unity-return-license',
              },
              {
                label: 'CircleCI Orb',
                to: 'https://github.com/game-ci/unity-orb',
              },
              {
                label: 'Steam Deploy',
                to: 'https://github.com/game-ci/steam-deploy',
              },
            ],
          },
          {
            href: 'https://github.com/game-ci/documentation',
            label: 'GitHub',
            position: 'right',
          },
          {
            to: 'https://game.ci/discord',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Welcome',
                to: '/docs/',
              },
              {
                label: 'Getting Started (GitHub)',
                to: '/docs/github/getting-started',
              },
              {
                label: 'Getting Started (GitLab)',
                to: '/docs/gitlab/getting-started',
              },
              {
                label: 'Getting Started (CircleCI)',
                to: '/docs/circleci/getting-started',
              },
              {
                label: 'FAQ',
                to: '/docs/faq',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'About us',
                to: 'about',
              },
              {
                label: 'Discord',
                href: 'https://game.ci/discord',
              },
              {
                label: 'Merchandise',
                href: 'https://www.redbubble.com/shop/ap/125854959',
              },
            ],
          },

          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GameCI on GitHub',
                href: 'https://github.com/game-ci/',
              },
              {
                label: 'GameCI on Gitlab',
                href: 'https://gitlab.com/game-ci',
              },
              {
                label: 'GameCI on OpenCollective',
                href: 'https://opencollective.com/game-ci',
              },
            ],
          },
        ],
        copyright: `<p>
          Made with ❤ by open source contributors using
          <a href="https://docusaurus.io?utm_source=game-ci" target="_blank" rel="noreferrer noopener" style="text-decoration: none;">
            <svg title=""Docusaurus width="1em" viewBox="0 0 256 217.631"><g transform="matrix(1.312821 0 0 1.312821 -3.938461 -22.614974)" fill-rule="evenodd"><path d="M99 52h84v34H99z" fill="#fff"/><g fill="#3ecc5f"><path d="M23 163c-7.398 0-13.843-4.027-17.303-10C3.992 155.944 3 159.353 3 163c0 11.046 8.954 20 20 20h20v-20H23z"/><path d="M112.98 57.376L183 53V43c0-11.046-8.955-20-20-20H73l-2.5-4.33a2.89 2.89 0 0 0-5 0L63 23l-2.5-4.33a2.89 2.89 0 0 0-5 0L53 23l-2.5-4.33a2.89 2.89 0 0 0-5 0L43 23c-.022 0-.043.003-.065.003l-4.142-4.14a2.89 2.89 0 0 0-4.829 1.294l-1.368 5.104-5.193-1.392a2.89 2.89 0 0 0-3.535 3.536l1.4 5.193-5.103 1.367a2.89 2.89 0 0 0-1.295 4.83L23 42.937c0 .02-.002.042-.002.064l-4.33 2.5a2.89 2.89 0 0 0 0 5L23 53l-4.33 2.5a2.89 2.89 0 0 0 0 5L23 63l-4.33 2.5a2.89 2.89 0 0 0 0 5L23 73l-4.33 2.5a2.89 2.89 0 0 0 0 5L23 83l-4.33 2.5a2.89 2.89 0 0 0 0 5L23 93l-4.33 2.5a2.89 2.89 0 0 0 0 5L23 103l-4.33 2.5a2.89 2.89 0 0 0 0 5L23 113l-4.33 2.5a2.89 2.89 0 0 0 0 5L23 123l-4.33 2.5a2.89 2.89 0 0 0 0 5L23 133l-4.33 2.5a2.89 2.89 0 0 0 0 5L23 143l-4.33 2.5a2.89 2.89 0 0 0 0 5L23 153l-4.33 2.5a2.89 2.89 0 0 0 0 5L23 163c0 11.046 8.954 20 20 20h120c11.045 0 20-8.954 20-20V83l-70.02-4.376C107.37 78.273 103 73.62 103 68s4.37-10.273 9.98-10.624"/><path d="M143 183h30v-40h-30z"/></g><path d="M193 158c-.22 0-.428.037-.64.064l-.116-.45c1.806-.754 3.075-2.534 3.075-4.613a5 5 0 0 0-5-5 4.96 4.96 0 0 0-3.016 1.036l-.335-.336c.627-.836 1-1.862 1-2.987a5 5 0 0 0-9.599-1.959l-.445-.115c.027-.2.064-.42.064-.64a5 5 0 1 0-10 0c0 .22.037.428.064.64l-.445.115a5 5 0 0 0-9.599 1.959c0 1.125.384 2.15 1 2.987A19.93 19.93 0 0 0 153 163c0 11.046 8.954 20 20 20 9.34 0 17.16-6.4 19.36-15.064.2.027.42.064.64.064a5 5 0 1 0 0-10" fill="#44d860"/><path d="M153 123h30v-20h-30z" fill="#3ecc5f"/><use xlink:href="#A" fill="#44d860"/><path d="M63 55.5a2.5 2.5 0 0 1-2.5-2.5 7.51 7.51 0 0 0-7.5-7.5 7.51 7.51 0 0 0-7.5 7.5 2.5 2.5 0 1 1-5 0c0-6.893 5.607-12.5 12.5-12.5S65.5 46.107 65.5 53a2.5 2.5 0 0 1-2.5 2.5"/><path d="M103 183h60c11.046 0 20-8.954 20-20V93h-60c-11.046 0-20 8.954-20 20v70z" fill="#ffff50"/><use xlink:href="#B"/><use xlink:href="#B" y="20"/><use xlink:href="#B" y="40"/><use xlink:href="#B" y="-9.814"/><use xlink:href="#B" y="10"/><use xlink:href="#B" y="30"/><path d="M183 61.6c-.012 0-.022-.006-.034-.005-3.1.105-4.552 3.196-5.842 5.923-1.346 2.85-2.387 4.703-4.093 4.647-1.9-.068-2.97-2.202-4.113-4.46-1.314-2.593-2.814-5.535-5.963-5.425-3.046.104-4.513 2.794-5.807 5.167-1.377 2.528-2.314 4.065-4.12 3.994-1.927-.07-2.95-1.805-4.136-3.813-1.32-2.236-2.848-4.75-5.936-4.664-2.994.103-4.465 2.385-5.763 4.4-1.373 2.13-2.335 3.428-4.165 3.35-1.973-.07-2.992-1.5-4.17-3.177-1.324-1.873-2.816-3.993-5.895-3.9-2.928.1-4.4 1.97-5.696 3.618-1.232 1.564-2.194 2.802-4.23 2.724a1 1 0 1 0-.072 2c3.017.1 4.545-1.8 5.872-3.487 1.177-1.496 2.193-2.787 4.193-2.855 1.926-.082 2.83 1.115 4.195 3.045 1.297 1.834 2.77 3.914 5.73 4.02 3.103.104 4.596-2.215 5.918-4.267 1.182-1.834 2.202-3.417 4.15-3.484 1.793-.067 2.77 1.35 4.145 3.68 1.297 2.197 2.766 4.686 5.787 4.796 3.125.108 4.634-2.62 5.95-5.035 1.14-2.088 2.214-4.06 4.12-4.126 1.793-.042 2.728 1.595 4.1 4.33 1.292 2.553 2.757 5.445 5.825 5.556l.17.003c3.064 0 4.518-3.075 5.805-5.794 1.14-2.4 2.217-4.68 4.067-4.773v-2z"/><path d="M83 183h40v-40H83z" fill="#3ecc5f"/><path d="M143 158c-.22 0-.428.037-.64.064l-.116-.45c1.806-.754 3.075-2.534 3.075-4.613a5 5 0 0 0-5-5 4.96 4.96 0 0 0-3.016 1.036l-.335-.336c.627-.836 1-1.862 1-2.987a5 5 0 0 0-9.599-1.959l-.445-.115c.027-.2.064-.42.064-.64a5 5 0 1 0-10 0c0 .22.037.428.064.64l-.445.115a5 5 0 0 0-9.599 1.959c0 1.125.384 2.15 1 2.987A19.93 19.93 0 0 0 103 163c0 11.046 8.954 20 20 20 9.34 0 17.16-6.4 19.36-15.064.2.027.42.064.64.064a5 5 0 1 0 0-10" fill="#44d860"/><path d="M83 123h40v-20H83z" fill="#3ecc5f"/><use xlink:href="#A" x="-60" fill="#44d860"/><path d="M143 41.75a2.92 2.92 0 0 1-.5-.05 2.52 2.52 0 0 1-.47-.14c-.15-.06-.3-.14-.43-.23l-.38-.3c-.1-.12-.22-.24-.3-.38a2.63 2.63 0 0 1-.231-.43 2.62 2.62 0 0 1-.139-.47c-.03-.16-.05-.33-.05-.5s.02-.33.05-.5.08-.3.14-.47a2.63 2.63 0 0 1 .231-.43l.3-.38c.12-.1.25-.22.38-.3a1.99 1.99 0 0 1 .43-.23 2.52 2.52 0 0 1 .47-.14c.32-.07.65-.07.98 0 .16.03.32.08.47.14s.3.14.43.23l.38.3a3.68 3.68 0 0 1 .31.38 2.55 2.55 0 0 1 .23.43c.06.16.1.3.14.47a2.81 2.81 0 0 1 .05.49 2.55 2.55 0 0 1-.73 1.77c-.12.1-.25.22-.38.3a1.99 1.99 0 0 1-.43.23c-.15.06-.3.1-.47.14a2.07 2.07 0 0 1-.5.05M163 40.5a2.55 2.55 0 0 1-1.77-.73 3.68 3.68 0 0 1-.31-.38 2.63 2.63 0 0 1-.231-.43 2.62 2.62 0 0 1-.139-.47c-.03-.16-.05-.33-.05-.5a2.55 2.55 0 0 1 .73-1.77c.12-.1.25-.22.38-.3a1.99 1.99 0 0 1 .43-.23 2.52 2.52 0 0 1 .47-.14c.32-.07.66-.07.98 0 .16.03.32.08.47.14s.3.14.43.23l.38.3a2.53 2.53 0 0 1 .73 1.77 2.81 2.81 0 0 1-.05.49c-.03.16-.08.32-.14.47a3.55 3.55 0 0 1-.23.43 3.68 3.68 0 0 1-.31.38c-.12.1-.25.22-.38.3a1.99 1.99 0 0 1-.43.23c-.15.06-.3.1-.47.14a2.07 2.07 0 0 1-.5.05"/></g><defs><path id="A" d="M193 115.5a2.5 2.5 0 1 0 0-5c-.1 0-.214.02-.32.032l-.058-.225a2.5 2.5 0 0 0-.963-4.807 2.47 2.47 0 0 0-1.508.518l-.168-.168a2.47 2.47 0 0 0 .506-1.494 2.5 2.5 0 0 0-4.8-.979c-.857-.24-1.756-.377-2.7-.377-5.522 0-10 4.478-10 10s4.478 10 10 10c.934 0 1.833-.138 2.7-.377a2.5 2.5 0 0 0 4.8-.979c0-.563-.192-1.077-.506-1.494.057-.055.113-.1.168-.168a2.48 2.48 0 0 0 1.508.518 2.5 2.5 0 0 0 .963-4.807l.058-.225c.105.013.2.032.32.032"/><path id="B" d="M168.02 124h-50.04a1 1 0 1 1 0-2h50.04a1 1 0 1 1 0 2"/></defs></svg>
          </a>
          and hosted by
          <a href="https://firebase.com?utm_source=game-ci" target="_blank" rel="noreferrer noopener">
            <svg title="Firebase" style="margin: 0 0 -2px;" stroke="#F57C00" fill="#F57C00" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M93.19 329.38l47.45-304.07c1.64-10.37 15.55-12.82 20.46-3.55l51 95.45zM432 400l-46.74-276.79a11 11 0 00-18.54-6L80 400l159.36 91.91a33.18 33.18 0 0031.91 0zM302.36 158.93l-36.54-69.54a10.86 10.86 0 00-19.36 0L85.83 375.74z"></path></svg>
          </a>
        </p>
        <p>
          Copyright © ${new Date().getFullYear()}
          <a href="https://game.ci/" target="_blank">GameCI</a> 🎮</p>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell', 'toml', 'docker', 'ruby'],
      },
    }),
};

module.exports = config;
