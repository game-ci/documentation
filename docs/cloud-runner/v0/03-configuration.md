### GitHub Access Token

Include the following variable in the `with` section of the builder step:

- `githubToken` (should be a GitHub access token with permission to get repositories)

_Note:_
_This enables us to get the repository from the AWS build machine._

### Build Step Parameters

Add the following parameters to the build step described in the [builder section](builder):

- `cloudRunnerCluster`

### Release branch configuration

#### Develop branch

```yaml
- uses: game-ci/unity-builder@cloud-runner-develop
```

#### Stable branch

```yaml
- uses: game-ci/unity-builder@cloud-runner-stable
```

### Detailed information on configuration can also be found in the action.yml defintion for the github action

[https://github.com/game-ci/unity-builder/blob/cloud-runner-develop/action.yml](https://github.com/game-ci/unity-builder/blob/cloud-runner-develop/action.yml)
