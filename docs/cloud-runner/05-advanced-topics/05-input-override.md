# Input Override
When running any unity workload you must provide valid unity credentials. In addition to any other credentials this is already quite a lot of input. For this reason, it is common to use the command line mode with input override (link here). This enables you to provide a command to pull input, with this approach you can create a file to store credentials or pull from a secret manager.

## Example
```bash
game-ci -m cli --populateOverride true --readInputFromOverrideList UNITY_EMAIL,UNITY_SERIAL,UNITY_PASSWORD --readInputOverrideCommand="gcloud secrets versions access 1 --secret=\"{0}\""
```

## Required Parameters
- `readInputFromOverrideList` - Comma separated list of parameters to read from override command.
- `readInputOverrideCommand` - A command line command to run (The command is formatted to replace "{0}" with the parameter parameter name).
