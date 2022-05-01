# Garbage Collection

Cloud Runner creates, manages and destroys cloud workloads you request. Resources have to be created.

It is always possible a resource doesn't get deleted by cloud runner. Even if the chance is small, we want to consider the risk of a cloud bill growing unexpectedly seriously.

That is the only way to ensure a tool is safe and trustworthy for the broadast range of people.

# Preview Release - Garbage Collection

Cloud Runner runs the workload and cleans up the resources. It does not expect to be interrupted. A failure within the cloud task will not cause a failure to collect garbage.

If you cancel a task, the resources will not be cleaned up.

# Full Release - Garbage Collection (Not available yet)
Cloud runner will collect the garbage when it next cleans up. There will be utility functions to clean up directly.
Optional via configuration: Cloud runner can schedule cron jobs to independently guarentee shutdown (already possible via custom hooks).

# Garbage Collection - Command Line Functions
[Command Line Garbage Collection Utilities](../command-line#garbage-collection)
