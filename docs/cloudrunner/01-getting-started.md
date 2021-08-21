# TL;DR / What is it?

**You can use remote builder to send a build from any supported git platform to a Kubernetes cluster or AWS.**

# Benefits

1. Larger options and more control over disk size, memory and CPU. You can build projects of almost any size.
2. Scale up to much larger numbers of builds easily and fully on demand.

# GitHub Actions and Game Development

GitHub Actions by default run on build machines provided by GitHub. You can see info about the specifications of the build machines [here](https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners).

For Unity projects the available disk size is quite small. You may experience an error related to running out of disk space. You may also want to run the build on a server with more memory or processing resources.

# Concept

Cloud Runner is an open-source tool for Unity projects that makes it easy and reliable to run automated tasks. Instead of running them locally, Cloud Builder starts a Cloud server on-demand and streams the results back to you.

[insert graphic of pushing an object to remote machine]

Cloud Builder can cache large files and the Unity Library (imported assets) in Cloud Storage to make builds fast. Cloud Builder only needs to pull the files that change to run more than once.

The most common automated task Cloud Builder is used for is to Build, Test and Deploy a Unity project.

However, you can use Cloud Builder to run any automated work that requires the Unity Editor.

# Supported platforms

## Run builds on a Kubernetes cluster

_Usually the cluster needs to be up and running at all times, as starting up a cluster is slow. Using Google Cloud's Kubernetes Autopilot you can scale down to the free tier automatically while not in use._

✔️ All Kubernetes providers that support persistent volumes are supported.

## Run builds on a cloud provider like AWS

_This is billed on demand and costs nothing unless you store the builds._

✔️ **AWS** is supported.

⚠ **GCP**, Google Cloud Run needs to release support for NFS.

⚠ **Azure**, the needed technologies are already supported.

Next checkout the basic-aws-setup.
