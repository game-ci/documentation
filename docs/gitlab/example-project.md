# Example Project

## About

[The `unity3d-gitlab-ci-example` project](https://gitlab.com/gableroux/unity3d-gitlab-ci-example/) uses an updated version of the [Unity's Creator Kit: RPG free asset](https://assetstore.unity.com/packages/templates/tutorials/creator-kit-rpg-149309) which is not affiliated with this project at all. Feel free to explore it, dialogs are a bit different ;)

The example project is a Proof of Concept to **run unity3d tests and builds inside a CI** using **[game-ci/docker unity editor docker images](https://github.com/game-ci/docker)**. It currently creates builds for Windows, Linux, MacOS, webgl, Linux IL2cpp, Android and iOS Xcode project. The webgl build is published by the CI to [gitlab-pages](https://about.gitlab.com/features/pages/). **You can try the built project on [the published gitlab-pages](https://gableroux.gitlab.io/unity3d-gitlab-ci-example/)**.

## Git remotes

[The `unity3d-gitlab-ci-example` project](https://gitlab.com/gableroux/unity3d-gitlab-ci-example/) is hosted on multiple remotes to provide examples for [Gitlab-CI](https://about.gitlab.com/product/continuous-integration/), [Travis CI](https://travis-ci.org/) and [CircleCI](https://circleci.com/)

- [github](https://github.com/game-ci/unity3d-ci-example)
- [gitlab](https://gitlab.com/gableroux/unity3d-gitlab-ci-example)

## How to run scripts locally

You can execute the local scripts and specify the path of your Unity executable using `UNITY_EXECUTABLE`. You may try this in your project before you setup the whole CI so you confirm it works with your current unity version 👍.

## Test

[`./local_test.sh`](https://gitlab.com/gableroux/unity3d-gitlab-ci-example/-/blob/master/local_test.sh)

```bash
UNITY_EXECUTABLE="/Applications/Unity/Hub/Editor/2019.3.7f1/Unity.app/Contents/MacOS/Unity" \
  ./local_test.sh
```

## Build

[`./local_build.sh`](https://gitlab.com/gableroux/unity3d-gitlab-ci-example/-/blob/master/local_build.sh)

```bash
UNITY_EXECUTABLE="/Applications/Unity/Hub/Editor/2019.3.7f1/Unity.app/Contents/MacOS/Unity" \
  ./local_build.sh
```
