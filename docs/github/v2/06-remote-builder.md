# Remote builder

## What is it?

GitHub Actions run on build machines provided by GitHub. You can see info about the specifications of the build machines [here]
(https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners).

For Unity projects the disc size is quite small. You may experience an error related to running out of disc space. You may also want to run the build on a server with more memory or CPU resources.

**You can use Remote Builder to send a build from any supported git platform to any of the supported remote builder types.**

## Key Features

- **Run builds on a cloud provider like AWS.** _This is billed on demand and costs nothing except unless you store the builds (which is cheap) while no builds are running._

✔️ **AWS** is supported.

❌ **GCP** planned, Cloud Run needs to release support for NFS storage.

❌ **Azure** planned, already supported.

- **Run builds on a Kubernetes cluster.** _Usually the cluster needs to be up and running at all times at all times as starting up a cluster is slow. Using Google Cloud's Kubernetes Autopilot you can scale down to the free tier automatically while not in use._

✔️ All Kubernetes providers that support persistent volumes are supported.

### When to use GitHub self-hosted runner or Remote Builder

[GitHub self-hosted runners](https://docs.github.com/en/actions/hosting-your-own-runners/about-self-hosted-runners) and Remote Builder can enable you to build larger projects.

Self-hosted runners are best used when you already have a server available, running 24/7 that you can setup as a runner. And you're happy to maintain and keep that server available and running.

Remote Builder is better if you don't have a server setup or don't want to manage or maintain a build server.

## Basic Remote Builder setup with AWS

### Requirements

- You must have an AWS account setup and ready to create resources.
- It is suggested you have a workflow setup from the [builder section](builder).

### Create base stack on AWS Cloud Formation

1. Open [this link](https://raw.githubusercontent.com/game-ci/unity-builder/main/dist/cloud-formations/base-setup.yml), right-click and save as a yaml file locally (filename doesn't matter, must end with .yaml).
2. Open AWS console, navigate to the Cloud Formation service.
3. Select the option to create a new stack.
4. Locate the section where you can upload a template. Upload the file you downloaded in step 1. The default values for all other fields will work, usually I name the stack something like `game-ci-base`.
5. Create the stack and wait for the stack to finish creating. You can delete this stack at any time to cleanup the resources.

_Note:_

- _An AWS Cloud Formation stack is just a group of resources that is created and destroyed together._
- _The stack we created manages the persistent storage and aws permissions for the builds._

### AWS Credentials

Setup the following as `env` variables for the GitHub build step:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_DEFAULT_REGION` (should be the same AWS region as the base stack e.g `eu-west-2`)

_Note:_
_This enables us to access AWS resources from the GitHub builder._

### GitHub Access Token

Include the following `with` variable for the GitHub build step:

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
    AWS_DEFAULT_REGION: eu-west-2
  with:
    remoteBuildCluster: aws
    projectPath: ${{ matrix.projectPath }}
    unityVersion: ${{ matrix.unityVersion }}
    targetPlatform: ${{ matrix.targetPlatform }}
    githubToken: ${{ secrets.GITHUB_TOKEN }}
```

A full workflow example can be seen in our [own CI workflow](https://github.com/game-ci/unity-builder/blob/main/.github/workflows/aws-tests.yml).
