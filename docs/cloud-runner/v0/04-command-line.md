# Cloud Runner Command Line Support

You can install Game CI locally and start cloud runner jobs from the command line or by integrating your own tools.

# Configuration

When running any unity workload you must provide valid unity credentials. In addition to any other credentials this is already quite a lot of input. For this reason, it is common to use the command line mode with input override (link here). This enables you to provide a command to pull input, with this approach you can create a file to store credentials or pull from a secret manager.
