# Deploy to Google Play

### 1- Install fastlane

The recommended approach to install [fastlane](https://docs.fastlane.tools/getting-started/android/setup/)
is to make a `Gemfile` with following content:

```ruby
# Gemfile
source "https://rubygems.org"
gem "fastlane"
```

Then run `bundle install` to create the `Gemfile.lock`

Upload both `Gemfile` and `Gemfile.lock` to your repo.

### 2- Prepare Google Play

- You need to manually upload your **first** version of your application to Google Play.

The output should be signed using a signing key. This can be done by creating the signing key from
[Unity/Player Settings/Publishing Settings](https://docs.unity3d.com/2017.3/Documentation/Manual/class-PlayerSettingsAndroid.html) .

- Follow the setup steps from [these fastlane docs](https://docs.fastlane.tools/actions/supply/) to create a service account.

> -- **Note:** Keep your keystore and service_account.json file somewhere safe. You will need them later to upload new releases.

### 3- Add the following fastlane files to your fastlane folder

```ruby
# fastlane/Appfile
for_platform :android do
  package_name(ENV["ANDROID_PACKAGE_NAME"])
  json_key_file(ENV["GOOGLE_PLAY_KEY_FILE_PATH"])
end
```

```ruby
# fastlane/Fastfile
platform :android do
  desc "Upload a new Android version to the Google Play Store"
  lane :internal do
    upload_to_play_store(track: 'internal',release_status: 'completed',aab: "#{ENV['ANDROID_BUILD_FILE_PATH']}")
  end
  lane :alpha do
    upload_to_play_store(track: 'alpha',release_status: 'completed',aab: "#{ENV['ANDROID_BUILD_FILE_PATH']}")
  end
end
```

### 4- Add jobs to your GitHub workflow

```yaml
# .github/workflows/main.yml
jobs:
  buildForAndroidPlatform:
    name: Build For Android Platform
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/cache@v2
        with:
          path: Library
          key: Library-Android
      - uses: game-ci/unity-builder@v2
        with:
          targetPlatform: Android
          androidAppBundle: true
          androidKeystoreName: user.keystore
          androidKeystoreBase64: ${{ secrets.ANDROID_KEYSTORE_BASE64 }}
          androidKeystorePass: ${{ secrets.ANDROID_KEYSTORE_PASS }}
          androidKeyaliasName: ${{ secrets.ANDROID_KEYALIAS_NAME }}
          androidKeyaliasPass: ${{ secrets.ANDROID_KEYALIAS_PASS }}
      - uses: actions/upload-artifact@v2
        with:
          name: build-Android
          path: build/Android

  releaseToGooglePlay:
    name: Release to the Google Play Store
    runs-on: ubuntu-latest
    needs: buildForAndroidPlatform
    env:
      GOOGLE_PLAY_KEY_FILE: ${{ secrets.GOOGLE_PLAY_KEY_FILE }}
      GOOGLE_PLAY_KEY_FILE_PATH: ${{ format('{0}/fastlane/google-fastlane.json', github.workspace) }}
      ANDROID_BUILD_FILE_PATH: ${{ format('{0}/build/Android/Android.aab', github.workspace) }}
      ANDROID_PACKAGE_NAME: ${{ secrets.ANDROID_PACKAGE_NAME }}
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v2
      - name: Download Android Artifact
        uses: actions/download-artifact@v2
        with:
          name: build-Android
          path: build/Android
      - name: Add Authentication
        run: echo "$GOOGLE_PLAY_KEY_FILE" > $GOOGLE_PLAY_KEY_FILE_PATH
      - name: Cache Fastlane Dependencies
        uses: actions/cache@v2
        with:
          path: vendor/bundle
          key: ${{ runner.os }}-${{ hashFiles('**/Gemfile.lock') }}
      - name: Install Fastlane
        run: bundle install
      - name: Upload to Google Play Internal
        uses: maierj/fastlane-action@v2.0.0
        with:
          lane: 'android internal'
      # Uncomment to upload to alpha branch
      #    - name: Upload to Google Play Alpha
      #      uses: maierj/fastlane-action@v2.0.0
      #      with:
      #        lane: 'android alpha'
      - name: Cleanup to avoid storage limit
        if: always()
        uses: geekyeggo/delete-artifact@v1
        with:
          name: build-Android
```

### 5- Add secrets to your Github repo

- **ANDROID_KEYSTORE_BASE64** : Base64 of your keystore in step 1 (You can use an online base64 encoder for this)
- **ANDROID_KEYSTORE_PASS**: Password for your keystore
- **ANDROID_KEYALIAS_NAME**: Name of the alias in your keystore
- **ANDROID_KEYALIAS_PASS**: Password for the alias in your keystore
- **GOOGLE_PLAY_KEY_FILE**: Your google account service .json file downloaded from step 2
- **ANDROID_PACKAGE_NAME**: Your application package name e.g com.company.application
