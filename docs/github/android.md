# Publish to Google Play

### 1- Install [fastlane](https://docs.fastlane.tools/getting-started/android/setup/)

There are different ways of installing fastlane,
but the recommended approach is to make a Gemfile with following content :

```bash
# fastlane/Gemfile
source "https://rubygems.org"
gem "fastlane"
```

Then run `bundle install`

This will create a `Gemfile.lock`, upload both `Gemfile` and `Gemfile.lock` to your repo .

### 2- Prepare Google play

- You need to manually upload your **first** version of application to google play

The output should be signed using a signing key , this can be done by creating signing key from
[Unity/Player Settings/Publishing Settings](https://docs.unity3d.com/2017.3/Documentation/Manual/class-PlayerSettingsAndroid.html) .

- Follow the setup steps from [this link](https://docs.fastlane.tools/actions/supply/) to create a service account

> -- **Note:** Keep your keystore and service_account.json file somewhere safe , you will need it later to upload new releases

### 3- Add following fastlane files to your Fastlane folder

```bash
# fastlane/Appfile
for_platform :android do
  package_name(ENV["ANDROID_PACKAGE_NAME"])
  json_key_file(ENV["GOOGLE_PLAY_KEY_FILE_PATH"])
end
```

```bash
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

### 4- Add Github action

```yaml
# .github/workflows/main.yml
BuildForAndroidPlatform:
  name: Build For Android Platform
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v2
    - uses: actions/cache@v2
      with:
        path: Library
        key: Library-Android
    - uses: webbertakken/unity-builder@v2.0-alpha-6
      with:
        unityVersion: 2020.2.2
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

ReleaseToGooglePlay:
  name: Release to the Google Play Store
  runs-on: ubuntu-latest
  needs: buildForAndroidPlatform
  env:
    GOOGLE_PLAY_KEY_FILE: ${{ secrets.FASTLANE_SERVICE_ACCOUNT }}
    GOOGLE_PLAY_KEY_FILE_PATH: ${{ format('{0}/fastlane/google-faslane.json', github.workspace) }}
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
    - name: Prepare for Upload
      run: echo "$GOOGLE_PLAY_KEY_FILE" > $GOOGLE_PLAY_KEY_FILE_PATH
    - uses: actions/cache@v2
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
    - name: Tidy up artifact to avoid storage limit
      uses: geekyeggo/delete-artifact@v1
      with:
        name: build-Android
```

### 5- Add secrets to your Github repo

- **ANDROID_KEYSTORE_BASE64** : Base64 of your keystore in step 1 (You can use an online base64 encoder for this)
- **ANDROID_KEYSTORE_PASS**: Password of your keystore
- **ANDROID_KEYALIAS_NAME**: Alias name of your keystore
- **ANDROID_KEYALIAS_PASS**: Password for your alias name in key store
- **GOOGLE_PLAY_KEY_FILE**: Your google account service .json file downloaded from step 2
- **ANDROID_PACKAGE_NAME**: Your application package name e.g com.company.application
