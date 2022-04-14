# Getting Started AWS

### Requirements

- You must have an AWS account setup and ready to create resources.
- Create a service account and generate an AWS access key and key id.

### AWS Credentials

Setup the following as `env` variables for the GitHub build step:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_DEFAULT_REGION` (should be the same AWS region as the base stack e.g `eu-west-2`)

_Note:_
_This enables us to access AWS resources from Unity Builder._

### GitHub Access Token

Link to configuration page

### Build Step Parameters

Link to configuration page

#### Allowed CPU/Memory combinations

There are some limitations to the CPU and Memory parameters. AWS will only accept the following combinations:
[AWS Fargate Documentation, Allowed CPU and memory values (Task Definitions)](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html#task_size)

##### Summary of format:

- Values are represented as 1024:1 GB or CPU.
- Do not include the vCPU or GB suffix.
- 1 CPU can go to a max of 6 GB of memory. 2 CPU's are required to go higher.

##### Example configuration:

```yaml
- cloudRunnerMemory: 4096
- cloudRunnerCpu: 1024
```

### Example build step

```yaml
- uses: game-ci/unity-builder@cloud-runner-develop
  id: aws-fargate-unity-build
  env:
    UNITY_LICENSE: ${{ secrets.UNITY_LICENSE }}
    AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
    AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
    AWS_DEFAULT_REGION: ${{ secrets.AWS_DEFAULT_REGION }}
  with:
    remoteBuildCluster: aws
    cloudRunnerMemory: 4096
    cloudRunnerCpu: 1024
    projectPath: ${{ matrix.projectPath }}
    unityVersion: ${{ matrix.unityVersion }}
    targetPlatform: ${{ matrix.targetPlatform }}
    githubToken: ${{ secrets.GITHUB_TOKEN }}
```

A full workflow example can be seen in builder's [test workflow](https://github.com/game-ci/unity-builder/blob/main/.github/workflows/aws-tests.yml).
