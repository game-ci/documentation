<p align="center">
  <img height=200px src="static/assets/images/logo-cropped.png">
<p>

<p align="center">
  <a href="https://discord.com/invite/WyPN5r9">
    <img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white"></a>
  <a href="https://opencollective.com/game-ci">
    <img src="https://img.shields.io/badge/OpenCollective-1F87FF?style=for-the-badge&logo=OpenCollective&logoColor=white"></a> <br>
  <img src="https://img.shields.io/github/license/game-ci/documentation.svg">
  <img src="https://img.shields.io/github/stars/game-ci/documentation.svg">
  <img src="https://img.shields.io/github/last-commit/game-ci/documentation.svg">
<p>

<br>

## Welcome

Welcome to the GameCI documentation repo! Here you will find the documentation assests for GameCI
and it's related open-source projects. The live documentation site availble at
<a  href="https://game.ci">game.ci</a>.

You may also view the markdown files directly at the following links:

- [Getting Started with GameCI](docs/02-getting-started)
- [Github Actions](docs/03-github)
- [Gitlab Pipelines](docs/05-gitlab)
- [CircleCi<](docs/11-circleci)
- [Docker](docs/08-docker)
- [Github Cloud Runner](docs/03-github-cloud-runner)
- [Troubleshooting](docs/09-troubleshooting)
- [FAQ](docs/10-faq)

## Building the Docs Site

Built with [Docusaurus 2.](https://docusaurus.io/)

This project has a hard dependancy on Node16. You will need to make sure that you have the proper
version of node installed to avoid errors.

- [Install Node16 on Ubuntu](https://joshtronic.com/2021/05/09/how-to-install-nodejs-16-on-ubuntu-2004-lts/)
- [Install Node16 using brew](https://apple.stackexchange.com/a/207883)

This project relies on yarn for package management. You will need to install yarn in order to build
and test the documentation site.

- [Official yarn installation docs.](https://classic.yarnpkg.com/lang/en/docs/install)

1.  Install project dependancies

    ```bash
    yarn install
    ```

2.  Start a local develpment server

    This command starts a local development server and opens up a browser window. Most changes are
    reflected live without having to restart the server.

    ```bash
    yarn start
    ```

3.  Create a build This command generates static content into the `build` directory and can be
    served using any static contents hosting service.

    ```bash
    yarn build
    ```

## Meet the Community

Join us on [Discord](https://game.ci/discord) and engage with the growing community of engineers,
artists, hobbyists, and professionals using GameCI to build, test, and publish their projects
everyday.

## Support the Team

GameCI is free for everyone forever. You can support the peolpe who make GameCI pssible on
[OpenCollective](https://opencollective.com/game-ci)

## Licence

This repository is [MIT](./LICENSE) licensed. This includes all contributions from the community.

## Sponsors

<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" href="https://vercel.com?utm_source=game-ci">
