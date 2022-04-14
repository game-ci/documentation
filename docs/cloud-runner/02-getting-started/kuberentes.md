# Getting Started AWS

### Requirements

- You must have an AWS account setup and ready to create resources.
- Create a service account and generate an AWS access key and key id.

### K8s Credentials

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

- `cloudRunnerCluster` (should be `aws`)
- `awsStackName` (should be the name you gave the base stack in aws)
- `remoteBuildMemory` (the memory the build container should be given)
- `remoteBuildCpu` (the CPU units the build container should be given)

#### Allowed CPU/Memory combinations

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

### Example build step
