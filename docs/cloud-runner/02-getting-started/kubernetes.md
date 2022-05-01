# Kubernetes

## Requirements

- You must have a Kuberentes cluster setup and ready that supports persistent volumes.
- Create a kubeconfig and encode it as base64.

## K8s Credentials

Setup the following as `env` variables for the GitHub build step:

- `kubeConfig` (should be encoded as base64)

## Configuration For Kubernetes Cloud Runner Jobs
Refer to [Configuration page](../configuration) or the [example below](#example).

### Allowed CPU/Memory Combinations

- `0.25 vCPU` - 0.5 GB, 1 GB, 2 GB
- `0.5 vCPU` - 1 GB, 2 GB, 3 GB, 4 GB
- `1 vCPU` - 2 GB, 3 GB, 4 GB, 5 GB, 6 GB, 7 GB, 8 GB
- `2 vCPU` - Between 4 GB and 16 GB in 1-GB increments
- `4 vCPU` - Between 8 GB and 30 GB in 1-GB increments

Do not include the vCPU or GB suffix.

#### Valid CPU and Memory Values
```yaml
- remoteBuildMemory: 2
- remoteBuildCpu: 0.5
```

### Example
```yaml
- uses: game-ci/unity-builder@cloud-runner-develop
  id: k8s-unity-build
  timeout-minutes: 30
  with:
    cloudRunnerCluster: k8s
    UNITY_LICENSE: ${{ secrets.UNITY_LICENSE }}
    targetPlatform: ${{ matrix.targetPlatform }}
    kubeConfig: ${{ steps.read-base64.outputs.base64 }}
    githubToken: ${{ secrets.GITHUB_TOKEN }}
    projectPath: test-project
    unityVersion: ${{ matrix.unityVersion }}
    versioning: None
    # Currently kuberentes builds do not save their persistent volumes beyond a cloud runner job.
    # So, you may want to export the results to cloud storage with a postBuildStep as follows:
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
          echo "/data/cache/$CACHE_KEY/build/build-$BUILD_GUID.zip s3://game-ci-test-storage/$CACHE_KEY/$BUILD_FILE"
          aws s3 cp /data/cache/$CACHE_KEY/build/build-$BUILD_GUID.zip s3://game-ci-test-storage/$CACHE_KEY/build-$BUILD_GUID.zip
        secrets:
        - name: awsAccessKeyId
          value: ${{ secrets.AWS_ACCESS_KEY_ID }}
        - name: awsSecretAccessKey
          value: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        - name: awsDefaultRegion
          value: eu-west-2
```
_[Custom Steps](../advanced-topics/custom-steps)_

A full workflow example can be seen in builder's [Cloud Runner GitHub sourcecode for AWS Pipeline](https://github.com/game-ci/unity-builder/blob/main/.github/workflows/cloud-runner-k8s-pipeline.yml).
