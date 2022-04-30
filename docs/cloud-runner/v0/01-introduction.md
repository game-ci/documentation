# Introduction

## Concept - What does cloud runner do

**Cloud Runner enables you to send your project to a "Cloud Provider" such as AWS or GCP. Using native cloud services (such as AWS Fargate) or Kubernetes.**

1. Larger options and more control over disk size, memory and CPU. You can build projects of almost any size.
2. Scale up to much larger numbers of builds easily and fully on demand.
3. Run custom jobs and extend the system for any workload.

## Do you need cloud runner or plain game-ci?

Game CI maintains a set of docker images that can be used to run workloads in many scenarios. Game CI also provides specific GitHub actions for running workflows on GitHub.

### Main Use Cases

#### Large GitHub Projects

GitHub Actions by default run on build machines provided by GitHub. You can see info about the specifications of the build machines [here](https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners).

For Unity projects the available disk size is quite small. You may experience an error related to running out of disk space. You may also want to run the build on a server with more memory or processing resources.

##### When should you use "GitHub self-hosted runners" or Game CI Cloud Runner?

_Cloud Runner can run itself as an ephemeral self hosted job to minimize your github actions runner usage, with the drawback of some extra startup time at the start of your workflow._

_Self-hosted runners are best used when you already have a server available, running 24/7 that you can setup as a runner. And you're happy to maintain and keep that server available and running._

_Cloud Runner is better if you don't have a server setup or don't want to manage or maintain your own build server._

_For GitHub users you can consider this solution OR use Cloud Runner._
_[GitHub self-hosted runners](https://docs.github.com/en/actions/hosting-your-own-runners/about-self-hosted-runners) and Cloud Runner can enable you to build larger projects._

#### Sending Builds to the cloud

You may for other reasons want to minimize the use of build machines from other systems, or may want to run remote builds from the command line. Cloud Runner can also help in these cases.

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
https://github.com/game-ci/unity-builder/releases

History up to latest open incoming changes for release can be found here:
https://github.com/game-ci/unity-builder/pulls?q=is%3Apr+cloud+runner

Link to release branches configuration section

## Development Roadmap

```md
| What                                  | Status      | Why                                                                 |
| ------------------------------------- | ----------- | ------------------------------------------------------------------- |
| preview feedback gathering            | in-progress | Gather feedback on experience using cloud runner.                   |
| preview beginner friendly             | in-progress | Iteration on UX for cloud runner APIs and usability.                |
| preview garbage collection guarentees | todo        | Support for strong garbage collection guarentees.                   |
| Resilience hooks                      | in-progress | Retry, startup and cleanup hooks.                                   |
| custom logging                        | todo        | Support extensible logging to your own loggin service.              |
| performance benchmark                 | todo        | Benchmark cloud runner on a variety of project sizes.               |
| better git sha driven support         | todo        | Target very specific points in git history.                         |
| support for uncommitted changes       | todo        | Run automated jobs without having to commit, discover errors early. |
| warm starts and push hooks            | todo        | Do not have to wait for cloud runner to spin up a new machine.      |
| better storage engine to support      | todo        | Share Unity import cache between local and runners.                 |
| cache entire repo                     | todo        | Currently only supports caching LFS and Unity Library folder.       |
| editor integration                    | todo        | Integration into Unity to run cloud workloads.                      |
| stream editor changes                 | todo        | Game CI will stream any local changes to a build machine.           |
| network game features                 | todo        | Quick deploy simulation server, relay or headless client.           |
| better unity test framework support   | todo        |                                                                     |
| better performance test support       | todo        |                                                                     |
| better rendering support              | todo        | Automate screenshots, video and remote control clients.             |
| better artifact handling              | todo        | Better extensibility and support for artifact handling.             |
| GCP Run                               | todo        |                                                                     |
| Azure                                 | todo        |                                                                     |
```

You can find a more granular roadmap pinned in the "#cloud-runner" discord channel:
[https://discord.com/channels/710946343828455455/789631903157583923/967524784659398748](Here)

Minor changes, suggestions and bugs are tracked as GitHub issues:
[https://github.com/game-ci/unity-builder/labels/cloud-runner](Here)

## Feedback form

https://forms.gle/3Wg1gGf9FnZ72RiJ9

## Contributions

Source contributors welcome.

Donations welcome.
