# Command Line

You can install Game CI locally and start cloud runner jobs from the command line or by integrating your own tools. All parameters in [Configuration](configuration) can be specified as command line input fields.

# Install

Currently (development)

```bash
git clone https://github.com/game-ci/unity-builder.git
yarn install
yarn run cli -m {mode parameter} --projectPath {Your project path} {... other command line parameters}
```

# Main Commands/Modes Parameter
- Default: `cli` (runs a standard build workflow)
- [Garbage Collection Modes](#garbage-collection)

# Help
_You can run `game-ci -h` or `game-ci --help` to List all modes and paramters with descriptions_

# Planned (does not work)
We plan to offer support for Game CI via Deno. This will enable fast, typescript native runtime and you will be able to access this via the following:
```bash
dpx game-ci build
```

# Input Override Feature

When running any unity workload many parameters are required (e.g all unity authentication and cloud provider settings). To make this easier you can use [the input override feature](advanced-topics/input-override#example) to shorten commands signficantly. 

This enables you to provide a command to pull input, e.g you can pull from a file or from a secret manager.

```bash
game-ci -m cli --populateOverride true --readInputFromOverrideList UNITY_EMAIL,UNITY_SERIAL,UNITY_PASSWORD --readInputOverrideCommand="gcloud secrets versions access 1 --secret=\"{0}\""
```


## Garbage Collection
### AWS Provider Only
```bash
aws-list-stacks
```
```bash
aws-list-tasks
```
```bash
aws-garbage-collect
```
```bash
aws-garbage-collect-all
```
```bash
aws-garbage-collect-all-1d-older
```
