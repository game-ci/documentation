# Deploy to the App Store

This guide is intended to help with automating iOS builds and uploads to the App Store.
This guide assumes that you already have experience with [using Xcode for distribution](https://developer.apple.com/documentation/xcode/preparing-your-app-for-distribution).
It is important to be familiar with the manual process, as automating this process can be complicated.

> -- **Note:** Make sure you do all these steps carefully.
>
> -- **Note:** You need a Mac environment for doing these steps.
> A Mac is also recommended for debugging any issues with this workflow.

### Conceptual Overview

When you build your Unity project for iOS, Unity will produce an Xcode project that needs to be built using Xcode on a Mac. In order to upload your app to the App Store, TestFlight, or a third-party beta distribution service, you will first need to build it in Xcode and then code-sign it.

### 1- Install Fastlane

[Fastlane](https://docs.fastlane.tools/getting-started/ios/setup/) is a tool that can facilitate building, codesigning, and uploading iOS apps, and is the easiest way to deploy your Unity project to iOS.

To configure Fastlane for your GitHub Actions workflow runners, you will need to locally set up a `Gemfile` and `Fastfile` within your project. A `Gemfile` specifies what Ruby dependencies are needed to set up and run Fastlane (which is written in Ruby), and a `Fastfile` will be how you configure your iOS build settings. We will set up the `Gemfile` now, and the `Fastfile` in a later step.

You will need your local machine to have [Ruby](https://www.ruby-lang.org/en/documentation/installation/) installed, as well as Bundler. If you have Ruby installed but are unsure if you have Bundler, you can run the following to install it:

```bash
gem install bundler
```

From there, create a file called `Gemfile` in the root of your git repository with following content:

```ruby
# Gemfile
source "https://rubygems.org"
gem "fastlane"
```

Then run `bundle install`. This will create an additional `Gemfile.lock` file in the root of your project.

Commit both `Gemfile` and `Gemfile.lock` to your repo.

### 2- Create and Store Codesigning Certificates

Codesigning your iOS app for distribution requires an Apple developer or distribution certificate. Traditionally, allowing multiple developers on a team to build the same app (or allowing builds on a cloud CI system) requires you to either manually share a `.p12` file across all machines that will build the project, or set up a different codesigning identity for each developer or shared build machine. Updating all of these identities and certificates whenever changes are necessary can be a pain point.

Fastlane includes a tool called [Fastlane Match](https://docs.fastlane.tools/actions/match/) to simplify this process. It will store all of your codesigning identities and certificates securely on the cloud (typically in a private git repo, although you may opt to use a Google Cloud Storage or Amazon S3 bucket), and automatically download the correct certificates whenever Fastlane executes an Xcode build in any environment. Additionally, it can automatically manage your certificates and identities for you, interacting directly with Apple's APIs instead of requiring you to create and manage certificates through the developer portal.

The Match setup described below is a common workflow that is likely to be a good fit for many GameCI users. However, there are a number of different ways you can set up Match, and we recommend reading the Match [documentation](https://docs.fastlane.tools/actions/match/) and [codesigning guide](https://codesigning.guide) in their entirety.

If you do not already have a single shared Apple ID to be used by all developers and on all CI environments, create a new one.

If your Apple Developer account is messy and has lots of invalid, expired, or Xcode-managed profiles and certificates, you may **optionally** want to use Match to initially clean out your old developer portal by running `bundle exec fastlane match development` and `bundle exec fastlane match production`. **This will delete Apple codesigning identities and certificates and may break any existing workflows. It is NOT recommended if your project shares an Apple Developer account with other projects or teams at your company.**

Next, create a private git repository to store your certificates.

From the command-line on your Mac, run the following to generate new Development and Distribution certificates. It will ask you for the Apple ID and password of your new shared Apple ID, as well as a password used to encrypt the git repo. You will need to use this password later; it's recommended you use a team-wide password manager or similar shared secure keystore to both generate and store this password.

```bash
bundle exec fastlane match development
bundle exec fastlane match appstore
```

### 3- Generate an App Store Connect API Key

In order for Fastlane Match to fetch and validate your codesigning certificates, it needs to authenticate you with Apple. All Apple IDs now require two-factor authentication to be enabled, which means you need to manually enter a 2FA code when logging in. This is fine if you're running match locally on your own machine, but is a problem on an automated CI system.

To work around this, you will need to generate an App Store Connect API key, which match can use to authenticate you with Apple without manual 2FA input while running on CI.

Go to https://appstoreconnect.apple.com/access/users and log in. Go to the "Keys" tab and click the plus sign (+) to generate a new set of keys. Enter a name and select "Developer" access. Once it's been generated, click the "Download API key" link, which will download a file. Note you can only do this once. Later on in this guide, you will need the "key ID" from the table row for your newly-generated key, the "issuer ID" displayed at the top of the page, and the downloaded .p8 file.

### 4- Configure Fastlane to build

At this point, you will have a private git repository that contains new valid codesigning identities and certificates. From here, you need to configure Fastlane to know how to build your Xcode project. Within your project directory, create a directory called `fastlane`, and then create two files within that directory, `Appfile` and `Fastfile`.

```ruby
# fastlane/Appfile

for_platform :ios do
  app_identifier(ENV['IOS_BUNDLE_ID'])

  apple_dev_portal_id(ENV['APPLE_DEVELOPER_EMAIL'])
  itunes_connect_id(ENV['APPLE_CONNECT_EMAIL'])

  team_id(ENV['APPLE_TEAM_ID'])
  itc_team_id(ENV['APPLE_TEAM_ID'])
end
```

```ruby
# fastlane/Fastfile

platform :ios do

  desc "Deliver a new Release build to the App Store"
  lane :release do
    build
    upload_to_app_store
  end

  desc "Deliver a new Beta build to Apple TestFlight"
  lane :beta do
    # Missing Export Compliance can also be set through Deliverfile
    update_info_plist(
      xcodeproj: "#{ENV['IOS_BUILD_PATH']}/iOS/Unity-iPhone.xcodeproj",
      plist_path: 'Info.plist',
      block: proc do |plist|
        plist['ITSAppUsesNonExemptEncryption'] = false
      end
    )
    build
    upload_to_testflight(skip_waiting_for_build_processing: true)
  end

  desc "Create .ipa"
  lane :build do
    setup_ci
    app_store_connect_api_key(
      key_id: ENV['APPSTORE_KEY_ID'],
      issuer_id: ENV['APPSTORE_ISSUER_ID'],
      key_content: ENV["APPSTORE_P8"]
    )

    match(
      type: 'appstore',
      storage_mode: 'git',
      git_url: ENV['MATCH_URL'],
      git_basic_authorization: Base64.strict_encode64("#{ENV['APPLE_CONNECT_EMAIL']}:#{ENV['MATCH_PERSONAL_ACCESS_TOKEN']}"),
      app_identifier: ENV['IOS_BUNDLE_ID']
    )

    # Unity has specific requirements around codesigning that we have to handle
    # See https://github.com/fastlane/fastlane/discussions/17458 for context
    update_code_signing_settings(
      use_automatic_signing: true,
      path: "#{ENV['IOS_BUILD_PATH']}/iOS/Unity-iPhone.xcodeproj"
    )

    update_code_signing_settings(
      use_automatic_signing: false,
      team_id: ENV["sigh_#{ENV['IOS_BUNDLE_ID']}_appstore_team-id"],
      code_sign_identity: 'iPhone Distribution',
      targets: 'Unity-iPhone',
      path: "#{ENV['IOS_BUILD_PATH']}/iOS/Unity-iPhone.xcodeproj",
      profile_name: ENV["sigh_#{ENV['IOS_BUNDLE_ID']}_appstore_profile-name"],
      profile_uuid: ENV["sigh_#{ENV['IOS_BUNDLE_ID']}_appstore"]
    )

    build_app(
      project: "#{ENV['IOS_BUILD_PATH']}/iOS/Unity-iPhone.xcodeproj",
      scheme: 'Unity-iPhone',
      xcargs: '-allowProvisioningUpdates'
    )
  end

end
```

> -- **Note:** If you add libraries that need `Podfile` (e.g. Firebase) to your project,
> add this line to the beginning of your build step (the block of code starting with `lane :build do`):

```ruby
    cocoapods(
      clean_install: true,
      podfile: "#{ENV['IOS_BUILD_PATH']}/iOS/"
    )
```

This will install pods and generate the `xcworkspace` for you.

Then change the `build_app` step at the end of this build phase to use the new `xcworkspace` instead of the old `xcodeproj`:

```ruby
    build_app(
      workspace: "#{ENV['IOS_BUILD_PATH']}/iOS/Unity-iPhone.xcworkspace",
      scheme: 'Unity-iPhone',
      xcargs: '-allowProvisioningUpdates'
    )
```

### 4- Add jobs to your GitHub Actions workflow

Building for iOS requires two steps: Unity builds your project and generates an Xcode project, which then must be built in Xcode via Fastlane. This workflow below splits that across two jobs: the Unity build happens on Linux (which is cheaper per minute), uploads the generated Xcode project as an artifact to the Action run, and then downloads that Xcode project on a Mac runner to finish up the build from there. If your project requires IL2CPP, you will need to complete the Unity build on a Mac runner.

The `releaseToAppStore` job below builds your app and submits it to Apple for App Store release. If you want to submit your app for TestFlight distribution, you can create a job that is identical except it runs `bundle exec fastlane beta` instead of `bundle exec fastlane release`. You can build your iOS app without uploading it (e.g. to confirm it builds successfully, or as a preparation step before uploading to an alternative distribution service) by instead running `bundle exec fastlane build`.

Please note that Apple will aggressively rate-limit you if you try to upload builds too frequently. We recommend you configure any workflow that submits to the App Store or TestFlight to be manually triggered, or otherwise make sure it won't automatically run more than a few times a day.

```yaml
# .github/workflows/main.yml
jobs:
  buildForiOSPlatform:
    name: Build for iOS
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - uses: actions/cache@v2
        with:
          path: Library
          key: Library-iOS

      - uses: game-ci/unity-builder@v2
        with:
          targetPlatform: iOS

      - uses: actions/upload-artifact@v2
        with:
          name: build-iOS
          path: build/iOS

  releaseToAppStore:
    name: Release to the App Store
    runs-on: macos-latest
    needs: buildForiOSPlatform
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v2

      - name: Download iOS Artifact
        uses: actions/download-artifact@v2
        with:
          name: build-iOS
          path: build/iOS

      - name: Fix File Permissions and Run Fastlane
        env:
          APPLE_CONNECT_EMAIL: ${{ secrets.APPLE_CONNECT_EMAIL }}
          APPLE_DEVELOPER_EMAIL: ${{ secrets.APPLE_DEVELOPER_EMAIL }}
          APPLE_TEAM_ID: ${{ secrets.APPLE_TEAM_ID }}

          MATCH_URL: ${{ secrets.MATCH_URL }}
          MATCH_PERSONAL_ACCESS_TOKEN: ${{ secrets.MATCH_PERSONAL_ACCESS_TOKEN }}
          MATCH_PASSWORD: ${{ secrets.MATCH_PASSWORD }}

          APPSTORE_KEY_ID: ${{ secrets.APPSTORE_KEY_ID }}
          APPSTORE_ISSUER_ID: ${{ secrets.APPSTORE_ISSUER_ID }}
          APPSTORE_P8: ${{ secrets.APPSTORE_P8 }}

          IOS_BUNDLE_ID: com.company.application # Change it to match your Unity bundle id
          IOS_BUILD_PATH: ${{ format('{0}/build/iOS', github.workspace) }}
          PROJECT_NAME: Your Project Name
        run: |
          find $IOS_BUILD_PATH -type f -name "**.sh" -exec chmod +x {} \;
          bundle install
          bundle exec fastlane ios release

      - name: Cleanup to avoid storage limit
        if: always()
        uses: geekyeggo/delete-artifact@v1
        with:
          name: build-iOS
```

### 5- Add secrets to your GitHub repo

On your project's GitHub repo page, add a number of Repository Secrest by going to Settings -> Secrets and clicking the "New repository secret" button in the top-right.

- **APPLE_CONNECT_EMAIL**: Apple Connect email (if using our recommendation to create a single shared developer Apple ID for Fastlane Match, this will be the same as `APPLE_DEVELOPER_EMAIL`)
- **APPLE_DEVELOPER_EMAIL**: Your Apple ID
- **APPLE_TEAM_ID**: Team Id from your [Apple Developer Account - Membership Details](https://developer.apple.com/account/#/membership/)
- **MATCH_URL**: Https url for the private git repo to which `fastlane match appstore` uploaded certificates.
- **MATCH_PERSONAL_ACCESS_TOKEN**: GitHub [Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) with full repo access to MATCH_URL
- **MATCH_PASSWORD**: The password you set when configuring Fastlane Match.
- **APPSTORE_KEY_ID, APPSTORE_ISSUER_ID, APPSTORE_P8**: Your App Store Connect API keys from the previous step. `APPSTORE_KEY_ID` is the "Key ID" from the table row, `APPSTORE_ISSUER_ID` is your issuer ID from the top of the page, and `APPSTORE_P8` is the entire contents of the `.p8` file you downloaded, starting with `-----BEGIN PRIVATE KEY-----` and ending with `-----END PRIVATE KEY-----`.

### 6- Update Unity settings

- Add your [application icon(s)](https://docs.unity3d.com/Manual/class-PlayerSettingsiOS.html#icon) (applications without an icon generate an error while uploading to TestFlight)
- Set your Bundle Identifier and Signing Team ID in the [iOS Player settings - Identification settings](https://docs.unity3d.com/Manual/class-PlayerSettingsiOS.html#Identification)

### 7 - Ensure App Exists in App Store Connect

- Go to Apple's [App Store Connect](https://appstoreconnect.apple.com/)
- Select Apps, and add the App with the same Bundle Identifier as used earlier
