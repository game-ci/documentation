# Keeping Pipeline Fast

By sending the build to a cloud resource we must accept some overhead in time to do this. Cloud
Runner tries to manage and offer good solutions to cut down any overhead. As well as supporting you
to use all options to speed up common workflows, such as incremental builds.

## Caching

Caching is used to speed up git clones, Unity imports and builds and can be extended for custom
scenarios.

You can use "Retained Workspace Mode" to cache entire project folders and accelerate performance,
although you will use additional storage resources.

See [Caching](../responsive-pipelines/caching).

## Provider Platform's impact

The different Cloud Runner providers all offer different guarenetees and performance for handling
your workloads.
