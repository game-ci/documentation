# Testing a license

[![Actions status](https://github.com/webbertakken/unity-activate/workflows/Actions%20%F0%9F%98%8E/badge.svg?event=push&branch=master)](https://github.com/webbertakken/unity-activate/actions?query=branch%3Amaster+event%3Apush+workflow%3A"Actions%20%F0%9F%98%8E")

---

GitHub Action to [activate Unity](https://github.com/marketplace/actions/unity-activate).

Part of the [Unity Actions](https://github.com/webbertakken/unity-actions) collection.

---

Use this action to activate Unity using credentials or a license file. Both
**personal** and **professional** licenses are supported.

Note that the latest versions of
[Test](https://github.com/webbertakken/unity-actions#test) and
[Build](https://github.com/webbertakken/unity-actions#build)
contain standalone activation and no longer require this action.

### Documentation

See the
[Unity Actions](https://github.com/webbertakken/unity-actions)
collection repository for workflow documentation and reference implementation.

## Usage

Create or edit the file called `.github/workflows/main.yml` and add a job to it.

```yaml
name: Activate Unity
on: [push]
jobs:
  requestActivation:
    name: Request activation ✔
    runs-on: ubuntu-latest
    steps:
```

Continue to either the personal license or professional license section below.

#### Personal license

1. Follow the **activation** section from [request action](https://github.com/marketplace/actions/unity-request-activation-file) to set `UNITY_LICENSE` variable.
2. Use the action as follows:

```yaml
- name: Activate Unity
  uses: webbertakken/unity-activate@v1.2
  env:
    UNITY_LICENSE: ${{ secrets.UNITY_LICENSE }}
```

#### Professional license

1. Goto `Repository` > `Settings` > `Secrets`
2. Set the following secrets:
   - `UNITY_EMAIL`: &lt;your_unity_login_email_address&gt;
   - `UNITY_PASSWORD`: &lt;your_unity_login_password&gt;
   - `UNITY_SERIAL`: &lt;your_unity_serial&gt;
3. Use the action as follows:

```yaml
- name: Activate Unity
  uses: webbertakken/unity-activate@v1.2
  env:
    UNITY_EMAIL: ${{ secrets.UNITY_EMAIL }}
    UNITY_PASSWORD: ${{ secrets.UNITY_PASSWORD }}
    UNITY_SERIAL: ${{ secrets.UNITY_SERIAL }}
```

#### Specifying version

Major version differences may require different activation files.

To activate this job's environment for a specific version of unity

```yaml
- name: Activate Unity
  uses: webbertakken/unity-activate@v1.2
  env:
    UNITY_LICENSE: ${{ secrets.UNITY_LICENSE }}
  with:
    unityVersion: 2019.2.11f1
```

#### Returning licenses

When using Pro licenses, free spots are being used up by activating licenses.

In order to keep continuity you need to return the license at the end of your workflow.

Example:

```yaml
- name: Return license
  uses: webbertakken/unity-return-license@v1
  if: always()
```

For specific information about returning the license, visit
the [return license](https://github.com/marketplace/actions/unity-return-license)
docs.

#### Save your workflow

Commit and push your workflow definition.

## More actions

Visit
[Unity Actions](https://github.com/webbertakken/unity-actions)
to find related actions for Unity.

Feel free to contribute.

## Licence

[MIT](./LICENSE)
