# Deploy to the App Store

This guide is intended to help with automating iOS builds and uploads to the App Store.
This guide assumes that you already have experience with [using xCode for distribution](https://developer.apple.com/documentation/xcode/preparing-your-app-for-distribution).
It is important to be familiar with the manual process, as automating this process can be complicated.

> -- **Note:** Make sure you do all these steps carefully.
>
> -- **Note:** You need a Mac environment for doing these steps.
> A Mac is also recommended for debugging any issues with this workflow.

### 1- Install fastlane

The recommended approach to install [fastlane](https://docs.fastlane.tools/getting-started/ios/setup/)
is to make a `Gemfile` with following content:

```ruby
# Gemfile
source "https://rubygems.org"
gem "fastlane"
```

Then run `bundle install` to create the `Gemfile.lock`

Upload both `Gemfile` and `Gemfile.lock` to your repo.

### 2- Create storage for Apple certifications

Fastlane has a nice implementation of the [codesigning.guide concept](https://codesigning.guide/)
called match. It basically uploads all necessary keys and certificates to a storage of your
choice (private git repo, Amazon S3, etc) and then shares it between your different development envs.

For using match:

- Create a private git repository

- Run `fastlane match appstore` which will ask for your github repository
  and AppleId, and then upload your certificates to the private git repository.

> -- **Note:** Make sure your AppleId has two-step Authentication and has enough
> access.

### 3- Add the following fastlane files to your fastlane folder

```ruby
# fastlane/Appfile

for_platform :ios do
  app_identifier(ENV["IOS_APP_ID"])

  apple_dev_portal_id(ENV["APPLE_DEVELOPER_EMAIL"])
  itunes_connect_id(ENV["APPLE_CONNECT_EMAIL"])

  team_id(ENV["APPLE_TEAM_ID"])
  itc_team_id(ENV["APPLE_TEAM_ID"])
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
      plist_path: "Info.plist",
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
      key_id: ENV["APPSTORE_KEY_ID"],
      issuer_id: ENV["APPSTORE_ISSUER_ID"],
      key_content: ENV['APPSTORE_P8']
      duration: 1200, # optional
      in_house: false, # true for enterprise and false for individual accounts
    )
    match(
      type: "appstore",
      storage_mode: "git",
      git_url: ENV["MATCH_URL"],
      git_basic_authorization: ENV["MATCH_GIT_BASIC_AUTHORIZATION"],
      app_identifier: ENV["IOS_APP_ID"]
    )
    update_code_signing_settings(
      use_automatic_signing: true,
      path: "#{ENV['IOS_BUILD_PATH']}/iOS/Unity-iPhone.xcodeproj"
    )
    update_code_signing_settings(
      use_automatic_signing: false,
      team_id: ENV["sigh_#{ENV['IOS_APP_ID']}_appstore_team-id"],
      code_sign_identity: "iPhone Distribution",
      targets: 'Unity-iPhone',
      path: "#{ENV['IOS_BUILD_PATH']}/iOS/Unity-iPhone.xcodeproj",
      profile_name: ENV["sigh_#{ENV['IOS_APP_ID']}_appstore_profile-name"],
      profile_uuid: ENV["sigh_#{ENV['IOS_APP_ID']}_appstore"]
    )
    build_app(
      project: "#{ENV['IOS_BUILD_PATH']}/iOS/Unity-iPhone.xcodeproj",
      scheme: "Unity-iPhone",
      xcargs: "-allowProvisioningUpdates"
    )
  end

end
```

> -- **Note:** If you add libraries that need `Podfile` (e.g. Firebase) to your project,
> add this line to the beginning of your build step:

```ruby
    cocoapods(
      clean_install: true,
      podfile: "#{ENV['IOS_BUILD_PATH']}/iOS/"
    )
```

This will install pods and generate the `xcworkspace` for you.

Then change the build_app section so that it uses the new `xcworkspace`:

```ruby
    build_app(
      workspace: "#{ENV['IOS_BUILD_PATH']}/iOS/Unity-iPhone.xcworkspace",
      scheme: "Unity-iPhone",
      xcargs: "-allowProvisioningUpdates"
    )
```

### 4- Add jobs to your GitHub workflow

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
          APPLE_TEAM_NAME: ${{ secrets.APPLE_TEAM_NAME }}
          MATCH_REPOSITORY: ${{ secrets.MATCH_REPOSITORY }}
          MATCH_GIT_BASIC_AUTHORIZATION: ${{ secrets.MATCH_GIT_BASIC_AUTHORIZATION }}
          MATCH_PASSWORD: ${{ secrets.MATCH_PASSWORD }}
          APPSTORE_KEY_ID: ${{ secrets.APPSTORE_KEY_ID }}
          APPSTORE_ISSUER_ID: ${{ secrets.APPSTORE_ISSUER_ID }}
          APPSTORE_P8: ${{ secrets.APPSTORE_P8 }}
          IOS_APP_ID: com.company.application # Change it to match your unity bundle id
          IOS_BUILD_PATH: ${{ format('{0}/build/iOS', github.workspace) }}
          PROJECT_NAME: Your Project Name
        run: |
          find $IOS_BUILD_PATH -type f -name "**.sh" -exec chmod +x {} \;
          bundle install
          bundle exec fastlane ios beta
      - name: Cleanup to avoid storage limit
        if: always()
        uses: geekyeggo/delete-artifact@v1
        with:
          name: build-iOS
```

### 5- Add secrets to your GitHub repo

- **APPLE_CONNECT_EMAIL**: Apple connect email (usually same as APPLE_DEVELOPER_EMAIL)
- **APPLE_DEVELOPER_EMAIL**: Your AppleId
- **APPLE_TEAM_ID**: Team Id from your [Apple Developer Account - Membership Details](https://developer.apple.com/account/#/membership/)
- **APPLE_TEAM_NAME**: Team Name from your [Apple Developer Account - Membership Details](https://developer.apple.com/account/#/membership/)
- **MATCH_REPOSITORY**: Url to which `fastlane match appstore` uploaded certificates. For example, https://github.com/game-ci/match would be `git@github.com:game-ci/match.git`
- **MATCH_GIT_BASIC_AUTHORIZATION**: Base64 key of your GitHub Personal Access Token (PAT), generated with `echo -n <username>:<PAT> | base64`;
  See [Fastlane's Match documentation](https://docs.fastlane.tools/actions/match/#git-storage-on-github) for details
- **MATCH_PASSWORD**: The password you set with `fastlane match appstore`
- **APPSTORE_KEY_ID, APPSTORE_ISSUER_ID, APPSTORE_P8**: Because of limitations of using Apple accounts
  with 2FA (2-factor authentication) in CI environments, you have to
  make a special key for accessing the App Store. Follow the [fastlane official guide](https://docs.fastlane.tools/app-store-connect-api/)
  to generate these values.

### 6- Update Unity settings

- Add your [application icon(s)](https://docs.unity3d.com/Manual/class-PlayerSettingsiOS.html#icon) (applications without an icon generate an error while uploading to TestFlight)
- Set your Bundle Identifier and Signing Team ID in the [iOS Player settings - Identification settings](https://docs.unity3d.com/Manual/class-PlayerSettingsiOS.html#Identification)

### 7 - Ensure App Exists in App Store Connect

- Go to Apple's [App Store Connect](https://appstoreconnect.apple.com/)
- Select Apps, and add the App with the same Bundle Identifier as used earlier
