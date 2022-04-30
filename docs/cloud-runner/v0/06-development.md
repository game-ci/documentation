# Development Roadmap

## Iteration 0 - Quality of life

```md
| What                                | Status      | Why                                                  |
| ----------------------------------- | ----------- | ---------------------------------------------------- |
| preview feedback gathering          | in-progress | Gather feedback on experience using cloud runner.    |
| preview beginner friendly           | in-progress | Iteration on UX for cloud runner APIs and usability. |
| better unity test framework support | todo        |                                                      |
| garbage collection guarentees       | todo        | Support for strong garbage collection guarentees.    |
| better cli options for inspection   | todo        |                                                      |
```

## Iteration 2 - Advanced caching

```md
| What                               | Status | Why                                                           |
| ---------------------------------- | ------ | ------------------------------------------------------------- |
| cache entire working directory     | todo   | Currently only supports caching LFS and Unity Library folder. |
| skip cache duplicates by hash      | todo   |                                                               |
| configurable tar compression       | todo   |                                                               |
| skip to existing working directory | todo   |                                                               |
| unity incremental build caching    | todo   |                                                               |
```

## Iteration 3 - GPU Workloads and capabilities for Cloud Runner

```md
| What                                         | Status | Why                                                     |
| -------------------------------------------- | ------ | ------------------------------------------------------- |
| Automate rendering with GPU provider support | todo   | Automate screenshots, video and remote control clients. |
```

## Iteration 4 - Simple controlled performance

```md
| What                               | Status | Why                                                   |
| ---------------------------------- | ------ | ----------------------------------------------------- |
| better performance test support    | todo   |                                                       |
| performance benchmark / sample     | todo   | Benchmark cloud runner on a variety of project sizes. |
| simple performance metrics for aws | todo   |                                                       |
```

## Iteration 5 - "Advanced workflows for Unity to use and manage remote workloads"

```md
| What                              | Status | Why                                                                 |
| --------------------------------- | ------ | ------------------------------------------------------------------- |
| editor integration                | todo   | Integration into Unity to run cloud workloads.                      |
| stream editor changes             | todo   | Game CI will stream any local changes to a build machine.           |
| send uncommitted git changes      | todo   | Run automated jobs without having to commit, discover errors early. |
| warm starts and push hooks        | todo   | Do not have to wait for cloud runner to spin up a new machine.      |
| track target git reference by sha | todo   | Target very specific points in git history.                         |
```

## Backlog

```md
| What                                             | Status | Why                                                       |
| ------------------------------------------------ | ------ | --------------------------------------------------------- |
| Resilience hooks                                 | todo   | Retry, startup and cleanup hooks.                         |
| custom logging                                   | todo   | Support extensible logging to your own loggin service.    |
| custom storage engine                            | todo   | Share Unity import cache between local and runners.       |
| better artifact handling                         | todo   | Better extensibility and support for artifact handling.   |
| network game features                            | todo   | Quick deploy simulation server, relay or headless client. |
| remote control sample                            | todo   |                                                           |
| Cleaned up debug/prod                            | todo   |                                                           |
| Custom cloud runner docker image                 | todo   |                                                           |
| Infographics for cloud runner docs               | todo   |                                                           |
| detect and warn about impending binary conflicts | todo   |                                                           |
| Test coverage for hooks and steps                | todo   |                                                           |
| Multiplayer test sample                          | todo   |                                                           |
| Code report / project report                     | todo   |                                                           |
| Kuberenetes Rook support                         | todo   |                                                           |
| Custom provider sample                           | todo   |                                                           |
```

Minor changes, suggestions and bugs are tracked as GitHub issues:
[Game CI Issues - GitHub](https://github.com/game-ci/unity-builder/labels/cloud-runner)

# Feedback form

[Feedback Form](https://forms.gle/3Wg1gGf9FnZ72RiJ9)

# Contributions

Source contributors are welcome via PR. You can always discuss a suggestion on discord.

Donations welcome.
