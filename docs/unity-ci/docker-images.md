# Unity CI Docker images

All projects in Unity CI use docker images
([unity-ci/editor](https://github.com/Unity-CI/docker/))
which are specialised for CI and command-line use.

They are established empirically by the community
and come forth from the
[gableroux/unity3d](https://gitlab.com/gableroux/unity3d/)
project.

Images for newly released editor versions are added almost immediately (automatically, allow up to a few hours).

## Features

- All editor versions
- Git + LFS
- ECS compatible
- Cross-version license activations

## Limitations

#### Old versions of unity

There will be limited support for older versions of unity.

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
