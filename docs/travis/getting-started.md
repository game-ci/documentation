# Getting started

We have an example for Travis CI available in the [github mirror of `game-ci/unity3d-ci-example`](https://github.com/game-ci/unity3d-ci-example). This project is the same as [the one on gitlab](https://gitlab.com/gableroux/unity3d-gitlab-ci-example) to support examples for Travis. You should read the details for [gitlab](http://unity-ci.com/docs/gitlab) _TODO: use a relative link here, didn't take the time to see how_. Activation process is the same. **Here we have what is specific to Travis.**

## Example Travis CI configuration

- [`game-ci/unity3d-ci-example`'s `.travis.yml`](https://github.com/game-ci/unity3d-ci-example/blob/master/.travis.yml)

## How to store the Unity License when using Travis CI

Travis CI doesn't support multiple-lines env variable out of the box. I had troubles with escaping, so I recommend encrypting the license file. [`game-ci/unity3d-ci-example`'s `.travis.yml`](https://github.com/game-ci/unity3d-ci-example/blob/master/.travis.yml) will decrypt the file and add its content to `UNITY_LICENSE_CONTENT` env var itself afterward.

```bash
travis encrypt-file --pro -r YOUR_TRAVIS_USERNAME/YOUR_TRAVIS_REPO_NAME ./Unity_v2018.x.ulf # TODO confirm new file name for 2019
```

For the record, the message I was getting:

> The previous command failed, possibly due to a malformed secure environment variable.
> Please be sure to escape special characters such as ' ' and '\$'.
> For more information, see https://docs.travis-ci.com/user/encryption-keys.
