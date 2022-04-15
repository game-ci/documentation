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

### Standard configuration

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

Currently aws builds do not save their persistent contents beyond a cloud runner job, so you may want to export the results to cloud storage e.g:

```yaml
- uses: game-ci/unity-builder@cloud-runner-develop
  id: aws-fargate-unity-build
  timeout-minutes: 25
  with:
    cloudRunnerCluster: aws
    versioning: None
    projectPath: ${{ matrix.projectPath }}
    unityVersion: ${{ matrix.unityVersion }}
    targetPlatform: ${{ matrix.targetPlatform }}
    githubToken: ${{ secrets.GITHUB_TOKEN }}
    postBuildSteps: |
      - name: upload
        image: amazon/aws-cli
        commands: |
          aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID --profile default
          aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY --profile default
          aws configure set region $AWS_DEFAULT_REGION --profile default
          aws s3 ls
          aws s3 ls game-ci-test-storage
          ls /data/cache/$CACHE_KEY
          ls /data/cache/$CACHE_KEY/build
          aws s3 cp /data/cache/$CACHE_KEY/build/build-$BUILD_GUID.zip s3://game-ci-test-storage/$CACHE_KEY/build-$BUILD_GUID.zip
        secrets:
        - name: awsAccessKeyId
          value: ${{ secrets.AWS_ACCESS_KEY_ID }}
        - name: awsSecretAccessKey
          value: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        - name: awsDefaultRegion
          value: eu-west-2
```

A full workflow example can be seen in builder's [test workflow](https://github.com/game-ci/unity-builder/blob/main/.github/workflows/aws-tests.yml).
