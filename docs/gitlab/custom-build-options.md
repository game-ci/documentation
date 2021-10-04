# Custom build options

First, you need to understand how build options are passed to the build.

## Build command

See [Assets/Scripts/Editor/BuildCommand.cs](https://gitlab.com/gableroux/unity3d-gitlab-ci-example/-/blob/master/Assets/Scripts/Editor/BuildCommand.cs).

This is the script used during `Unity` command line execution. It is passed to the [`-executeMethod <ClassName.MethodName>` command line parameter](https://docs.unity3d.com/Manual/CommandLineArguments.html) like this:

```bash
unity-editor \
  # ...
  -executeMethod BuildCommand.PerformBuild \
  # ...
```

You need to have this file in your project in order to build your project in the CI.

### Workflow file

See [.gitlab-ci.yml](https://gitlab.com/gableroux/unity3d-gitlab-ci-example/-/blob/master/.gitlab-ci.yml).

You can add `BuildOptions` per target by adding environment variable `BuildOptions`.

```yaml
build-ios-xcode:
  <<: *build
  image: $IMAGE:$UNITY_VERSION-ios-$IMAGE_VERSION
  variables:
    BUILD_TARGET: iOS
  BuildOptions: AcceptExternalModificationsToPlayer
```

If you would like to use several `BuildOptions`, you have to separate all values by `,`:

```yaml
BuildOptions: AcceptExternalModificationsToPlayer,CompressTextures,ConnectToHost
```

See [Unity3d `BuildOptions` reference](https://docs.unity3d.com/ScriptReference/BuildOptions.html) for allowed values.
