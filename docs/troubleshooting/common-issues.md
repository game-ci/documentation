# Troubleshooting

Below you'll find a collection of answers to commonly reported problems.

## My workflow isn't working because

### Scripts have compiler errors.

#### Error

```console
Scripts have compiler errors.
(Filename: ./Runtime/Utilities/Argv.cpp Line: 361)

Aborting batchmode due to failure:
Scripts have compiler errors.
```

#### Solution

Likely you have a missing script or assembly.

Make sure your branch is clean and all files are indeed present:

- No accidentally ignored files (i.e. ignored `.tmp` might match text mesh pro);
- No tracked files that you expected to be ignored;
- All packages listed;
- No pre-build steps that change your project differently from how that happens locally;

A good way to verify this, is to (locally) clone the Unity project in a new folder and run the build from there.

### Gradle error

#### Error

```console
Error: 3.690 [ERROR] [org.gradle.launcher.daemon.server.DaemonStateCoordinator] Command execution: started DaemonCommandExecution[command = Build{id=69dbd5b3-10f2-488e-8640-977da68733f9, currentDir=/github/workspace/Temp/gradleOut/launcher}, connection = DefaultDaemonConnection: socket connection from /127.0.0.1:33657 to /127.0.0.1:43866] after 0.0 minutes of idle
```

#### Solution

There are 2 possible solutions:

- Remove emojis from all environment variables (and thus workflow files), or
- Upgrade your project and workflow to use Unity editor version 2020.2 or later.

## I cannot activate because

### 'Non-whitespace before first tag. Line: 0 Column: 1 Char: 㼼' during manual activation

When activating a license on [license.unity3d.com](https://license.unity3d.com/), you may encounter the following error message:

> Non-whitespace before first tag. Line: 0 Column: 1 Char: 㼼

Here's Unity's workaround:

> Unfortunately, this is a known issue our end. The relevant team are in the process of working on a fix as we speak, in the meantime there is a workaround. Try renaming the `alf` file with a command to convert characters on it with a `iconv` command.

#### Solution

```bash
version=v2020.1.12f1 # update this according to your version and file name
iconv -f UTF-8 -t utf-16BE Unity_${version}.alf > Unity_${version}.utf16be.alf
```
