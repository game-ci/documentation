exports.ids = [13];
exports.modules = {

/***/ "./docs/cloud-runner/v0/05-advanced-topics/09-github-ephemeral-runners.md":
/*!********************************************************************************!*\
  !*** ./docs/cloud-runner/v0/05-advanced-topics/09-github-ephemeral-runners.md ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("**Create a self-hosted cloud runner in an initial job:**\n\n```yaml\nboot-self-hosted-runner:\n  runs-on: ubuntu-latest\n  outputs:\n    BUILD_GUID: ${{ steps.start-runner.outputs.BUILD_GUID }}\n  steps:\n    - name: Configure AWS Credentials\n      uses: aws-actions/configure-aws-credentials@v1\n      with:\n        aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}\n        aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}\n        aws-region: eu-west-2\n    - name: start runner\n      id: start-runner\n      uses: game-ci/unity-builder@cloud-runner-develop\n      with:\n        cloudRunnerCluster: aws\n        allowDirtyBuild: true\n        cloudRunnerMemory: 4096\n        cloudRunnerCpu: 2048\n        gitPrivateToken: ${{ secrets.PAT_GITHUB }}\n        targetPlatform: StandaloneWindows64\n        GITHUB_SHA: ${{ github.sha }}\n        branch: ${{ github.ref_name }}\n        unityVersion: 2021.3.1f1\n        githubRepo: ${{ github.repositoryUrl }}\n        versioning: None\n        customJob: |\n          - name: upload\n            image: ubuntu\n            commands: |\n              export DEBIAN_FRONTEND=noninteractive\n              export RUNNER_ALLOW_RUNASROOT=\"1\"\n              apt-get -q update\n              apt-get install -qy tar curl libdigest-sha-perl apt-transport-https libicu-dev jq git git-lfs\n              p=\"$BUILD_GUID/actions-runner\"\n              mkdir -p $p && cd $p\n              curl -o actions-runner-linux-x64-2.289.2.tar.gz -L https://github.com/actions/runner/releases/download/v2.289.2/actions-runner-linux-x64-2.289.2.tar.gz\n              echo \"7ba89bb75397896a76e98197633c087a9499d4c1db7603f21910e135b0d0a238  actions-runner-linux-x64-2.289.2.tar.gz\" | shasum -a 256 -c\n              tar xzf ./actions-runner-linux-x64-2.289.2.tar.gz\n              repo=\"frostebite/FPS.GameClient\"\n              KEY=$(curl -X POST -H \"Authorization: Bearer $GIT_PRIVATE_TOKEN\" -H \"Accept: application/vnd.github.v3+json\" https://api.github.com/repos/$repo/actions/runners/registration-token | jq -r .token)\n              ./config.sh --url https://github.com/$repo --token $KEY --ephemeral --labels $BUILD_GUID\n              ./run.sh\n            secrets: []\n```\n\n**Run the build in the job:**\n\n```yaml\nboot-game-ci-cloud-runner:\n  runs-on:\n    - self-hosted\n    - ${{ needs.boot-self-hosted-runner.outputs.BUILD_GUID }}\n  needs: boot-self-hosted-runner\n  steps:\n    - name: Configure AWS Credentials\n      uses: aws-actions/configure-aws-credentials@v1\n      with:\n        aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}\n        aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}\n        aws-region: eu-west-2\n    - name: Unity - Build\n      id: aws-fargate-unity-build\n      uses: game-ci/unity-builder@cloud-runner-develop\n      env:\n        UNITY_EMAIL: ${{ secrets.UNITY_EMAIL }}\n        UNITY_PASSWORD: ${{ secrets.UNITY_PASSWORD }}\n        UNITY_SERIAL: ${{ secrets.UNITY_SERIAL }}\n        CUSTOM_JOB: ''\n      with:\n        cloudRunnerCluster: aws\n        allowDirtyBuild: true\n        cloudRunnerMemory: 8192\n        cloudRunnerCpu: 2048\n        versioning: None\n        unityVersion: 2021.3.1f1\n        gitPrivateToken: ${{ secrets.PAT_GITHUB }}\n        targetPlatform: StandaloneWindows64\n        customJob: ''\n        GITHUB_SHA: ${{ github.sha }}\n        branch: ${{ github.ref_name }}\n        githubRepo: ${{ github.repositoryUrl }}\n        postBuildSteps: |\n          - name: upload\n            image: amazon/aws-cli\n            commands: |\n              aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID --profile default\n              aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY --profile default\n              aws configure set region $AWS_DEFAULT_REGION --profile default\n              aws s3 cp /data/cache/$CACHE_KEY/build/build-$BUILD_GUID.tar s3://game-ci-test-storage/$CACHE_KEY/build-$BUILD_GUID.tar\n            secrets:\n            - name: awsAccessKeyId\n              value: ${{ secrets.AWS_ACCESS_KEY_ID }}\n            - name: awsSecretAccessKey\n              value: ${{ secrets.AWS_SECRET_ACCESS_KEY }}\n            - name: awsDefaultRegion\n              value: eu-west-2\n```\n\n**Download and deploy results:**\n\n```yaml\npost-job-message:\n  runs-on: ubuntu-latest\n  needs: [boot-game-ci-cloud-runner, boot-self-hosted-runner]\n  steps:\n    - name: Configure AWS Credentials\n      uses: aws-actions/configure-aws-credentials@v1\n      with:\n        aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}\n        aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}\n        aws-region: eu-west-2\n    - run: |\n        aws s3 cp s3://game-ci-test-storage/${{ steps.aws-fargate-unity-build.outputs.CACHE_KEY }}/build-${{ steps.aws-fargate-unity-build.outputs.BUILD_GUID }}.tar build-${{ steps.aws-fargate-unity-build.outputs.BUILD_GUID }}.tar\n        mkdir build\n        tar -xf build-${{ steps.aws-fargate-unity-build.outputs.BUILD_GUID }}.tar -C build\n        ls build\n    - uses: actions/upload-artifact@v2\n      with:\n        name: AWS Build (${{ matrix.targetPlatform }})\n        path: build-${{ steps.aws-fargate-unity-build.outputs.BUILD_GUID }}.tar\n        retention-days: 14\n    - name: Steam - Deploy\n      uses: game-ci/steam-deploy@main\n      with:\n        username: ${{ secrets.STEAM_USERNAME }}\n        password: ${{ secrets.STEAM_PASSWORD }}\n        appId: ${{ secrets.STEAM_APPID }}\n        configVdf: ${{ secrets.STEAM_CONFIG_VDF }}\n        ssfnFileName: ${{ secrets.STEAM_SSFN_FILE_NAME }}\n        ssfnFileContents: ${{ secrets.STEAM_SSFN_FILE_CONTENTS }}\n        rootPath: build\n        depot1Path: StandaloneWindows64\n        releaseBranch: pre-release\n```\n");

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kb2NzL2Nsb3VkLXJ1bm5lci92MC8wNS1hZHZhbmNlZC10b3BpY3MvMDktZ2l0aHViLWVwaGVtZXJhbC1ydW5uZXJzLm1kIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBZSx3TkFBeUoseUNBQXlDLG9KQUFvSiw2QkFBNkIsb0NBQW9DLGlDQUFpQyxtVEFBbVQsc0JBQXNCLHNFQUFzRSxjQUFjLHFCQUFxQixtQkFBbUIsMkRBQTJELHdCQUF3Qiw2MUNBQTYxQyxvREFBb0Qsc0xBQXNMLDZCQUE2QixvQ0FBb0MsaUNBQWlDLDJMQUEyTCx1QkFBdUIsNkJBQTZCLDBCQUEwQiwyQkFBMkIsd0JBQXdCLDhQQUE4UCxzQkFBc0IsNkZBQTZGLGNBQWMscUJBQXFCLG1CQUFtQix5QkFBeUIsd0JBQXdCLGtsQkFBa2xCLDZCQUE2QixrRUFBa0UsaUNBQWlDLDBYQUEwWCw2QkFBNkIsb0NBQW9DLGlDQUFpQyw4RkFBOEYsbURBQW1ELFVBQVUsb0RBQW9ELGNBQWMsb0RBQW9ELG9EQUFvRCxvREFBb0Qsa0hBQWtILHlCQUF5QiwwQkFBMEIsb0RBQW9ELHVJQUF1SSwwQkFBMEIsdUJBQXVCLDBCQUEwQixvQkFBb0IsdUJBQXVCLHdCQUF3Qiw0QkFBNEIsMkJBQTJCLGdDQUFnQywrQkFBK0Isb0NBQW9DLDhHQUE4RyxFIiwiZmlsZSI6IjEzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIqKkNyZWF0ZSBhIHNlbGYtaG9zdGVkIGNsb3VkIHJ1bm5lciBpbiBhbiBpbml0aWFsIGpvYjoqKlxcblxcbmBgYHlhbWxcXG5ib290LXNlbGYtaG9zdGVkLXJ1bm5lcjpcXG4gIHJ1bnMtb246IHVidW50dS1sYXRlc3RcXG4gIG91dHB1dHM6XFxuICAgIEJVSUxEX0dVSUQ6ICR7eyBzdGVwcy5zdGFydC1ydW5uZXIub3V0cHV0cy5CVUlMRF9HVUlEIH19XFxuICBzdGVwczpcXG4gICAgLSBuYW1lOiBDb25maWd1cmUgQVdTIENyZWRlbnRpYWxzXFxuICAgICAgdXNlczogYXdzLWFjdGlvbnMvY29uZmlndXJlLWF3cy1jcmVkZW50aWFsc0B2MVxcbiAgICAgIHdpdGg6XFxuICAgICAgICBhd3MtYWNjZXNzLWtleS1pZDogJHt7IHNlY3JldHMuQVdTX0FDQ0VTU19LRVlfSUQgfX1cXG4gICAgICAgIGF3cy1zZWNyZXQtYWNjZXNzLWtleTogJHt7IHNlY3JldHMuQVdTX1NFQ1JFVF9BQ0NFU1NfS0VZIH19XFxuICAgICAgICBhd3MtcmVnaW9uOiBldS13ZXN0LTJcXG4gICAgLSBuYW1lOiBzdGFydCBydW5uZXJcXG4gICAgICBpZDogc3RhcnQtcnVubmVyXFxuICAgICAgdXNlczogZ2FtZS1jaS91bml0eS1idWlsZGVyQGNsb3VkLXJ1bm5lci1kZXZlbG9wXFxuICAgICAgd2l0aDpcXG4gICAgICAgIGNsb3VkUnVubmVyQ2x1c3RlcjogYXdzXFxuICAgICAgICBhbGxvd0RpcnR5QnVpbGQ6IHRydWVcXG4gICAgICAgIGNsb3VkUnVubmVyTWVtb3J5OiA0MDk2XFxuICAgICAgICBjbG91ZFJ1bm5lckNwdTogMjA0OFxcbiAgICAgICAgZ2l0UHJpdmF0ZVRva2VuOiAke3sgc2VjcmV0cy5QQVRfR0lUSFVCIH19XFxuICAgICAgICB0YXJnZXRQbGF0Zm9ybTogU3RhbmRhbG9uZVdpbmRvd3M2NFxcbiAgICAgICAgR0lUSFVCX1NIQTogJHt7IGdpdGh1Yi5zaGEgfX1cXG4gICAgICAgIGJyYW5jaDogJHt7IGdpdGh1Yi5yZWZfbmFtZSB9fVxcbiAgICAgICAgdW5pdHlWZXJzaW9uOiAyMDIxLjMuMWYxXFxuICAgICAgICBnaXRodWJSZXBvOiAke3sgZ2l0aHViLnJlcG9zaXRvcnlVcmwgfX1cXG4gICAgICAgIHZlcnNpb25pbmc6IE5vbmVcXG4gICAgICAgIGN1c3RvbUpvYjogfFxcbiAgICAgICAgICAtIG5hbWU6IHVwbG9hZFxcbiAgICAgICAgICAgIGltYWdlOiB1YnVudHVcXG4gICAgICAgICAgICBjb21tYW5kczogfFxcbiAgICAgICAgICAgICAgZXhwb3J0IERFQklBTl9GUk9OVEVORD1ub25pbnRlcmFjdGl2ZVxcbiAgICAgICAgICAgICAgZXhwb3J0IFJVTk5FUl9BTExPV19SVU5BU1JPT1Q9XFxcIjFcXFwiXFxuICAgICAgICAgICAgICBhcHQtZ2V0IC1xIHVwZGF0ZVxcbiAgICAgICAgICAgICAgYXB0LWdldCBpbnN0YWxsIC1xeSB0YXIgY3VybCBsaWJkaWdlc3Qtc2hhLXBlcmwgYXB0LXRyYW5zcG9ydC1odHRwcyBsaWJpY3UtZGV2IGpxIGdpdCBnaXQtbGZzXFxuICAgICAgICAgICAgICBwPVxcXCIkQlVJTERfR1VJRC9hY3Rpb25zLXJ1bm5lclxcXCJcXG4gICAgICAgICAgICAgIG1rZGlyIC1wICRwICYmIGNkICRwXFxuICAgICAgICAgICAgICBjdXJsIC1vIGFjdGlvbnMtcnVubmVyLWxpbnV4LXg2NC0yLjI4OS4yLnRhci5neiAtTCBodHRwczovL2dpdGh1Yi5jb20vYWN0aW9ucy9ydW5uZXIvcmVsZWFzZXMvZG93bmxvYWQvdjIuMjg5LjIvYWN0aW9ucy1ydW5uZXItbGludXgteDY0LTIuMjg5LjIudGFyLmd6XFxuICAgICAgICAgICAgICBlY2hvIFxcXCI3YmE4OWJiNzUzOTc4OTZhNzZlOTgxOTc2MzNjMDg3YTk0OTlkNGMxZGI3NjAzZjIxOTEwZTEzNWIwZDBhMjM4ICBhY3Rpb25zLXJ1bm5lci1saW51eC14NjQtMi4yODkuMi50YXIuZ3pcXFwiIHwgc2hhc3VtIC1hIDI1NiAtY1xcbiAgICAgICAgICAgICAgdGFyIHh6ZiAuL2FjdGlvbnMtcnVubmVyLWxpbnV4LXg2NC0yLjI4OS4yLnRhci5nelxcbiAgICAgICAgICAgICAgcmVwbz1cXFwiZnJvc3RlYml0ZS9GUFMuR2FtZUNsaWVudFxcXCJcXG4gICAgICAgICAgICAgIEtFWT0kKGN1cmwgLVggUE9TVCAtSCBcXFwiQXV0aG9yaXphdGlvbjogQmVhcmVyICRHSVRfUFJJVkFURV9UT0tFTlxcXCIgLUggXFxcIkFjY2VwdDogYXBwbGljYXRpb24vdm5kLmdpdGh1Yi52Mytqc29uXFxcIiBodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zLyRyZXBvL2FjdGlvbnMvcnVubmVycy9yZWdpc3RyYXRpb24tdG9rZW4gfCBqcSAtciAudG9rZW4pXFxuICAgICAgICAgICAgICAuL2NvbmZpZy5zaCAtLXVybCBodHRwczovL2dpdGh1Yi5jb20vJHJlcG8gLS10b2tlbiAkS0VZIC0tZXBoZW1lcmFsIC0tbGFiZWxzICRCVUlMRF9HVUlEXFxuICAgICAgICAgICAgICAuL3J1bi5zaFxcbiAgICAgICAgICAgIHNlY3JldHM6IFtdXFxuYGBgXFxuXFxuKipSdW4gdGhlIGJ1aWxkIGluIHRoZSBqb2I6KipcXG5cXG5gYGB5YW1sXFxuYm9vdC1nYW1lLWNpLWNsb3VkLXJ1bm5lcjpcXG4gIHJ1bnMtb246XFxuICAgIC0gc2VsZi1ob3N0ZWRcXG4gICAgLSAke3sgbmVlZHMuYm9vdC1zZWxmLWhvc3RlZC1ydW5uZXIub3V0cHV0cy5CVUlMRF9HVUlEIH19XFxuICBuZWVkczogYm9vdC1zZWxmLWhvc3RlZC1ydW5uZXJcXG4gIHN0ZXBzOlxcbiAgICAtIG5hbWU6IENvbmZpZ3VyZSBBV1MgQ3JlZGVudGlhbHNcXG4gICAgICB1c2VzOiBhd3MtYWN0aW9ucy9jb25maWd1cmUtYXdzLWNyZWRlbnRpYWxzQHYxXFxuICAgICAgd2l0aDpcXG4gICAgICAgIGF3cy1hY2Nlc3Mta2V5LWlkOiAke3sgc2VjcmV0cy5BV1NfQUNDRVNTX0tFWV9JRCB9fVxcbiAgICAgICAgYXdzLXNlY3JldC1hY2Nlc3Mta2V5OiAke3sgc2VjcmV0cy5BV1NfU0VDUkVUX0FDQ0VTU19LRVkgfX1cXG4gICAgICAgIGF3cy1yZWdpb246IGV1LXdlc3QtMlxcbiAgICAtIG5hbWU6IFVuaXR5IC0gQnVpbGRcXG4gICAgICBpZDogYXdzLWZhcmdhdGUtdW5pdHktYnVpbGRcXG4gICAgICB1c2VzOiBnYW1lLWNpL3VuaXR5LWJ1aWxkZXJAY2xvdWQtcnVubmVyLWRldmVsb3BcXG4gICAgICBlbnY6XFxuICAgICAgICBVTklUWV9FTUFJTDogJHt7IHNlY3JldHMuVU5JVFlfRU1BSUwgfX1cXG4gICAgICAgIFVOSVRZX1BBU1NXT1JEOiAke3sgc2VjcmV0cy5VTklUWV9QQVNTV09SRCB9fVxcbiAgICAgICAgVU5JVFlfU0VSSUFMOiAke3sgc2VjcmV0cy5VTklUWV9TRVJJQUwgfX1cXG4gICAgICAgIENVU1RPTV9KT0I6ICcnXFxuICAgICAgd2l0aDpcXG4gICAgICAgIGNsb3VkUnVubmVyQ2x1c3RlcjogYXdzXFxuICAgICAgICBhbGxvd0RpcnR5QnVpbGQ6IHRydWVcXG4gICAgICAgIGNsb3VkUnVubmVyTWVtb3J5OiA4MTkyXFxuICAgICAgICBjbG91ZFJ1bm5lckNwdTogMjA0OFxcbiAgICAgICAgdmVyc2lvbmluZzogTm9uZVxcbiAgICAgICAgdW5pdHlWZXJzaW9uOiAyMDIxLjMuMWYxXFxuICAgICAgICBnaXRQcml2YXRlVG9rZW46ICR7eyBzZWNyZXRzLlBBVF9HSVRIVUIgfX1cXG4gICAgICAgIHRhcmdldFBsYXRmb3JtOiBTdGFuZGFsb25lV2luZG93czY0XFxuICAgICAgICBjdXN0b21Kb2I6ICcnXFxuICAgICAgICBHSVRIVUJfU0hBOiAke3sgZ2l0aHViLnNoYSB9fVxcbiAgICAgICAgYnJhbmNoOiAke3sgZ2l0aHViLnJlZl9uYW1lIH19XFxuICAgICAgICBnaXRodWJSZXBvOiAke3sgZ2l0aHViLnJlcG9zaXRvcnlVcmwgfX1cXG4gICAgICAgIHBvc3RCdWlsZFN0ZXBzOiB8XFxuICAgICAgICAgIC0gbmFtZTogdXBsb2FkXFxuICAgICAgICAgICAgaW1hZ2U6IGFtYXpvbi9hd3MtY2xpXFxuICAgICAgICAgICAgY29tbWFuZHM6IHxcXG4gICAgICAgICAgICAgIGF3cyBjb25maWd1cmUgc2V0IGF3c19hY2Nlc3Nfa2V5X2lkICRBV1NfQUNDRVNTX0tFWV9JRCAtLXByb2ZpbGUgZGVmYXVsdFxcbiAgICAgICAgICAgICAgYXdzIGNvbmZpZ3VyZSBzZXQgYXdzX3NlY3JldF9hY2Nlc3Nfa2V5ICRBV1NfU0VDUkVUX0FDQ0VTU19LRVkgLS1wcm9maWxlIGRlZmF1bHRcXG4gICAgICAgICAgICAgIGF3cyBjb25maWd1cmUgc2V0IHJlZ2lvbiAkQVdTX0RFRkFVTFRfUkVHSU9OIC0tcHJvZmlsZSBkZWZhdWx0XFxuICAgICAgICAgICAgICBhd3MgczMgY3AgL2RhdGEvY2FjaGUvJENBQ0hFX0tFWS9idWlsZC9idWlsZC0kQlVJTERfR1VJRC50YXIgczM6Ly9nYW1lLWNpLXRlc3Qtc3RvcmFnZS8kQ0FDSEVfS0VZL2J1aWxkLSRCVUlMRF9HVUlELnRhclxcbiAgICAgICAgICAgIHNlY3JldHM6XFxuICAgICAgICAgICAgLSBuYW1lOiBhd3NBY2Nlc3NLZXlJZFxcbiAgICAgICAgICAgICAgdmFsdWU6ICR7eyBzZWNyZXRzLkFXU19BQ0NFU1NfS0VZX0lEIH19XFxuICAgICAgICAgICAgLSBuYW1lOiBhd3NTZWNyZXRBY2Nlc3NLZXlcXG4gICAgICAgICAgICAgIHZhbHVlOiAke3sgc2VjcmV0cy5BV1NfU0VDUkVUX0FDQ0VTU19LRVkgfX1cXG4gICAgICAgICAgICAtIG5hbWU6IGF3c0RlZmF1bHRSZWdpb25cXG4gICAgICAgICAgICAgIHZhbHVlOiBldS13ZXN0LTJcXG5gYGBcXG5cXG4qKkRvd25sb2FkIGFuZCBkZXBsb3kgcmVzdWx0czoqKlxcblxcbmBgYHlhbWxcXG5wb3N0LWpvYi1tZXNzYWdlOlxcbiAgcnVucy1vbjogdWJ1bnR1LWxhdGVzdFxcbiAgbmVlZHM6IFtib290LWdhbWUtY2ktY2xvdWQtcnVubmVyLCBib290LXNlbGYtaG9zdGVkLXJ1bm5lcl1cXG4gIHN0ZXBzOlxcbiAgICAtIG5hbWU6IENvbmZpZ3VyZSBBV1MgQ3JlZGVudGlhbHNcXG4gICAgICB1c2VzOiBhd3MtYWN0aW9ucy9jb25maWd1cmUtYXdzLWNyZWRlbnRpYWxzQHYxXFxuICAgICAgd2l0aDpcXG4gICAgICAgIGF3cy1hY2Nlc3Mta2V5LWlkOiAke3sgc2VjcmV0cy5BV1NfQUNDRVNTX0tFWV9JRCB9fVxcbiAgICAgICAgYXdzLXNlY3JldC1hY2Nlc3Mta2V5OiAke3sgc2VjcmV0cy5BV1NfU0VDUkVUX0FDQ0VTU19LRVkgfX1cXG4gICAgICAgIGF3cy1yZWdpb246IGV1LXdlc3QtMlxcbiAgICAtIHJ1bjogfFxcbiAgICAgICAgYXdzIHMzIGNwIHMzOi8vZ2FtZS1jaS10ZXN0LXN0b3JhZ2UvJHt7IHN0ZXBzLmF3cy1mYXJnYXRlLXVuaXR5LWJ1aWxkLm91dHB1dHMuQ0FDSEVfS0VZIH19L2J1aWxkLSR7eyBzdGVwcy5hd3MtZmFyZ2F0ZS11bml0eS1idWlsZC5vdXRwdXRzLkJVSUxEX0dVSUQgfX0udGFyIGJ1aWxkLSR7eyBzdGVwcy5hd3MtZmFyZ2F0ZS11bml0eS1idWlsZC5vdXRwdXRzLkJVSUxEX0dVSUQgfX0udGFyXFxuICAgICAgICBta2RpciBidWlsZFxcbiAgICAgICAgdGFyIC14ZiBidWlsZC0ke3sgc3RlcHMuYXdzLWZhcmdhdGUtdW5pdHktYnVpbGQub3V0cHV0cy5CVUlMRF9HVUlEIH19LnRhciAtQyBidWlsZFxcbiAgICAgICAgbHMgYnVpbGRcXG4gICAgLSB1c2VzOiBhY3Rpb25zL3VwbG9hZC1hcnRpZmFjdEB2MlxcbiAgICAgIHdpdGg6XFxuICAgICAgICBuYW1lOiBBV1MgQnVpbGQgKCR7eyBtYXRyaXgudGFyZ2V0UGxhdGZvcm0gfX0pXFxuICAgICAgICBwYXRoOiBidWlsZC0ke3sgc3RlcHMuYXdzLWZhcmdhdGUtdW5pdHktYnVpbGQub3V0cHV0cy5CVUlMRF9HVUlEIH19LnRhclxcbiAgICAgICAgcmV0ZW50aW9uLWRheXM6IDE0XFxuICAgIC0gbmFtZTogU3RlYW0gLSBEZXBsb3lcXG4gICAgICB1c2VzOiBnYW1lLWNpL3N0ZWFtLWRlcGxveUBtYWluXFxuICAgICAgd2l0aDpcXG4gICAgICAgIHVzZXJuYW1lOiAke3sgc2VjcmV0cy5TVEVBTV9VU0VSTkFNRSB9fVxcbiAgICAgICAgcGFzc3dvcmQ6ICR7eyBzZWNyZXRzLlNURUFNX1BBU1NXT1JEIH19XFxuICAgICAgICBhcHBJZDogJHt7IHNlY3JldHMuU1RFQU1fQVBQSUQgfX1cXG4gICAgICAgIGNvbmZpZ1ZkZjogJHt7IHNlY3JldHMuU1RFQU1fQ09ORklHX1ZERiB9fVxcbiAgICAgICAgc3NmbkZpbGVOYW1lOiAke3sgc2VjcmV0cy5TVEVBTV9TU0ZOX0ZJTEVfTkFNRSB9fVxcbiAgICAgICAgc3NmbkZpbGVDb250ZW50czogJHt7IHNlY3JldHMuU1RFQU1fU1NGTl9GSUxFX0NPTlRFTlRTIH19XFxuICAgICAgICByb290UGF0aDogYnVpbGRcXG4gICAgICAgIGRlcG90MVBhdGg6IFN0YW5kYWxvbmVXaW5kb3dzNjRcXG4gICAgICAgIHJlbGVhc2VCcmFuY2g6IHByZS1yZWxlYXNlXFxuYGBgXFxuXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==