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
_GitHub Action examples to pull from the required release branch_

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

Valid options:
- aws - [Getting Started - AWS](getting-start/aws)
- k8s - [Getting Started - Kubernetes](getting-start/kubernetes)

