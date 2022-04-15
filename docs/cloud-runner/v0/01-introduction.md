# Introduction

## What does cloud runner do

**Cloud Runner enables you to send your project to a "Cloud Provider" such as AWS or GCP. Using native cloud services (such as AWS Fargate) or Kubernetes.**

1. Larger options and more control over disk size, memory and CPU. You can build projects of almost any size.
2. Scale up to much larger numbers of builds easily and fully on demand.
3. Run custom jobs and extend the system for any workload.

GitHub Actions by default run on build machines provided by GitHub. You can see info about the specifications of the build machines [here](https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners).

For Unity projects the available disk size is quite small. You may experience an error related to running out of disk space. You may also want to run the build on a server with more memory or processing resources.

### Supported Cloud Provider Platforms

Cloud Runner overall release status: `preview`

| Release Status                         | Platform               |
| -------------------------------------- | ---------------------- |
| ✔️ experimental release                | **Kuberenets "K8s"\*** |
| ✔️ preview release                     | **AWS**                |
| ⚠ Depedent on custom depdency override | **GCP**                |
| ⚠ Depedent on custom depdency override | **Azure**              |

experimental > preview > full release

\*_Usually the cluster needs to be up and running at all times, as starting up a cluster is slow._
_Use Google Cloud's Kubernetes Autopilot you can scale down to the free tier automatically while not in use._

### When to use self-hosted runner or remote builder?

Self-hosted runners are best used when you already have a server available, running 24/7 that you can setup as a runner. And you're happy to maintain and keep that server available and running.

Cloud Runner is better if you don't have a server setup or don't want to manage or maintain your own build server.

For GitHub users you can consider this solution OR use Cloud Runner.
[GitHub self-hosted runners](https://docs.github.com/en/actions/hosting-your-own-runners/about-self-hosted-runners) and Cloud Runner can enable you to build larger projects.

## Releases

All cloud runner releases are currently packaged and released with game-ci's unity-builder module:
https://github.com/game-ci/unity-builder/releases

History up to latest open incoming changes for release can be found here:
https://github.com/game-ci/unity-builder/pulls?q=is%3Apr+cloud+runner

Link to release branches configuration section

## Development Roadmap

| What                                  | Status      | Why                                                                                      |
| ------------------------------------- | ----------- | ---------------------------------------------------------------------------------------- |
| preview feedback gathering            | in-progress | Gather feedback from commmunity on experience using cloud runner.                        |
| preview beginner friendly pass        | in-progress | A pass over cloud runner's APIs and usability for the preview release stage.             |
| preview garbage collection guarentees | todo        | Support for strong garbage collection guarentees.                                        |
| custom dependency                     | started     | Support creating, checking the health of and cleaning up a custom depdency.              |
| custom logging                        | todo        | Support extensible logging to your own loggin service.                                   |
| performance benchmark                 | todo        | Benchmark cloud runner on a variety of project sizes.                                    |
| better git sha driven support         | todo        | Target very specific points in git history.                                              |
| support for uncommitted changes       | todo        | Run automated jobs without having to commit, discover errors early.                      |
| warm starts and push hooks            | todo        | Do not have to wait for cloud runner to spin up a new machine.                           |
| better storage engine to support      | todo        | Share libraries to speed up import between local machines<->automated machines.          |
| cache entire repo                     | todo        | Currently only supports caching LFS and Unity Library folder.                            |
| editor integration                    | todo        | Direct integration into the Unity editor to run containerized cloud jobs.                |
| editor tracked mode                   | todo        | Game CI will run as a sidecar to your unity editor, building and validating any changes. |
| network game features                 | todo        |                                                                                          |
| better unity test framework support   | todo        |                                                                                          |
| better performance test support       | todo        |                                                                                          |
| better rendering support              | todo        | Automate screenshots, video and remote control clients.                                  |
| better artifact handling              | todo        | Better extensibility and support for artifact handling.                                  |

## Contributions
