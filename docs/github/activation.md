# Activation

#### Professional licenses

Skip this chapter.

#### Personal licenses

You may use the
[Unity - Request Activation File](https://github.com/marketplace/actions/unity-request-activation-file)
action using below instructions.

The activation file uses machine identifiers and the Unity version number.
All github virtual machines emit the same hardware ID.
You cannot perform this step locally.

Let's go!

## Acquiring an activation file

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

## Converting into a license

Follow these (one-time) steps for simple activation.

- Download the manual activation file that now appeared as an artifact.
- Visit [license.unity3d.com](https://license.unity3d.com/manual) and upload it.
- You should now receive your license file (Unity_v20XX.x.ulf) as a download.
- Open `Github` > `Your repository` > `Settings` > `Secrets`.
- Add a new secret called `UNITY_LICENSE` and copy the contents your license file into it.

## Next steps

The license can be used in test and build steps.

You are now ready to start configuring these.
