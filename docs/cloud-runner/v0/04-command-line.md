# Cloud Runner Command Line Support

You can install Game CI locally and start cloud runner jobs from the command line or by integrating your own tools.

# Install

Currently (development)

```bash
git clone https://github.com/game-ci/unity-builder.git
yarn install
yarn run
```

Planned (just run with no previous install via)

```bash
dpx game-ci build
```

# List commands and input

`game-ci -h` or `game-ci --help`

# Configuration

When running any unity workload you must provide valid unity credentials. In addition to any other credentials this is already quite a lot of input. For this reason, it is common to use the command line mode with input override (link here). This enables you to provide a command to pull input, with this approach you can create a file to store credentials or pull from a secret manager.

`game-ci -m cli --populateOverride true --readInputFromOverrideList UNITY_EMAIL,UNITY_SERIAL,UNITY_PASSWORD --readInputOverrideCommand="gcloud secrets versions access 1 --secret=\"{0}\""`
