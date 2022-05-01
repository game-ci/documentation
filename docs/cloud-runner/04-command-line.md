# Command Line

You can install Game CI locally and start cloud runner jobs from the command line or by integrating your own tools. All parameters in [Configuration](configuration) can be specified as command line input fields.

# Install

Currently (development)

```bash
git clone https://github.com/game-ci/unity-builder.git
yarn install
yarn run -m cli --projectPath {Your project path} {... other command line parameters}
```

Planned (does not work)

```bash
dpx game-ci build
```

# List commands and input

`game-ci -h` or `game-ci --help`

# Input Override Feature

When running any unity workload you must provide many parameters, such as all of the unity authentication and cloud provider settings. To make this easier you can use the [input override](advanced-topics/input-override#example). 

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