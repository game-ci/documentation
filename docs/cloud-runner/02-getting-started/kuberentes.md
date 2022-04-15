# Getting Started AWS

### Requirements

- You must have a Kuberentes cluster setup and ready that supports persistent volumes.
- Create a kubeconfig and encode it as base64.

### K8s Credentials

Setup the following as `env` variables for the GitHub build step:

- `kubeConfig` (should be encoded as base64)

### Standard configuration

Link to configuration page

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
