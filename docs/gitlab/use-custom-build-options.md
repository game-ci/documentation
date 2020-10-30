# Use custom build options

First, you need to understand how build options are passed to the build.

## [`Assets/Scripts/Editor/BuildCommand.cs`](https://gitlab.com/gableroux/unity3d-gitlab-ci-example/-/blob/master/Assets/Scripts/Editor/BuildCommand.cs)

This is the script used during `Unity` command line execution. It is passed to the [`-executeMethod <ClassName.MethodName>` command line parameter](https://docs.unity3d.com/Manual/CommandLineArguments.html) like this:

```bash
unity-editor \
  # ...
  -executeMethod BuildCommand.PerformBuild \
  # ...
```

You need to have this file in your project in order to build your project in the CI.

### [`.gitlab-ci.yml`](https://gitlab.com/gableroux/unity3d-gitlab-ci-example/-/blob/master/.gitlab-ci.yml)

You can add `BuildOptions` per target by adding environment variable `BuildOptions`.

```yaml
build-ios:
  <<: *build
  image: gableroux/unity3d:2019.3.7f1-android
  variables:
    BUILD_TARGET: iOS
	BuildOptions: AcceptExternalModificationsToPlayer
```

If you would like to use several `BuildOptions`, you have to separate all values by `,`:

```yaml
BuildOptions: AcceptExternalModificationsToPlayer,CompressTextures,ConnectToHost
```

See [Unity3d `BuildOptions` reference](https://docs.unity3d.com/ScriptReference/BuildOptions.html) for allowed values.
