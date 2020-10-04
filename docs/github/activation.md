# Activation

All actions use a Unity installation, which needs to be activated.

Unity differentiates their methods between `personal` and `professional` licenses.

## Personal license

#### Mental model

1. Request activation file for usage on GitHub
2. Use that file to acquire a license
3. Set the license as a secret

#### About the activation file

You may use the
[Unity - Request Activation File](https://github.com/marketplace/actions/unity-request-activation-file)
action using below instructions.

The activation file uses machine identifiers and the Unity version number.
All github virtual machines emit the same hardware ID.
You cannot perform this step locally.

Let's go!

### Acquiring an activation file

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

### Converting into a license

Follow these (one-time) steps for simple activation.

- Download the manual activation file that now appeared as an artifact.
- Visit [license.unity3d.com](https://license.unity3d.com/manual) and upload it.
- You should now receive your license file (Unity_v20XX.x.ulf) as a download.
- Open `Github` > `<Your repository>` > `Settings` > `Secrets`.
- Create a secret called `UNITY_LICENSE` and copy the entire XML contents of your license file into it.

> _**Note:** When changing Unity version, you may need to repeat the same process._

## Professional license

1. Open `Github` > `<Your repository>` > `Settings` > `Secrets`
2. Create the following secrets;
   - `UNITY_SERIAL` - _(Add the code that looks like `XX-XXXX-XXXX-XXXX-XXXX-XXXX`)_
   - `UNITY_EMAIL` - _(Add the email address that you use to login to Unity)_
   - `UNITY_PASSWORD` - _(Add the password that you use to login to Unity)_

## Optional steps

- Verify your license using
  [Activate](https://github.com/marketplace/actions/unity-activate).
- When using a pro license also use
  [Return License](https://github.com/marketplace/actions/unity-return-license)
  to free up the license allocation after usage.

> _**Note:** Test runner and Builder already include these steps._

## Next steps

The license can be used in test and build steps.

You are now ready to start configuring these.
