# Cloud Runner vs Standard Game-CI

Game CI maintains a set of docker images that can be used to run workloads in many scenarios.

Game CI also provides specific GitHub actions for running workflows on GitHub. And a similar workflow for running Game CI on GitLab and Circle CI.
_All of these options use the build server resources provided by those systems, this can be a constraint or very convenient depending on the size of your project._

## Use Cases

### Sending Builds to the cloud

You may want to take advantage of cloud resources for lots of reasons (scale, speed, cost, flexibility) or may want to start remote builds from the command line without slowing down your development machine. Cloud Runner can help you do this.

This may be a preference, more effecient or you may want to use systems that struggle to handle large game development projects (GitHub being a good example).

#### Large GitHub Projects

GitHub Actions by default run on [build machines provided by GitHub](https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners). For Unity projects the available disk size is quite small. You may experience an error related to running out of disk space. You may also want to run the build on a server with more memory or processing resources.

#### "GitHub self-hosted runners" vs Game CI Cloud Runner

_GitHub users can consider: [GitHub self-hosted runners](https://docs.github.com/en/actions/hosting-your-own-runners/about-self-hosted-runners) and Cloud Runner. Both can enable you to build larger projects._

_Cloud Runner can run itself as an ephemeral self hosted job to minimize your github actions runner usage, with the drawback of some extra startup time at the start of your workflow. Cloud Runner is better if you don't have a server setup or don't want to manage or maintain your own build server._

_Self-hosted runners are best used when you already have a server available, running 24/7 that you can setup as a runner. And you're happy to maintain and keep that server available and running._