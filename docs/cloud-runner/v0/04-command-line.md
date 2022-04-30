# Command Line

You can install Game CI locally and start cloud runner jobs from the command line or by integrating your own tools.

# Install

Currently (development)

```bash
git clone https://github.com/game-ci/unity-builder.git
yarn install
yarn run -m {cli --projectPath {Your project path} {... other command line parameters}
```

Planned (just run)

```bash
dpx game-ci build
```

# List commands and input

`game-ci -h` or `game-ci --help`

# Configuration

When running any unity workload you must provide valid unity credentials. In addition to any other credentials this is already quite a lot of input. For this reason, you can use the command line mode with [input override](/advanced-topics/input-override). This enables you to provide a command to pull input, with this approach you can create a file to store credentials or pull from a secret manager.

```bash
game-ci -m cli --populateOverride true --readInputFromOverrideList UNITY_EMAIL,UNITY_SERIAL,UNITY_PASSWORD --readInputOverrideCommand="gcloud secrets versions access 1 --secret=\"{0}\""
```
