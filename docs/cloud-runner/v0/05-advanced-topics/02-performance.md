# Performance 

By sending the build to a cloud resource we must accept some overhead in time to do this. Cloud Runner tries to manage and offer good solutions to cut down any overhead. As well as supporting you to use all options to speed up common workflows, such as incremental builds.

## Warm start
!Development roadmap for cloud runner feature: Will enable you to maintain a minimum number of active build resources to handle incoming jobs with shorter delay times to start a job.

## Push Hooks
!Development roadmap for cloud runner feature: Rather than starting a job from your CI process, you can initally start a Cloud Runner job from your local git push hooks, the CI process can then catch up and observe the logs as needed.

## Sidecar
!Development roadmap for cloud runner feature: Continually stream changes to game-ci workloads without needing to push or even commit explicitly (configurable).

## Caching
Caching is used to speed up git clones, Unity imports and builds and can be extended for custom scenarios.

See [Caching](caching).

## Provider Platform's impact
