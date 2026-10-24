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

Welcome to the GameCI documentation repo! Here you will find the documentation assets for GameCI and
it's related open-source projects. The live documentation site available at
<a href="https://game.ci">game.ci</a>.

You may also view the markdown files directly at the following links:

- [Getting Started with GameCI](docs/02-getting-started)
- [GitHub Actions](docs/03-github)
- [GitLab Pipelines](docs/05-gitlab)
- [CircleCi](docs/11-circleci)
- [Docker](docs/08-docker)
- [GitHub Orchestrator](docs/03-github-orchestrator)
- [Troubleshooting](docs/09-troubleshooting)
- [FAQ](docs/10-faq)

## Building the Docs Site

Built with [Docusaurus 2](https://docusaurus.io/).

This project uses Node 26 and yarn 4, both pinned in `mise.toml`. With
[mise](https://mise.jdx.dev/getting-started.html) installed, `mise install` in the repository root
installs the exact versions.

1.  Install project dependencies

    ```bash
    yarn install
    ```

2.  Start a local development server

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

GameCI is free for everyone forever. You can support the people who make GameCI possible on
[OpenCollective](https://opencollective.com/game-ci)

## License

This repository is [MIT](./LICENSE) licensed. This includes all contributions from the community.
