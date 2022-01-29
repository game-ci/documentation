# GameCI Docker images for Unity

All projects for Unity in GameCI use
[`game-ci/docker`](https://github.com/game-ci/docker/)
docker images which are specialised for CI and command-line use. These images are published on
[docker hub as `unityci/editor`](https://hub.docker.com/r/unityci/editor/tags?page=1&ordering=last_updated).

They are established empirically by the community and come forth from the
[`gableroux/unity3d`](https://gitlab.com/gableroux/unity3d/)
project. It was previously published on
[docker hub as `gableroux/unity3d`](https://hub.docker.com/r/gableroux/unity3d/).
**There won't be any new versions releases for `gableroux/unity3d` as it is now deprecated in favor of
[`game-ci/docker`](https://github.com/game-ci/docker/).**

Images for newly released Unity editor versions are added almost immediately to
[`game-ci/docker`](https://github.com/game-ci/docker/)
. This process is automated, please allow a few hours.

## Features

- All editor versions
- Git + LFS
- ECS compatible
- Cross-version license activations

## Limitations

#### Older versions of Unity

There will be limited support for older versions of Unity.

This is because for older versions, many factors regarding the preparation of stable docker images can not be determined programmatically.

Due to that:

- Android builds for 2019.2 or lower will require you to roll your own images. This process will require you to manually specify NDK/SDK locations.

#### Limited IL2CPP support

Currently images are only available with Ubuntu or Windows as the base operating system.

Some platforms require their respective operating systems in order to generate IL2CPP builds.

That's why:

- IL2CPP for MacOS is not supported

We are looking to include MacOS as a base image "in the future", which is mostly dependent on contributions from the community.

If you are looking to generate IL2CPP builds for MacOS, you can do so via [Github Actions](/docs/github/getting-started#il2cpp-example) without a docker container.

#### Concurrent builds on Windows and MacOS

Windows and MacOS will each consume an additional license seat if they are needed for a target platform. This is not an issue for free licenses, but for paid licenses, you will need to be mindful of starting too many parallel jobs as activation will fail. Below are some examples of number of consumed seats for a build:

You are building for 1 target on a Linux based platform, 1 target for a Windows based platform, and 1 target for a MacOS based platform:

- Number of seats consumed for the Linux build instances: 1
- Number of seats consumed for the Windows build instances: 1
- Number of seats consumed for the MacOS build instances: 1

Total concurrently consumed seats: **3**

You are building for 3 targets on a Linux based platform, 3 targets for a Windows based platform, and 1 target for a MacOS based platform:

- Number of seats consumed for the Linux build instances: 1
- Number of seats consumed for the Windows build instances: 1
- Number of seats consumed for the MacOS build instances: 1

Total concurrently consumed seats: **3**

Notice it doesn't matter how many targets you build on each platform, the cost is always one concurrent license seat. This does not preclude you from doing builds sequentially, for example if you only have 1 seat available for your CI pipeline, you could build all Linux targets first, then build all Windows targets, and finally build the 1 MacOS target after that. More license seats would allow you to parallelize more platforms. In this example, having 3 seats means being able to build all targets simultaneously.
