# GameCI Docker images for Unity

All projects for Unity in GameCI use
([game-ci/docker](https://github.com/game-ci/docker/))
docker images which are specialised for CI and command-line use. These images are published on
[docker hub as `unityci/editor`](https://hub.docker.com/r/unityci/editor/tags?page=1&ordering=last_updated).

They are established empirically by the community and come forth from the
[gableroux/unity3d](https://gitlab.com/gableroux/unity3d/)
project. It was previously published on
[docker hub as `gableroux/unity3d`](https://hub.docker.com/r/gableroux/unity3d/).
**There won't be any new versions releases for `gableroux/unity3d` as it is now deprecated in favor of 
([game-ci/docker](https://github.com/game-ci/docker/)).**

Images for newly released Unity editor versions are added almost immediately to 
([game-ci/docker](https://github.com/game-ci/docker/))
. This process is automated, please allow a few hours.

## Features

- All editor versions
- Git + LFS
- ECS compatible
- Cross-version license activations

## Limitations

#### Older versions of unity

There will be limited support for older versions of Unity.

This is because for older versions, many factors regarding the preparation of stable docker images can not be determined programmatically.

Due to that:

- Android builds for 2019.2 or lower will require you to roll your own images. This process will require you to manually specify NDK/SDK locations.

#### Limited IL2CPP support

Currently images are only available with Ubuntu as the base operating system.

Some platforms require their respective operating systems in order to generate IL2CPP builds.

That's why:

- IL2CPP for Windows is not supported
- IL2CPP for MacOS is not supported

We are looking to include both Windows and MacOS as base images "in the future", which is mostly dependent on contributions from the community.
