# Activation

There are a few methods available, if you're using gitlab-ci, the easiest method in the current documentation is using gitlab-ci.

## Unity Personal

### a. Using gitlab-ci

Once you've added all required files to your project (mainly [`.gitlab-ci.yml`](https://gitlab.com/gableroux/unity3d-gitlab-ci-example/-/blob/master/.gitlab-ci.yml)), there should be a manual step that can be triggered for activation.

1. Visit your project's settings > CI/CD > Variables and add `UNITY_USERNAME` and `UNITY_PASSWORD` with your credentials
1. Push your first commit to your project and visit CI/CD Pipelines.
1. Locate your latest job, there should be a `play` button, click on it and click `get-activation-file`
1. Wait for the job to run and follow instructions in the console

### b. Locally

All you need is [docker](https://www.docker.com/) installed on your machine.

1. Clone this project
2. Pull the docker image and run bash inside, passing unity username and password to env

   _hint: you should write this to a shell script and execute the shell script so you don't have your credentials stored in your bash history_. Also make sure you use your Unity3d _email address_ for `UNITY_USERNAME` env var.

   ```bash
   UNITY_VERSION=2019.3.7f1
   docker run -it --rm \
   -e "UNITY_USERNAME=username@example.com" \
   -e "UNITY_PASSWORD=example_password" \
   -e "TEST_PLATFORM=linux" \
   -e "WORKDIR=/root/project" \
   -v "$(pwd):/root/project" \
   gableroux/unity3d:$UNITY_VERSION \
   bash
   ```

   If your password contains a `!`, you can escape it like this (`example_pass!word`):

   ```bash
   ...
   -e "UNITY_PASSWORD=example_pass"'!'"word" \
   ...
   ```

3. In Unity docker container's bash, run once like this, it will try to activate

   ```bash
   xvfb-run --auto-servernum --server-args='-screen 0 640x480x24' \
   /opt/Unity/Editor/Unity \
   -logFile /dev/stdout \
   -batchmode \
   -username "$UNITY_USERNAME" -password "$UNITY_PASSWORD"
   ```

4. Wait for output that looks like this:

   ```
   LICENSE SYSTEM [2017723 8:6:38] Posting <?xml version="1.0" encoding="UTF-8"?><root><SystemInfo><IsoCode>en</IsoCode><UserName>[...]
   ```

   If you get the following error:

   > Can't activate unity: No sufficient permissions while processing request HTTP error code 401

   Make sure your credentials are valid. You may try to disable 2FA in your account and try again. Once done, you should enable 2FA again for security reasons. See [#11](https://gitlab.com/gableroux/unity3d-gitlab-ci-example/issues/11) for more details.

5. Copy xml content and save as `unity3d.alf`
6. Open https://license.unity3d.com/manual and answer questions
7. Upload `unity3d.alf` for manual activation
8. Download `Unity_v2018.x.ulf` (`Unity_v2019.x.ulf` for 2019 versions)
9. Copy the content of `Unity_v2018.x.ulf` license file to your CI's environment variable `UNITY_LICENSE`.
   _Note: if you are doing this on windows, chances are the [line endings will be wrong as explained here](https://gitlab.com/gableroux/unity3d-gitlab-ci-example/issues/5#note_95831816). Luckily for you, [`.gitlab-ci.yml`](.gitlab-ci.yml) solves this by removing `\r` character from the env variable so you'll be alright_
   [`.gitlab-ci.yml`](https://gitlab.com/gableroux/unity3d-gitlab-ci-example/-/blob/master/.gitlab-ci.yml) will then place the `UNITY_LICENSE` to the right place before running tests or creating the builds.

## Unity Plus/Pro

1. Clone this project
2. Pull the docker image and run bash inside, passing unity username and password to env

   _hint: you should write this to a shell script and execute the shell script so you don't have your credentials stored in your bash history_. Also make sure you use your Unity3d _email address_ for `UNITY_USERNAME` env var.

   ```bash
   UNITY_VERSION=2019.3.7f1
   docker run -it --rm \
   -e "UNITY_USERNAME=username@example.com" \
   -e "UNITY_PASSWORD=example_password" \
   -e "UNITY_SERIAL=AN-EXAM-PLE-SERIA-LKEY-1234" \
   -e "TEST_PLATFORM=linux" \
   -e "WORKDIR=/root/project" \
   -v "$(pwd):/root/project" \
   gableroux/unity3d:$UNITY_VERSION \
   bash
   ```

3. In Unity docker container's bash, run once like this, it will try to activate

   ```bash
   xvfb-run --auto-servernum --server-args='-screen 0 640x480x24' \
   /opt/Unity/Editor/Unity \
   -logFile /dev/stdout \
   -batchmode \
   -username "$UNITY_USERNAME" -password "$UNITY_PASSWORD" -serial "$UNITY_SERIAL"
   ```

4. Wait for the command to finish without errors
5. Obtain the contents of the license file by running `cat /root/.local/share/unity3d/Unity/Unity_lic.ulf`
6. Copy the content to your CI's environment variable `UNITY_LICENSE`.
   _Note: if you are doing this on windows, chances are the [line endings will be wrong as explained here](https://gitlab.com/gableroux/unity3d-gitlab-ci-example/issues/5#note_95831816). Luckily for you, [`.gitlab-ci.yml`](https://gitlab.com/gableroux/unity3d-gitlab-ci-example/-/blob/master/.gitlab-ci.yml) solves this by removing `\r` character from the env variable so you'll be alright_
   [`.gitlab-ci.yml`](https://gitlab.com/gableroux/unity3d-gitlab-ci-example/-/blob/master/.gitlab-ci.yml) will then place the `UNITY_LICENSE` to the right place before running tests or creating the builds.

## Unity license per target

Before `2018.4.8f1` for 2018 versions and before `2019.2.4f1` for 2019 versions, if you need a specific Unity license for a build target, you can add environment var `UNITY_LICENSE_{BUILD_TARGET}`. (`UNITY_LICENSE_ANDROID`, `UNITY_LICENSE_IOS`, ...). \_This is not required anymore now that images share a base image [See related change](https://gitlab.com/gableroux/unity3d/merge_requests/63)\*\*

### Note about components in recent images

Starting from these versions, base image doesn't include windows, mac and webgl components anymore. This means you must use `-mac`, `-windows` or `-webgl` images. [See related change](https://gitlab.com/gableroux/unity3d/merge_requests/63)
