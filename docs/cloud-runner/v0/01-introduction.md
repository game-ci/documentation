# Introduction

## Concept - What does cloud runner do

**Cloud Runner enables you to send your project to a "Cloud Provider" such as AWS or GCP. Using native cloud services (such as AWS Fargate) or Kubernetes.**

1. Larger options and more control over disk size, memory and CPU. You can build projects of almost any size.
2. Scale up to much larger numbers of builds easily and fully on demand.
3. Run custom jobs and extend the system for any workload.

Primarily Cloud Runner is useful for game development because it supports large projects. Cloud Runner has first class support for the Unity game engine.

However, you could easily extend the system to run other tools and workloads. Cloud Runner can even use your projects to run workloads.

## Do you need cloud runner or plain game-ci?

Game CI maintains a set of docker images that can be used to run workloads in many scenarios. Game CI also provides specific GitHub actions for running workflows on GitHub.

### Use Cases

#### Sending Builds to the cloud

You may want to take advantage of cloud resources for lots of reasons (scale, speed, cost, flexibility) or may want to start remote builds from the command line without slowing down your development machine. Cloud Runner can help you do this.

This may be a preference, more effecient or you may want to use systems that struggle to handle large game development projects (GitHub being a good example).

##### Large GitHub Projects

GitHub Actions by default run on build machines provided by GitHub. See information about the specifications of the build machines [https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners](https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners).

For Unity projects the available disk size is quite small. You may experience an error related to running out of disk space. You may also want to run the build on a server with more memory or processing resources.

##### "GitHub self-hosted runners" vs Game CI Cloud Runner

_GitHub users can consider: [GitHub self-hosted runners](https://docs.github.com/en/actions/hosting-your-own-runners/about-self-hosted-runners) and Cloud Runner. Both can enable you to build larger projects._

_Cloud Runner can run itself as an ephemeral self hosted job to minimize your github actions runner usage, with the drawback of some extra startup time at the start of your workflow. Cloud Runner is better if you don't have a server setup or don't want to manage or maintain your own build server._

_Self-hosted runners are best used when you already have a server available, running 24/7 that you can setup as a runner. And you're happy to maintain and keep that server available and running._

## Supported Cloud Provider Platforms

Cloud Runner overall release status: `preview`

```md
| Platform   | Release Status          |
| ---------- | ----------------------- |
| Kubernetes | ✔️ experimental release |
| AWS        | ✔️ preview release      |
| GCP        | ⚠ Considered            |
| Azure      | ⚠ Considered            |
```

experimental > preview > full release

\*_Usually the cluster needs to be up and running at all times, as starting up a cluster is slow._
_Use Google Cloud's Kubernetes Autopilot you can scale down to the free tier automatically while not in use._

## Cloud Runner Releases

All cloud runner releases are currently packaged and released with game-ci's unity-builder module:
[Game CI Releases - GitHub](https://github.com/game-ci/unity-builder/releases)

History up to latest open incoming changes for release can be found here:
[Cloud Runner PRs - GitHub](https://github.com/game-ci/unity-builder/pulls?q=is%3Apr+cloud+runner)

Link to release branches configuration section
