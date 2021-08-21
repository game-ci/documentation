# Remote builder

## TL;DR / What is it?

**You can use remote builder to send a build from any supported git platform to a Kubernetes cluster or AWS.**

## Benefits

1. Larger options and more control over disk size, memory and CPU. You can build projects of almost any size.
2. Scale up to much larger numbers of builds easily and fully on demand.

## GitHub Actions and Game Development

GitHub Actions by default run on build machines provided by GitHub. You can see info about the specifications of the build machines [here](https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners).

For Unity projects the available disk size is quite small. You may experience an error related to running out of disk space. You may also want to run the build on a server with more memory or processing resources.

### Run builds on a Kubernetes cluster

_Usually the cluster needs to be up and running at all times, as starting up a cluster is slow. Using Google Cloud's Kubernetes Autopilot you can scale down to the free tier automatically while not in use._

✔️ All Kubernetes providers that support persistent volumes are supported.

### Run builds on a cloud provider like AWS

_This is billed on demand and costs nothing unless you store the builds._

✔️ **AWS** is supported.

⚠ **GCP**, Google Cloud Run needs to release support for NFS.

⚠ **Azure**, the needed technologies are already supported.

## Basic Remote Builder setup with AWS

### Requirements

- You must have an AWS account setup and ready to create resources.

### AWS Credentials

Setup the following as `env` variables for the GitHub build step:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_DEFAULT_REGION` (should be the same AWS region as the base stack e.g `eu-west-2`)

_Note:_
_This enables us to access AWS resources from Unity Builder._

### GitHub Access Token

Include the following variable in the `with` section of the builder step:

- `githubToken` (should be a GitHub access token with permission to get repositories)

_Note:_
_This enables us to get the repository from the AWS build machine._

### Build Step Parameters

Add the following parameters to the build step described in the [builder section](builder):

- `remoteBuildCluster` (should be `aws`)
- `awsStackName` (should be the name you gave the base stack in aws)
- `remoteBuildMemory` (the memory the build container should be given)
- `remoteBuildCpu` (the CPU units the build container should be given)

#### Allowed CPU/Memory combinations

There are some limitations to the CPU and Memory parameters. AWS will only accept the following combinations:

- `0.25 vCPU` - 0.5 GB, 1 GB, 2 GB
- `0.5 vCPU` - 1 GB, 2 GB, 3 GB, 4 GB
- `1 vCPU` - 2 GB, 3 GB, 4 GB, 5 GB, 6 GB, 7 GB, 8 GB
- `2 vCPU` - Between 4 GB and 16 GB in 1-GB increments
- `4 vCPU` - Between 8 GB and 30 GB in 1-GB increments

Do not include the vCPU or GB suffix. For example:

```yaml
- remoteBuildMemory: 2
- remoteBuildCpu: 0.5
```

This information may go out of date if AWS update this. Please find the latest documentation at the reference link below.

_Reference:_
[AWS Fargate Documentation, Task Definitions, Task CPU and memory](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html#fargate-task-defs)

### Example build step

```yaml
- uses: game-ci/unity-builder@v2
  id: aws-fargate-unity-build
  env:
    UNITY_LICENSE: ${{ secrets.UNITY_LICENSE }}
    AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
    AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
    AWS_DEFAULT_REGION: ${{ secrets.AWS_DEFAULT_REGION }}
  with:
    remoteBuildCluster: aws
    projectPath: ${{ matrix.projectPath }}
    unityVersion: ${{ matrix.unityVersion }}
    targetPlatform: ${{ matrix.targetPlatform }}
    githubToken: ${{ secrets.GITHUB_TOKEN }}
```

A full workflow example can be seen in builder's [test workflow](https://github.com/game-ci/unity-builder/blob/main/.github/workflows/aws-tests.yml).
