# Test runner

Running your test suite in an automated workflow helps increase certainty when merging.

Use [Unity - Test runner](https://github.com/marketplace/actions/unity-test-runner) to run your Unity tests.

## Basic setup

By default, the test runner will run both `playmode` and `editmode` tests.

Create or edit the file called `.github/workflows/main.yml` and add a job to it.

#### Personal license

Personal licenses require a one-time manual activation step (per unity version).

Make sure you
[acquire and activate](https://github.com/marketplace/actions/unity-request-activation-file)
your license file and add it as a secret.

Then, define the test step as follows:

```yaml
- uses: game-ci/unity-test-runner@v2
  env:
    UNITY_LICENSE: ${{ secrets.UNITY_LICENSE }}
  with:
    projectPath: path/to/your/project
    githubToken: ${{ secrets.GITHUB_TOKEN }}
```

#### Professional license

Make sure you have set up these variables in the activation step.

- `UNITY_EMAIL` (should contain the email address for your Unity account)
- `UNITY_PASSWORD` (the password that you use to login to Unity)
- `UNITY_SERIAL` (the serial provided by Unity)

Define the test step as follows:

```yaml
- uses: game-ci/unity-test-runner@v2
  env:
    UNITY_EMAIL: ${{ secrets.UNITY_EMAIL }}
    UNITY_PASSWORD: ${{ secrets.UNITY_PASSWORD }}
    UNITY_SERIAL: ${{ secrets.UNITY_SERIAL }}
  with:
    projectPath: path/to/your/project
    githubToken: ${{ secrets.GITHUB_TOKEN }}
```

That is all you need to test your project.

## Viewing test results

The test results can be viewed from a [GitHub Status Check](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-status-checks).

To get this functionality, simply provide the [GitHub Token](https://docs.github.com/en/actions/reference/authentication-in-a-workflow#about-the-github_token-secret)
in order to view the tests results from [a check run](https://docs.github.com/en/rest/guides/getting-started-with-the-checks-api#about-check-runs).

```yaml
- uses: game-ci/unity-test-runner@v2
  with:
    githubToken: ${{ secrets.GITHUB_TOKEN }}
```

If you choose not to provide the `githubToken`, you may still upload the artifacts in order to access them.

## Storing test results

To be able to access the test results, they need to be uploaded as artifacts.

To do this, it is recommended to use the official Github Actions
[upload artifact action](https://github.com/marketplace/actions/upload-artifact).

By default, Test Runner outputs its results to a folder named `artifacts`.

```yaml
- uses: actions/upload-artifact@v2
  if: always()
  with:
    name: Test results
    path: artifacts
```

Test results can now be downloaded as `Artifacts` in the `Actions` tab.

#### Specifying artifacts folder

You can specify a different `artifactsPath` in the test runner and reference this path using the `id` of the test step.

```yaml
- uses: game-ci/unity-test-runner@v2
  id: myTestStep
```

```yaml
- uses: actions/upload-artifact@v2
  if: always()
  with:
    name: Test results
    path: ${{ steps.myTestStep.outputs.artifactsPath }}
```

## Caching

In order to make test runs (and builds) faster,
you can cache Library files from previous runs.

To do so, simply add Github Actions' official
[cache action](https://github.com/marketplace/actions/cache)
before any unity steps.

```yaml
- uses: actions/cache@v2
  with:
    path: path/to/your/project/Library
    key: Library-MyProjectName-TargetPlatform
    restore-keys: |
      Library-MyProjectName-
      Library-
```

This simple addition could speed up your test runs by more than 50%.

## Configuration options

Below options can be specified under `with:` for the `unity-test-runner` action.

#### projectPath

Specify the path to your Unity project to be tested.
The path should be relative to the root of your project.

_**required:** `false`_
_**default:** `<your project root>`_

#### unityVersion

Version of Unity to use for testing the project.
Use "auto" to get from your ProjectSettings/ProjectVersion.txt

_**required:** `false`_
_**default:** `auto`_

#### testMode

The type of tests to be run by the test runner.

Options are: "all", "playmode", "editmode"

_**required:** `false`_
_**default:** `all`_

#### artifactsPath

Path where the test results should be stored.

In this folder a folder will be created for every test mode.

_**required:** `false`_
_**default:** `artifacts`_

#### useHostNetwork

Initializes Docker using the host network.

This is useful if Unity needs to access a local server that was started as part of your workflow.

Options are: "true", "false"

_**required:** `false`_
_**default:** `false`_

#### customParameters

Custom parameters to configure the test runner.

Parameters must start with a hyphen (`-`) and may be followed by a value (without hyphen).

Parameters without a value will be considered booleans (with a value of true).

```yaml
- uses: game-ci/unity-test-runner@v2
  with:
    customParameters: -profile SomeProfile -someBoolean -someValue exampleValue
```

_**required:** `false`_
_**default:** `""`_

#### githubToken

Token to authorize access to the GitHub REST API. If provided, a check run will be created with the test results.

It is recommended to use `githubToken: ${{ secrets.GITHUB_TOKEN }}`,
but creating the check from [a fork of your repo](https://docs.github.com/en/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)
may require using a [Personal Access Token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token#creating-a-token).

Reference the [GitHub Checks API docs](https://docs.github.com/en/rest/reference/checks)
for details on [creating CI tests with the Checks API](https://docs.github.com/en/developers/apps/creating-ci-tests-with-the-checks-api).

_**required:** `false`_
_**default:** ``_

#### checkName

Name for the check run that is created when a github token is provided.

It may be useful to customize the check name if, for example, you have a job matrix with multiple unity versions.

_**required:** `false`_
_**default:** `Test Results`_

#### customImage

Specific docker image that should be used for testing the project.

```yaml
- uses: game-ci/unity-test-runner@v2
  with:
    customImage: 'unityci/editor:2020.1.14f1-base-0'
```

_**required:** `false`_
_**default:** `""`_

## Complete example

A complete workflow that tests all modes separately could look like this:

```yaml
name: Test project

on: [push, pull_request]

jobs:
  testAllModes:
    name: Test in ${{ matrix.testMode }}
    runs-on: ubuntu-latest
    strategy:
      fail-fast: false
      matrix:
        projectPath:
          - test-project
        testMode:
          - playmode
          - editmode
    steps:
      - uses: actions/checkout@v2
        with:
          lfs: true
      - uses: actions/cache@v2
        with:
          path: ${{ matrix.projectPath }}/Library
          key: Library-${{ matrix.projectPath }}
          restore-keys: |
            Library-
      - uses: game-ci/unity-test-runner@v2
        id: tests
        env:
          UNITY_LICENSE: ${{ secrets.UNITY_LICENSE }}
        with:
          projectPath: ${{ matrix.projectPath }}
          testMode: ${{ matrix.testMode }}
          artifactsPath: ${{ matrix.testMode }}-artifacts
          githubToken: ${{ secrets.GITHUB_TOKEN }}
          checkName: ${{ matrix.testMode }} Test Results
      - uses: actions/upload-artifact@v2
        if: always()
        with:
          name: Test results for ${{ matrix.testMode }}
          path: ${{ steps.tests.outputs.artifactsPath }}
```
