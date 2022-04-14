# What does cloud runner do

## What is it?

**Cloud Runner enables you to send your project to a "Cloud Provider" such as AWS or GCP. Using native cloud services from the provider where possible or Kubernetes as a framework.**

1. Larger options and more control over disk size, memory and CPU. You can build projects of almost any size.
2. Scale up to much larger numbers of builds easily and fully on demand.

GitHub Actions by default run on build machines provided by GitHub. You can see info about the specifications of the build machines [here](https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners).

For Unity projects the available disk size is quite small. You may experience an error related to running out of disk space. You may also want to run the build on a server with more memory or processing resources.

### Supported Cloud Provider Platforms

_This is billed on demand and costs nothing unless you store the builds._

✔️ **AWS** is supported.

⚠ **GCP** planned, Google Cloud Run needs to release support for NFS.

⚠ **Azure** planned, the needed technologies are already supported.

✔️ All Kubernetes providers that support persistent volumes are supported.
(_Usually the cluster needs to be up and running at all times, as starting up a cluster is slow. Using Google Cloud's Kubernetes Autopilot you can scale down to the free tier automatically while not in use._)

### When to use GitHub self-hosted runner or remote builder?

[GitHub self-hosted runners](https://docs.github.com/en/actions/hosting-your-own-runners/about-self-hosted-runners) and Remote Builder can enable you to build larger projects.

Self-hosted runners are best used when you already have a server available, running 24/7 that you can setup as a runner. And you're happy to maintain and keep that server available and running.

Remote Builder is better if you don't have a server setup or don't want to manage or maintain your own build server.

## Releases

## Features

## Contributions
