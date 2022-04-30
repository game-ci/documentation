# Development Roadmap

```md
Iteration 0
| What | Status | Why |
| ----------------------------------- | ----------- | ------------------------------------------------------------- |
| preview feedback gathering | in-progress | Gather feedback on experience using cloud runner. |
| preview beginner friendly | in-progress | Iteration on UX for cloud runner APIs and usability. |
| track target git reference by sha | todo | Target very specific points in git history. |
| cache entire working directory | todo | Currently only supports caching LFS and Unity Library folder. |
| better unity test framework support | todo | |
| garbage collection guarentees | todo | Support for strong garbage collection guarentees. |

Iteration 2
| What | Status | Why |
| ---- | ------ | --- |

Iteration 3
| What | Status | Why |
| ------------------------ | ------ | ------------------------------------------------------- |
| better artifact handling | todo | Better extensibility and support for artifact handling. |

Iteration 4
| What | Status | Why |
| -------------------------------------------- | ------ | ------------------------------------------------------- |
| Automate rendering with GPU provider support | todo | Automate screenshots, video and remote control clients. |

Iteration 5
| What | Status | Why |
| ------------------------------- | ------ | ----------------------------------------------------- |
| better performance test support | todo | |
| performance benchmark | todo | Benchmark cloud runner on a variety of project sizes. |

Iteration 6
| What | Status | Why |
| ---------------------------- | ------ | ------------------------------------------------------------------- |
| editor integration | todo | Integration into Unity to run cloud workloads. |
| stream editor changes | todo | Game CI will stream any local changes to a build machine. |
| send uncommitted git changes | todo | Run automated jobs without having to commit, discover errors early. |
| warm starts and push hooks | todo | Do not have to wait for cloud runner to spin up a new machine. |

Backlog
| What | Status | Why |
| --------------------- | ------ | --------------------------------------------------------- |
| Resilience hooks | todo | Retry, startup and cleanup hooks. |
| custom logging | todo | Support extensible logging to your own loggin service. |
| custom storage engine | todo | Share Unity import cache between local and runners. |
| network game features | todo | Quick deploy simulation server, relay or headless client. |
```

You can find a more granular roadmap pinned in the "#cloud-runner" discord channel:
[Here](https://discord.com/channels/710946343828455455/789631903157583923/967524784659398748)

Minor changes, suggestions and bugs are tracked as GitHub issues:
[Here](https://github.com/game-ci/unity-builder/labels/cloud-runner)

# Feedback form

[Feedback Form](https://forms.gle/3Wg1gGf9FnZ72RiJ9)

# Contributions

Source contributors are welcome via PR. You can always discuss a suggestion on discord.

Donations welcome.
