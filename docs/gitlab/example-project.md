## About the example project

[The `unity3d-gitlab-ci-example` project](https://gitlab.com/gableroux/unity3d-gitlab-ci-example/) uses an updated version of the [Unity's Creator Kit: RPG free asset](https://assetstore.unity.com/packages/templates/tutorials/creator-kit-rpg-149309) which is not affiliated with this project at all. Feel free to explore it, dialogs are a bit different ;)

The example project is a Proof of Concept to **run unity3d tests and builds inside a CI** using **[gableroux/unity3d docker image](https://hub.docker.com/r/gableroux/unity3d/)**. It currently creates builds for Windows, Linux, MacOS and webgl. The webgl build is published by the CI to [gitlab-pages](https://about.gitlab.com/features/pages/) and [github-pages](https://pages.github.com/)! **You can try the built project on [the published gitlab-pages](https://gableroux.gitlab.io/unity3d-gitlab-ci-example/)**.

_github-pages integration will be done in [GabLeRoux/unity3d-ci-example#4](https://github.com/GabLeRoux/unity3d-ci-example/issues/4)._

## Git remotes

[The `unity3d-gitlab-ci-example` project](https://gitlab.com/gableroux/unity3d-gitlab-ci-example/) is hosted on multiple remotes to provide examples for [Gitlab-CI](https://about.gitlab.com/product/continuous-integration/), [Travis](https://travis-ci.org/) and [CircleCI](https://circleci.com/)

- [github](https://github.com/gableroux/unity3d-ci-example)
- [gitlab](https://gitlab.com/gableroux/unity3d-gitlab-ci-example)
