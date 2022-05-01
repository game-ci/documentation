# Configuration

### Configuration definition yaml

All parameters and descriptions are listed here:
[https://github.com/game-ci/unity-builder/blob/cloud-runner-develop/action.yml](https://github.com/game-ci/unity-builder/blob/cloud-runner-develop/action.yml)

### GitHub Access Token

Include the following variable in the `with` section of the builder step:

- `githubToken` (should be a GitHub access token with permission to get repositories)

_Note:_
_This enables us to get the repository from the AWS build machine._

### Release branch configuration

#### Develop branch

```yaml
- uses: game-ci/unity-builder@cloud-runner-develop
```

#### Stable branch

```yaml
- uses: game-ci/unity-builder@cloud-runner-stable
```

### Provider Configuration
You must specify the Cloud Provider to use via the parameter `cloudRunnerCluster`.

You can see further details about the requirements  of each in the getting started topics for each provider:
[Getting Started - AWS](/getting-start/aws)
[Getting Started - Kubernetes](/getting-start/kubernetes)