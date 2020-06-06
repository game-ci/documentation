# Activation

[![Actions status](https://github.com/webbertakken/unity-request-manual-activation-file/workflows/Actions%20%F0%9F%98%8E/badge.svg?event=push&branch=master)](https://github.com/webbertakken/unity-request-manual-activation-file/actions?query=branch%3Amaster+event%3Apush+workflow%3A"Actions%20%F0%9F%98%8E")

---

GitHub Action for
[requesting the manual activation file](https://github.com/marketplace/actions/unity-request-activation-file) for Unity.

Part of the
[Unity Actions](https://github.com/webbertakken/unity-actions)
collection.

---

Use this action to acquire a Unity personal license. Required in order to
use the
[Activate](https://github.com/webbertakken/unity-actions#activate),
[Test](https://github.com/webbertakken/unity-actions#test) and
[Build](https://github.com/webbertakken/unity-actions#build)
actions.

### Documentation

See the
[Unity Actions](https://github.com/webbertakken/unity-actions)
collection repository for workflow documentation and reference implementation.

## Usage

Create a file called `.github/workflows/activation.yml` and add a job to it.

```yaml
name: Acquire activation file
on: [push]
jobs:
  activation:
    name: Request manual activation file 🔑
    runs-on: ubuntu-latest
    steps:
```

To **configure** this action, add this step and set the id.

```yaml
# Request manual activation file
- name: Request manual activation file
  id: getManualLicenseFile
  uses: webbertakken/unity-request-manual-activation-file@v1.1
  with:
    unityVersion: 2019.2.11f1
```

You use the id to **upload the output file** like so:

```yaml
# Upload artifact (Unity_v20XX.X.XXXX.alf)
- name: Expose as artifact
  uses: actions/upload-artifact@v1
  with:
    name: ${{ steps.getManualLicenseFile.outputs.filePath }}
    path: ${{ steps.getManualLicenseFile.outputs.filePath }}
```

Commit and push your workflow definition.

## Activation

Follow these (one-time) steps for simple activation.

- Download the manual activation file that now appeared as an artifact.
- Visit [license.unity3d.com](https://license.unity3d.com/manual) and upload it.
- You should now receive your license file (Unity_v20XX.x.ulf) as a download.
- Open `Github` > `Your repository` > `Settings` > `Secrets`.
- Add a new secret called `UNITY_LICENSE` and copy the contents your license file into it.

You can now use the
[Activate](https://github.com/webbertakken/unity-actions#activate),
[Test](https://github.com/webbertakken/unity-actions#test) and
[Build](https://github.com/webbertakken/unity-actions#build)
actions.

## More actions

Visit
[Unity Actions](https://github.com/webbertakken/unity-actions)
to find related actions for Unity.

Feel free to contribute.

## Licence

[MIT](./LICENSE)
