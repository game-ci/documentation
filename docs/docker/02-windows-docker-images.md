# Windows docker images

Windows images are used for some features available only in windows. The main reason is usually building an IL2CPP version of the application.

To build applications effectively in terms of build time, the very base image is a .NET framework 4.8. It's cached on GitHub actions runners and we truly need .NET. The base Windows image can be found in [https://github.com/game-ci/docker](https://github.com/game-ci/docker/blob/main/images/windows/base/Dockerfile)

## Features

- Git
- Choco package manager

## Limitations

### Microsoft does not allow redistribution of Visual Studio build tools

Microsoft doesn't permit publishing images with VS Build tools [`discussion`](https://github.com/microsoft/Windows-Containers/issues/102#issuecomment-827170844) so aren't we allowed to do that. Building windows IL2CPP project in pure editor images leads to exceptions claiming that "C++ code builder" nor "Windows 10 SDK" are installed. There are two options to avoid this obstacle

1. Inject/mount Microsoft Visual Studio with VC++ and Windows 10 SDK from the host system into the container during runtime.
2. Installs vctools, e.g. `choco install visualstudio2017-workload-vctools --no-progress -y` and push it to a private docker registry

### Injecting VC++ into the image

**To pass VC++ from a host system, two steps are necessary**

_Add to the system registry (in a container) path and version to Windows SDK_

```pwsh
$windowsSdkDirectory = "HKLM:\SOFTWARE\Wow6432Node\Microsoft\Microsoft SDKs\Windows\v10.0"

New-Item -Path $windowsSdkDirectory -Force | Out-Null

New-ItemProperty -Path $windowsSdkDirectory `
     -Name InstallationFolder `
     -PropertyType String `
     -Force `
     -Value "C:\Program Files (x86)\Windows Kits\10\" | Out-Null

New-ItemProperty -Path $windowsSdkDirectory `
     -Name ProductVersion `
     -PropertyType String `
     -Force `
     -Value $env:WINDOWS_SDK_VERSION | Out-Null
```

_Mount list of volumes_

- C:\Program Files (x86)\Windows Kits
- C:\Program Files (x86)\Microsoft Visual Studio
- C:\Program Files\Microsoft Visual Studio
- C:\ProgramData\Microsoft\VisualStudio

_Gitlab runner config.toml example_

```toml
...
volumes = [
  "C:\\Program Files (x86)\\Windows Kits:C:\\Program Files (x86)\\Windows Kits",
  "C:\\Program Files (x86)\\Microsoft Visual Studio:C:\\Program Files (x86)\\Microsoft Visual Studio",
  "C:\\Program Files\\Microsoft Visual Studio:C:\\Program Files\\Microsoft Visual Studio",
  "C:\\ProgramData\\Microsoft\\VisualStudio:C:\\ProgramData\\Microsoft\\VisualStudio"
]
...
```

### Licenses are not valid between containers runs

This behaviour is different to Ubuntu containers where it's possible to use a single licence for even a few different runners.

In Windows, it's necessary to acquire a license every time and return it after a building process. License files for every run are identical apart from the last four symbols of the machine hash code. This restriction has not been solved yet

The simplest way is to write a couple of scripts (copied from [`Unity3d docs`](https://docs.unity3d.com/Manual/ManagingYourUnityLicense.html)) and wrap it to the try-finally block

**Note**: Path to Unity3d is `C:\Program Files\Unity\Hub\Editor\{UNITY_EDITOR_VERSION}\Editor\Unity.exe`

```pwsh
try {
  build.ps1
} finally {
  return-license.ps1
}
```

## Troubleshooting: GitLab

### Gitlab doesn't have (or has few) shared docker-windows runners

There is no other option right now, but [use a private runner](https://docs.gitlab.com/runner/install/). Please, set the `docker-windows` type of the runner

Default docker-for-windows settings are very resource-mean. It uses a single core and 1Gb of RAM. That's why the custom configuration is highly recommended

**config.toml**

```toml
...
[runners.docker]
  cpus = "12"
  memory = "13g"
  hostname = "dockerImage"
...
```

**Note:** `hostname` doesn't influence the performance, but one day can help with license association to a machine

### Default shell for Gitlab-runner is PowerShell Core

There are two logical options

1. Set another shell in the config
2. Install PowerShell Core

_Change it in the `config.toml`_

```toml
[[runners]]
  shell = "powershell"
```

_Install PowerShell Core_

```dockerfile
FROM unityci/editor:windows-${UNITY_VERSION}-windows-il2cpp-${UNITY_IMAGE_VERSION}

RUN choco install pwsh --no-progress -y
```

Then push it to a docker registry. Installing `pwsh` during a pipeline doesn't help

### Git-ssh dependency package checkout fails

The base image `windowsservercore` is too old and has some outdated packages. One of them, `OpenSSH` has [a bug](https://github.com/PowerShell/Win32-OpenSSH/issues/1263) that breaks the remote repository signature check.

The best option here is to replace it with something more recent

```pwsh
# Manually remove an old ssh-agent service
sc.exe delete ssh-agent
choco install openssh -params '"/SSHAgentFeature"' --no-progress -y
$env:GIT_SSH="C:\Program Files\OpenSSH-Win64\ssh.exe"
```

**Note:** `ssh-add` must be used from a different location, `C:\Program Files\OpenSSH-Win64\ssh-add.exe`
