// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

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

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/game-ci/documentation/tree/main/docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/game-ci/documentation/tree/main/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'GameCI',
        logo: {
          alt: 'GameCI Logo',
          src: 'assets/images/game-ci-brand-logo-wordmark.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            label: 'Source code',
            position: 'right',
            items: [
              {
                label: "This Website",
                to: "https://github.com/game-ci/documentation"
              },
              {
                label: "Versioning Backend",
                to: "https://github.com/game-ci/versioning-backend"
              },
              {
                label: "Docker images for Unity",
                to: "https://github.com/game-ci/docker"
              },
              {
                label: "gitlab-ci unity3d example project",
                to: "https://gitlab.com/game-ci/unity3d-gitlab-ci-example"
              },
              {
                label: "Unity Actions",
                to: "https://github.com/game-ci/unity-actions"
              },
              {
                label: "Unity Request Activation",
                to: "https://github.com/game-ci/unity-request-activation-file"
              },
              {
                label: "Unity Activate",
                to: "https://github.com/game-ci/unity-activate"
              },
              {
                label: "Unity Test Runner",
                to: "https://github.com/game-ci/unity-test-runner"
              },
              {
                label: "Unity Builder",
                to: "https://github.com/game-ci/unity-builder"
              },
              {
                label: "Unity Return License",
                to: "https://github.com/game-ci/unity-return-license"
              },
              {
                label: "Steam Deploy",
                to: "https://github.com/game-ci/steam-deploy"
              }
            ]
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
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://game.ci/discord',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/game-ci/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://game.ci/" target="_blank">GameCI</a> 🎮. <br \>Built with Docusaurus 🦖 <br />Made with ❤ by open source contributors and powered by <a href="https://vercel.com" target="_blank" rel="noreferrer noopener">Vercel</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [
          'powershell',
          'toml',
          'docker',
          'ruby',
        ],
      },
    }),
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          // /docs/oldDoc -> /docs/newDoc
          {
            from: '/discord',
            to: 'https://discord.com/invite/WyPN5r9',
          },
        ],
      },
    ],
  ],
};

module.exports = config;
