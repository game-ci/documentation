# Introduction
## Concept - What does cloud runner do

**Cloud Runner enables you to send your project to a "Cloud Provider" such as AWS or GCP. Using native cloud services (such as AWS Fargate) or Kubernetes.**

The benefits include: 
1. Larger options and more control over disk size, memory and CPU. You can build projects of almost any size.
2. Scale up to much larger numbers of builds easily and fully on demand.
3. Run custom jobs and extend the system for any workload.

Primarily Cloud Runner is useful for game development because it supports large projects. Cloud Runner has first class support for the Unity game engine.

However, you could easily extend the system to run other tools and workloads. Cloud Runner can even use your projects to run workloads.


## Supported Cloud Runner Platforms
Cloud Runner is "in active development" ⚠️🔨

Minor changes, 💬suggestions and 🐛bugs are tracked as GitHub issues:
[Game CI Issues - GitHub](https://github.com/game-ci/unity-builder/labels/cloud-runner)

You can also explore the [development roadmap page](development).

Cloud Runner overall release status: `preview`
This means some APIs may change, features are still being added but the minimum feature set works and is stable.

Release Stages: `experimental` ➡️ `preview` ➡️ `full release`

You must use a provider with Cloud Runner, each provider's release status is described below. This indicates the stability and support for cloud runner features and workflows.

```md
| Cloud Provider Platform | Release Status            |
| ----------------------- | ------------------------- |
| Kubernetes              | ✔️ experimental release |
| AWS                     | ✔️ preview release      |
| GCP                     | ⚠ Considered             |
| Azure                   | ⚠ Considered             |
```

```md
| Git Platform          | Release Status       |
| --------------------- | -------------------- |
| GitHub                | ✔️ preview release |
| GitLab                | ✔️ preview release |
| Command Line          | ✔️ preview release |
| Any Git repository    | ✔️ preview release |
| Any Git automation/Ci | ✔️ preview release |
```


_Usually the cluster needs to be up and running at all times, as starting up a cluster is slow._
_Use Google Cloud's Kubernetes Autopilot you can scale down to the free tier automatically while not in use._

## Cloud Runner Releases

All cloud runner releases are currently packaged and released with game-ci's unity-builder module:
[Game CI Releases - GitHub](https://github.com/game-ci/unity-builder/releases)

History up to latest open incoming changes for release can be found here:
[Cloud Runner PRs - GitHub](https://github.com/game-ci/unity-builder/pulls?q=is%3Apr+cloud+runner)

You can see further information about configuring the release version on the [Configuration](configuration) page.
