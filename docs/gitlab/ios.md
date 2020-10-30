# iOS

## Setup (only one time per mac)

Install the latest Xcode command line tools :

```bash
xcode-select --install
```

Install fastlane using:

```bash
# Using RubyGems
sudo gem install fastlane -NV

# Alternatively using Homebrew
brew install fastlane
```

## Unity Settings

1. Switch target to iOS
1. In `PlayerSettings -> Other Settings`
   1. Fill the field `Signing Team ID`
   1. Ensure `Automatically Sign` is unchecked
   1. iOS Provisioning Profile
      1. `ProfileID`: `match AppStore your_bundle_identifier` _Replace `your_bundle_identifier` by yours_
      1. `ProfileType`: `Distribution`

## XCode project

Make a first iOS build using your mac from Unity, that will create an xcode project.  
Ensure your target the same path than the ci.  
Ex: if you let `BUILD_NAME: ExampleProjectName` in `.gitlab-ci.yml`, your xcode project must be at the root of the following path: `.\Builds\iOS\ExampleProjectName\`

## App on portal

Make sure that you have setup your app on the Apple Developer Portal and the App Store Connect or use [fastlane produce](https://docs.fastlane.tools/actions/produce/) to create it.

## Fastlane initialization

Open the terminal at the same path then run `fastlane init`, follow instructions to generate Appfile and default Fastfile.

## Provisioning profile

Run `fastlane match init`, follow instructions, select `appstore` provisioning profile type. ([Documentation](https://docs.fastlane.tools/actions/match/))

## Make lane

Copy the following instructions on your `fastlane/Fastfile`:

```ruby
default_platform(:ios)

platform :ios do
  desc "Push a new beta build to TestFlight"
  lane :beta do
    sync_code_signing(type:"appstore", readonly: is_ci)
    increment_build_number({
        build_number: latest_testflight_build_number + 1
    })
    build_app(scheme:"Unity-iPhone")
    upload_to_testflight(groups:["Team"])
  end
end
```

Note about `upload_to_testflight`: Change "Team" to your internal tester or remove `(groups:["Team"])` if you want set manually who can test the build

### Related documentation

- [sync_code_signing (alias for match)](https://docs.fastlane.tools/actions/sync_code_signing/)
- [increment_build_number](https://docs.fastlane.tools/actions/increment_build_number/)
- [build_app (alias for gym)](https://docs.fastlane.tools/actions/build_app/)
- [upload_to_testflight (alias for pilot)](https://docs.fastlane.tools/actions/testflight/)

## Run tests locally

Run the following command to test the build and the deployement localy:

```bash
fastlane ios beta
```

If the build and upload are ok, you have to force add some file to your git using command below

```bash
git add -f pathToTheFileToAdd
```

you have to add the following files:

- `Gemfile`
- `Gemfile.lock` (if here)
- `fastlane/Appfile`
- `fastlane/Fastfile`
- `fastlane/Matchfile`

## Gitlab-runner - register your mac

To automate your build with gitlab, you need to setup your mac as a gitlab runner.  
Installation:

```bash
sudo curl --output /usr/local/bin/gitlab-runner https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-darwin-amd64
```

Give permission to execute :

```bash
sudo chmod +x /usr/local/bin/gitlab-runner
```

- [Source (if you would like to check)](https://docs.gitlab.com/runner/install/osx.html)

Go to your project gitlab page, then go to `settings` -> `CI/CD` -> `Runners` -> `Specitic Runners` -> `Set up a specific Runner manually` -> take note of the token

[Follow these instructions](https://docs.gitlab.com/runner/register/index.html) to register your mac as a gitlab-runner for your specific project.  
Follow **macOS** instructions **without** sudo command for registration.

- Tags: set `mac,ios`
- Executor: set `shell`

Then, to install/launch the runner:

```bash
cd ~
gitlab-runner install
gitlab-runner start
```

Runner is installed and will be run after a system reboot.

Now, you can uncomment the job `build-and-deploy-ios` in `.gitlab-ci.yml` to make the app build and deployement work.
