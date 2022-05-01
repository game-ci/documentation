# Garbage Collection

Cloud Runner creates, manages and destroys cloud workloads you request. Resources have to be created.

It is always possible a resource doesn't get deleted by cloud runner. Even if the chance is small, we want to consider the risk of a cloud bill growing unexpectedly seriously.

That is the only way to ensure a tool is safe and trustworthy for the broadast range of people.

# Garbage collection guarentees now (preview releease)

Cloud Runner runs the workload and cleans up the resources. It does not expect to be interrupted. A failure within the cloud task will not cause a failure to collect garbage.

If you cancel a task, the resources will not be cleaned up.

# Garbage collection guarentees will be provided (by end of preview release stage)

Cloud runner will collect the garbage when it next cleans up. There will be utility functions to clean up directly.

# Garbage collection guaretnees we could offer (but maybe shouldn't?)

Cloud runner can schedule cron jobs to independently guarentee shutdown (already possible via custom hooks).

# Garbage collection utilities

List garbage collection
(link to cli)
