exports.ids = [22];
exports.modules = {

/***/ "./docs/github/v1/06-deployment/android.md":
/*!*************************************************!*\
  !*** ./docs/github/v1/06-deployment/android.md ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("# Publish to Google Play\r\n\r\n### 1- Install [fastlane](https://docs.fastlane.tools/getting-started/android/setup/)\r\n\r\nThere are different ways of installing fastlane,\r\nbut the recommended approach is to make a Gemfile with following content :\r\n\r\n```bash\r\n# fastlane/Gemfile\r\nsource \"https://rubygems.org\"\r\ngem \"fastlane\"\r\n```\r\n\r\nThen run `bundle install`\r\n\r\nThis will create a `Gemfile.lock`, upload both `Gemfile` and `Gemfile.lock` to your repo .\r\n\r\n### 2- Prepare Google play\r\n\r\n- You need to manually upload your **first** version of application to google play\r\n\r\nThe output should be signed using a signing key , this can be done by creating signing key from\r\n[Unity/Player Settings/Publishing Settings](https://docs.unity3d.com/2017.3/Documentation/Manual/class-PlayerSettingsAndroid.html) .\r\n\r\n- Follow the setup steps from [this link](https://docs.fastlane.tools/actions/supply/) to create a service account\r\n\r\n> -- **Note:** Keep your keystore and service_account.json file somewhere safe , you will need it later to upload new releases\r\n\r\n### 3- Add following fastlane files to your Fastlane folder\r\n\r\n```bash\r\n# fastlane/Appfile\r\nfor_platform :android do\r\n  package_name(ENV[\"ANDROID_PACKAGE_NAME\"])\r\n  json_key_file(ENV[\"GOOGLE_PLAY_KEY_FILE_PATH\"])\r\nend\r\n```\r\n\r\n```bash\r\n# fastlane/Fastfile\r\nplatform :android do\r\n  desc \"Upload a new Android version to the Google Play Store\"\r\n  lane :internal do\r\n    upload_to_play_store(track: 'internal',release_status: 'completed',aab: \"#{ENV['ANDROID_BUILD_FILE_PATH']}\")\r\n  end\r\n  lane :alpha do\r\n    upload_to_play_store(track: 'alpha',release_status: 'completed',aab: \"#{ENV['ANDROID_BUILD_FILE_PATH']}\")\r\n  end\r\nend\r\n```\r\n\r\n### 4- Add Github action\r\n\r\n```yaml\r\n# .github/workflows/main.yml\r\nBuildForAndroidPlatform:\r\n  name: Build For Android Platform\r\n  runs-on: ubuntu-latest\r\n  steps:\r\n    - uses: actions/checkout@v2\r\n    - uses: actions/cache@v2\r\n      with:\r\n        path: Library\r\n        key: Library-Android\r\n    - uses: webbertakken/unity-builder@v1.5\r\n      with:\r\n        targetPlatform: Android\r\n        androidAppBundle: true\r\n        androidKeystoreName: user.keystore\r\n        androidKeystoreBase64: ${{ secrets.ANDROID_KEYSTORE_BASE64 }}\r\n        androidKeystorePass: ${{ secrets.ANDROID_KEYSTORE_PASS }}\r\n        androidKeyaliasName: ${{ secrets.ANDROID_KEYALIAS_NAME }}\r\n        androidKeyaliasPass: ${{ secrets.ANDROID_KEYALIAS_PASS }}\r\n    - uses: actions/upload-artifact@v2\r\n      with:\r\n        name: build-Android\r\n        path: build/Android\r\n\r\nReleaseToGooglePlay:\r\n  name: Release to the Google Play Store\r\n  runs-on: ubuntu-latest\r\n  needs: buildForAndroidPlatform\r\n  env:\r\n    GOOGLE_PLAY_KEY_FILE: ${{ secrets.FASTLANE_SERVICE_ACCOUNT }}\r\n    GOOGLE_PLAY_KEY_FILE_PATH: ${{ format('{0}/fastlane/google-fastlane.json', github.workspace) }}\r\n    ANDROID_BUILD_FILE_PATH: ${{ format('{0}/build/Android/Android.aab', github.workspace) }}\r\n    ANDROID_PACKAGE_NAME: ${{ secrets.ANDROID_PACKAGE_NAME }}\r\n  steps:\r\n    - name: Checkout Repository\r\n      uses: actions/checkout@v2\r\n    - name: Download Android Artifact\r\n      uses: actions/download-artifact@v2\r\n      with:\r\n        name: build-Android\r\n        path: build/Android\r\n    - name: Prepare for Upload\r\n      run: echo \"$GOOGLE_PLAY_KEY_FILE\" > $GOOGLE_PLAY_KEY_FILE_PATH\r\n    - uses: actions/cache@v2\r\n      with:\r\n        path: vendor/bundle\r\n        key: ${{ runner.os }}-${{ hashFiles('**/Gemfile.lock') }}\r\n    - name: Install Fastlane\r\n      run: bundle install\r\n    - name: Upload to Google Play Internal\r\n      uses: maierj/fastlane-action@v2.0.0\r\n      with:\r\n        lane: 'android internal'\r\n    # Uncomment to upload to alpha branch\r\n    #    - name: Upload to Google Play Alpha\r\n    #      uses: maierj/fastlane-action@v2.0.0\r\n    #      with:\r\n    #        lane: 'android alpha'\r\n    - name: Tidy up artifact to avoid storage limit\r\n      uses: geekyeggo/delete-artifact@v1\r\n      with:\r\n        name: build-Android\r\n```\r\n\r\n### 5- Add secrets to your Github repo\r\n\r\n- **ANDROID_KEYSTORE_BASE64** : Base64 of your keystore in step 1 (You can use an online base64 encoder for this)\r\n- **ANDROID_KEYSTORE_PASS**: Password of your keystore\r\n- **ANDROID_KEYALIAS_NAME**: Alias name of your keystore\r\n- **ANDROID_KEYALIAS_PASS**: Password for your alias name in key store\r\n- **GOOGLE_PLAY_KEY_FILE**: Your google account service .json file downloaded from step 2\r\n- **ANDROID_PACKAGE_NAME**: Your application package name e.g com.company.application");

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kb2NzL2dpdGh1Yi92MS8wNi1kZXBsb3ltZW50L2FuZHJvaWQubWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUFlLG1uREFBb2pELCtCQUErQixpSEFBaUgsK0JBQStCLHFqQkFBcWpCLG1DQUFtQyxvQ0FBb0MsaUNBQWlDLG9DQUFvQyxpQ0FBaUMsb0NBQW9DLGlDQUFpQywwU0FBMFMsb0NBQW9DLHNDQUFzQyxVQUFVLEVBQUUscURBQXFELG9DQUFvQyxVQUFVLEVBQUUsaURBQWlELGlDQUFpQyxnQ0FBZ0Msa2NBQWtjLGFBQWEsSUFBSSxnQ0FBZ0MsMGtDQUEwa0MsRSIsImZpbGUiOiIyMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiIyBQdWJsaXNoIHRvIEdvb2dsZSBQbGF5XFxyXFxuXFxyXFxuIyMjIDEtIEluc3RhbGwgW2Zhc3RsYW5lXShodHRwczovL2RvY3MuZmFzdGxhbmUudG9vbHMvZ2V0dGluZy1zdGFydGVkL2FuZHJvaWQvc2V0dXAvKVxcclxcblxcclxcblRoZXJlIGFyZSBkaWZmZXJlbnQgd2F5cyBvZiBpbnN0YWxsaW5nIGZhc3RsYW5lLFxcclxcbmJ1dCB0aGUgcmVjb21tZW5kZWQgYXBwcm9hY2ggaXMgdG8gbWFrZSBhIEdlbWZpbGUgd2l0aCBmb2xsb3dpbmcgY29udGVudCA6XFxyXFxuXFxyXFxuYGBgYmFzaFxcclxcbiMgZmFzdGxhbmUvR2VtZmlsZVxcclxcbnNvdXJjZSBcXFwiaHR0cHM6Ly9ydWJ5Z2Vtcy5vcmdcXFwiXFxyXFxuZ2VtIFxcXCJmYXN0bGFuZVxcXCJcXHJcXG5gYGBcXHJcXG5cXHJcXG5UaGVuIHJ1biBgYnVuZGxlIGluc3RhbGxgXFxyXFxuXFxyXFxuVGhpcyB3aWxsIGNyZWF0ZSBhIGBHZW1maWxlLmxvY2tgLCB1cGxvYWQgYm90aCBgR2VtZmlsZWAgYW5kIGBHZW1maWxlLmxvY2tgIHRvIHlvdXIgcmVwbyAuXFxyXFxuXFxyXFxuIyMjIDItIFByZXBhcmUgR29vZ2xlIHBsYXlcXHJcXG5cXHJcXG4tIFlvdSBuZWVkIHRvIG1hbnVhbGx5IHVwbG9hZCB5b3VyICoqZmlyc3QqKiB2ZXJzaW9uIG9mIGFwcGxpY2F0aW9uIHRvIGdvb2dsZSBwbGF5XFxyXFxuXFxyXFxuVGhlIG91dHB1dCBzaG91bGQgYmUgc2lnbmVkIHVzaW5nIGEgc2lnbmluZyBrZXkgLCB0aGlzIGNhbiBiZSBkb25lIGJ5IGNyZWF0aW5nIHNpZ25pbmcga2V5IGZyb21cXHJcXG5bVW5pdHkvUGxheWVyIFNldHRpbmdzL1B1Ymxpc2hpbmcgU2V0dGluZ3NdKGh0dHBzOi8vZG9jcy51bml0eTNkLmNvbS8yMDE3LjMvRG9jdW1lbnRhdGlvbi9NYW51YWwvY2xhc3MtUGxheWVyU2V0dGluZ3NBbmRyb2lkLmh0bWwpIC5cXHJcXG5cXHJcXG4tIEZvbGxvdyB0aGUgc2V0dXAgc3RlcHMgZnJvbSBbdGhpcyBsaW5rXShodHRwczovL2RvY3MuZmFzdGxhbmUudG9vbHMvYWN0aW9ucy9zdXBwbHkvKSB0byBjcmVhdGUgYSBzZXJ2aWNlIGFjY291bnRcXHJcXG5cXHJcXG4+IC0tICoqTm90ZToqKiBLZWVwIHlvdXIga2V5c3RvcmUgYW5kIHNlcnZpY2VfYWNjb3VudC5qc29uIGZpbGUgc29tZXdoZXJlIHNhZmUgLCB5b3Ugd2lsbCBuZWVkIGl0IGxhdGVyIHRvIHVwbG9hZCBuZXcgcmVsZWFzZXNcXHJcXG5cXHJcXG4jIyMgMy0gQWRkIGZvbGxvd2luZyBmYXN0bGFuZSBmaWxlcyB0byB5b3VyIEZhc3RsYW5lIGZvbGRlclxcclxcblxcclxcbmBgYGJhc2hcXHJcXG4jIGZhc3RsYW5lL0FwcGZpbGVcXHJcXG5mb3JfcGxhdGZvcm0gOmFuZHJvaWQgZG9cXHJcXG4gIHBhY2thZ2VfbmFtZShFTlZbXFxcIkFORFJPSURfUEFDS0FHRV9OQU1FXFxcIl0pXFxyXFxuICBqc29uX2tleV9maWxlKEVOVltcXFwiR09PR0xFX1BMQVlfS0VZX0ZJTEVfUEFUSFxcXCJdKVxcclxcbmVuZFxcclxcbmBgYFxcclxcblxcclxcbmBgYGJhc2hcXHJcXG4jIGZhc3RsYW5lL0Zhc3RmaWxlXFxyXFxucGxhdGZvcm0gOmFuZHJvaWQgZG9cXHJcXG4gIGRlc2MgXFxcIlVwbG9hZCBhIG5ldyBBbmRyb2lkIHZlcnNpb24gdG8gdGhlIEdvb2dsZSBQbGF5IFN0b3JlXFxcIlxcclxcbiAgbGFuZSA6aW50ZXJuYWwgZG9cXHJcXG4gICAgdXBsb2FkX3RvX3BsYXlfc3RvcmUodHJhY2s6ICdpbnRlcm5hbCcscmVsZWFzZV9zdGF0dXM6ICdjb21wbGV0ZWQnLGFhYjogXFxcIiN7RU5WWydBTkRST0lEX0JVSUxEX0ZJTEVfUEFUSCddfVxcXCIpXFxyXFxuICBlbmRcXHJcXG4gIGxhbmUgOmFscGhhIGRvXFxyXFxuICAgIHVwbG9hZF90b19wbGF5X3N0b3JlKHRyYWNrOiAnYWxwaGEnLHJlbGVhc2Vfc3RhdHVzOiAnY29tcGxldGVkJyxhYWI6IFxcXCIje0VOVlsnQU5EUk9JRF9CVUlMRF9GSUxFX1BBVEgnXX1cXFwiKVxcclxcbiAgZW5kXFxyXFxuZW5kXFxyXFxuYGBgXFxyXFxuXFxyXFxuIyMjIDQtIEFkZCBHaXRodWIgYWN0aW9uXFxyXFxuXFxyXFxuYGBgeWFtbFxcclxcbiMgLmdpdGh1Yi93b3JrZmxvd3MvbWFpbi55bWxcXHJcXG5CdWlsZEZvckFuZHJvaWRQbGF0Zm9ybTpcXHJcXG4gIG5hbWU6IEJ1aWxkIEZvciBBbmRyb2lkIFBsYXRmb3JtXFxyXFxuICBydW5zLW9uOiB1YnVudHUtbGF0ZXN0XFxyXFxuICBzdGVwczpcXHJcXG4gICAgLSB1c2VzOiBhY3Rpb25zL2NoZWNrb3V0QHYyXFxyXFxuICAgIC0gdXNlczogYWN0aW9ucy9jYWNoZUB2MlxcclxcbiAgICAgIHdpdGg6XFxyXFxuICAgICAgICBwYXRoOiBMaWJyYXJ5XFxyXFxuICAgICAgICBrZXk6IExpYnJhcnktQW5kcm9pZFxcclxcbiAgICAtIHVzZXM6IHdlYmJlcnRha2tlbi91bml0eS1idWlsZGVyQHYxLjVcXHJcXG4gICAgICB3aXRoOlxcclxcbiAgICAgICAgdGFyZ2V0UGxhdGZvcm06IEFuZHJvaWRcXHJcXG4gICAgICAgIGFuZHJvaWRBcHBCdW5kbGU6IHRydWVcXHJcXG4gICAgICAgIGFuZHJvaWRLZXlzdG9yZU5hbWU6IHVzZXIua2V5c3RvcmVcXHJcXG4gICAgICAgIGFuZHJvaWRLZXlzdG9yZUJhc2U2NDogJHt7IHNlY3JldHMuQU5EUk9JRF9LRVlTVE9SRV9CQVNFNjQgfX1cXHJcXG4gICAgICAgIGFuZHJvaWRLZXlzdG9yZVBhc3M6ICR7eyBzZWNyZXRzLkFORFJPSURfS0VZU1RPUkVfUEFTUyB9fVxcclxcbiAgICAgICAgYW5kcm9pZEtleWFsaWFzTmFtZTogJHt7IHNlY3JldHMuQU5EUk9JRF9LRVlBTElBU19OQU1FIH19XFxyXFxuICAgICAgICBhbmRyb2lkS2V5YWxpYXNQYXNzOiAke3sgc2VjcmV0cy5BTkRST0lEX0tFWUFMSUFTX1BBU1MgfX1cXHJcXG4gICAgLSB1c2VzOiBhY3Rpb25zL3VwbG9hZC1hcnRpZmFjdEB2MlxcclxcbiAgICAgIHdpdGg6XFxyXFxuICAgICAgICBuYW1lOiBidWlsZC1BbmRyb2lkXFxyXFxuICAgICAgICBwYXRoOiBidWlsZC9BbmRyb2lkXFxyXFxuXFxyXFxuUmVsZWFzZVRvR29vZ2xlUGxheTpcXHJcXG4gIG5hbWU6IFJlbGVhc2UgdG8gdGhlIEdvb2dsZSBQbGF5IFN0b3JlXFxyXFxuICBydW5zLW9uOiB1YnVudHUtbGF0ZXN0XFxyXFxuICBuZWVkczogYnVpbGRGb3JBbmRyb2lkUGxhdGZvcm1cXHJcXG4gIGVudjpcXHJcXG4gICAgR09PR0xFX1BMQVlfS0VZX0ZJTEU6ICR7eyBzZWNyZXRzLkZBU1RMQU5FX1NFUlZJQ0VfQUNDT1VOVCB9fVxcclxcbiAgICBHT09HTEVfUExBWV9LRVlfRklMRV9QQVRIOiAke3sgZm9ybWF0KCd7MH0vZmFzdGxhbmUvZ29vZ2xlLWZhc3RsYW5lLmpzb24nLCBnaXRodWIud29ya3NwYWNlKSB9fVxcclxcbiAgICBBTkRST0lEX0JVSUxEX0ZJTEVfUEFUSDogJHt7IGZvcm1hdCgnezB9L2J1aWxkL0FuZHJvaWQvQW5kcm9pZC5hYWInLCBnaXRodWIud29ya3NwYWNlKSB9fVxcclxcbiAgICBBTkRST0lEX1BBQ0tBR0VfTkFNRTogJHt7IHNlY3JldHMuQU5EUk9JRF9QQUNLQUdFX05BTUUgfX1cXHJcXG4gIHN0ZXBzOlxcclxcbiAgICAtIG5hbWU6IENoZWNrb3V0IFJlcG9zaXRvcnlcXHJcXG4gICAgICB1c2VzOiBhY3Rpb25zL2NoZWNrb3V0QHYyXFxyXFxuICAgIC0gbmFtZTogRG93bmxvYWQgQW5kcm9pZCBBcnRpZmFjdFxcclxcbiAgICAgIHVzZXM6IGFjdGlvbnMvZG93bmxvYWQtYXJ0aWZhY3RAdjJcXHJcXG4gICAgICB3aXRoOlxcclxcbiAgICAgICAgbmFtZTogYnVpbGQtQW5kcm9pZFxcclxcbiAgICAgICAgcGF0aDogYnVpbGQvQW5kcm9pZFxcclxcbiAgICAtIG5hbWU6IFByZXBhcmUgZm9yIFVwbG9hZFxcclxcbiAgICAgIHJ1bjogZWNobyBcXFwiJEdPT0dMRV9QTEFZX0tFWV9GSUxFXFxcIiA+ICRHT09HTEVfUExBWV9LRVlfRklMRV9QQVRIXFxyXFxuICAgIC0gdXNlczogYWN0aW9ucy9jYWNoZUB2MlxcclxcbiAgICAgIHdpdGg6XFxyXFxuICAgICAgICBwYXRoOiB2ZW5kb3IvYnVuZGxlXFxyXFxuICAgICAgICBrZXk6ICR7eyBydW5uZXIub3MgfX0tJHt7IGhhc2hGaWxlcygnKiovR2VtZmlsZS5sb2NrJykgfX1cXHJcXG4gICAgLSBuYW1lOiBJbnN0YWxsIEZhc3RsYW5lXFxyXFxuICAgICAgcnVuOiBidW5kbGUgaW5zdGFsbFxcclxcbiAgICAtIG5hbWU6IFVwbG9hZCB0byBHb29nbGUgUGxheSBJbnRlcm5hbFxcclxcbiAgICAgIHVzZXM6IG1haWVyai9mYXN0bGFuZS1hY3Rpb25AdjIuMC4wXFxyXFxuICAgICAgd2l0aDpcXHJcXG4gICAgICAgIGxhbmU6ICdhbmRyb2lkIGludGVybmFsJ1xcclxcbiAgICAjIFVuY29tbWVudCB0byB1cGxvYWQgdG8gYWxwaGEgYnJhbmNoXFxyXFxuICAgICMgICAgLSBuYW1lOiBVcGxvYWQgdG8gR29vZ2xlIFBsYXkgQWxwaGFcXHJcXG4gICAgIyAgICAgIHVzZXM6IG1haWVyai9mYXN0bGFuZS1hY3Rpb25AdjIuMC4wXFxyXFxuICAgICMgICAgICB3aXRoOlxcclxcbiAgICAjICAgICAgICBsYW5lOiAnYW5kcm9pZCBhbHBoYSdcXHJcXG4gICAgLSBuYW1lOiBUaWR5IHVwIGFydGlmYWN0IHRvIGF2b2lkIHN0b3JhZ2UgbGltaXRcXHJcXG4gICAgICB1c2VzOiBnZWVreWVnZ28vZGVsZXRlLWFydGlmYWN0QHYxXFxyXFxuICAgICAgd2l0aDpcXHJcXG4gICAgICAgIG5hbWU6IGJ1aWxkLUFuZHJvaWRcXHJcXG5gYGBcXHJcXG5cXHJcXG4jIyMgNS0gQWRkIHNlY3JldHMgdG8geW91ciBHaXRodWIgcmVwb1xcclxcblxcclxcbi0gKipBTkRST0lEX0tFWVNUT1JFX0JBU0U2NCoqIDogQmFzZTY0IG9mIHlvdXIga2V5c3RvcmUgaW4gc3RlcCAxIChZb3UgY2FuIHVzZSBhbiBvbmxpbmUgYmFzZTY0IGVuY29kZXIgZm9yIHRoaXMpXFxyXFxuLSAqKkFORFJPSURfS0VZU1RPUkVfUEFTUyoqOiBQYXNzd29yZCBvZiB5b3VyIGtleXN0b3JlXFxyXFxuLSAqKkFORFJPSURfS0VZQUxJQVNfTkFNRSoqOiBBbGlhcyBuYW1lIG9mIHlvdXIga2V5c3RvcmVcXHJcXG4tICoqQU5EUk9JRF9LRVlBTElBU19QQVNTKio6IFBhc3N3b3JkIGZvciB5b3VyIGFsaWFzIG5hbWUgaW4ga2V5IHN0b3JlXFxyXFxuLSAqKkdPT0dMRV9QTEFZX0tFWV9GSUxFKio6IFlvdXIgZ29vZ2xlIGFjY291bnQgc2VydmljZSAuanNvbiBmaWxlIGRvd25sb2FkZWQgZnJvbSBzdGVwIDJcXHJcXG4tICoqQU5EUk9JRF9QQUNLQUdFX05BTUUqKjogWW91ciBhcHBsaWNhdGlvbiBwYWNrYWdlIG5hbWUgZS5nIGNvbS5jb21wYW55LmFwcGxpY2F0aW9uXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==