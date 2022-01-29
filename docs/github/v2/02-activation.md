# Activation

All actions use a Unity installation, which needs to be activated.

Unity differentiates their methods between `personal` and `professional` licenses.

Depending on whether you are using a free or paid version of Unity, you will need to follow the steps for either a [personal license](#personal-license) or a [professional license](#professional-license).

## Personal license

Follow these steps if you are using a free version of Unity.

> _**Note:** Do NOT follow the steps for the personal license if you have a professional license._

#### Mental model

1. Request an activation file for usage on GitHub
2. Use that file to acquire a license
3. Set the license as a secret

#### About the activation file

You may use the
[Unity - Request Activation File](https://github.com/marketplace/actions/unity-request-activation-file)
action with the below instructions.

The activation file uses machine identifiers so you cannot perform this step locally.

Let's go!

#### Acquiring an activation file

Create a file called `.github/workflows/activation.yml` and add the below workflow definition to it:

```yaml
name: Acquire activation file
on:
  workflow_dispatch: {}
jobs:
  activation:
    name: Request manual activation file 🔑
    runs-on: ubuntu-latest
    steps:
      # Request manual activation file
      - name: Request manual activation file
        id: getManualLicenseFile
        uses: game-ci/unity-request-activation-file@v2
      # Upload artifact (Unity_v20XX.X.XXXX.alf)
      - name: Expose as artifact
        uses: actions/upload-artifact@v2
        with:
          name: ${{ steps.getManualLicenseFile.outputs.filePath }}
          path: ${{ steps.getManualLicenseFile.outputs.filePath }}
```

Commit and push your workflow definition.

#### Converting into a license

Follow these (one-time) steps for simple activation.

1. [Manually run](https://docs.github.com/en/actions/managing-workflow-runs/manually-running-a-workflow) the above workflow.
2. Download the manual activation file that now appeared as an artifact and extract the `Unity_v20XX.X.XXXX.alf` file from the zip.
3. Visit [license.unity3d.com](https://license.unity3d.com/manual) and upload the `Unity_v20XX.X.XXXX.alf` file.
4. You should now receive your license file (Unity_v20XX.x.ulf) as a download. It's ok if the numbers don't match your Unity version exactly.
5. Open `Github` > `<Your repository>` > `Settings` > `Secrets`.
6. Create the following secrets;
   - `UNITY_LICENSE` - _(Copy the contents of your license file into here)_
   - `UNITY_EMAIL` - _(Add the email address that you use to login to Unity)_
   - `UNITY_PASSWORD` - _(Add the password that you use to login to Unity)_

**GameCI does not acquire nor store your Unity email or password. They are required for reactivating the license during build and test steps.**

> _**Note:** When changing Unity version, you may need to repeat the same process._

## Professional license

1. Subscribe to Unity Plus or Unity Pro, and get your Serial Key from the [Unity Subscriptions page](https://id.unity.com/en/subscriptions)
2. Open `Github` > `<Your repository>` > `Settings` > `Secrets`
3. Create the following secrets;
   - `UNITY_SERIAL` - _(Add the serial key from step 1 that looks like `XX-XXXX-XXXX-XXXX-XXXX-XXXX`)_
   - `UNITY_EMAIL` - _(Add the email address that you use to login to Unity)_
   - `UNITY_PASSWORD` - _(Add the password that you use to login to Unity)_

**GameCI does not acquire nor store your Unity email or password. They are required for reactivating the license during build and test steps.**

> _**Note:** Do NOT follow the steps for the personal license if you have a professional license._

## Optional steps

- Verify your license using
  [Activate](https://github.com/marketplace/actions/unity-activate).
- When using a pro license also use
  [Return License](https://github.com/marketplace/actions/unity-return-license)
  to free up the license allocation after usage.

> _**Note:** Test runner and Builder already include these steps._

## Next steps

The license can now be used in test and build steps.

You are now ready to start configuring these.
