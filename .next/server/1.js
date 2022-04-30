exports.ids = [1];
exports.modules = {

/***/ "./docs/cloud-runner/v0/02-getting-started/aws.md":
/*!********************************************************!*\
  !*** ./docs/cloud-runner/v0/02-getting-started/aws.md ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("# Getting Started AWS\n\n### Requirements\n\n- You must have an AWS account setup and ready to create resources.\n- Create a service account and generate an AWS access key and key id.\n\n### AWS Credentials\n\nSetup the following as `env` variables for the GitHub build step:\n\n- `AWS_ACCESS_KEY_ID`\n- `AWS_SECRET_ACCESS_KEY`\n- `AWS_DEFAULT_REGION` (should be the same AWS region as the base stack e.g `eu-west-2`)\n\n_Note:_\n_This enables us to access AWS resources from Unity Builder._\n\n### Standard configuration\n\nLink to configuration page\n\n#### Allowed CPU/Memory combinations\n\nThere are some limitations to the CPU and Memory parameters. AWS will only accept the following combinations:\n[AWS Fargate Documentation, Allowed CPU and memory values (Task Definitions)](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html#task_size)\n\n##### Summary of format:\n\n- Values are represented as 1024:1 GB or CPU.\n- Do not include the vCPU or GB suffix.\n- 1 CPU can go to a max of 6 GB of memory. 2 CPU's are required to go higher.\n\n##### Example configuration:\n\n```yaml\n- cloudRunnerMemory: 4096\n- cloudRunnerCpu: 1024\n```\n\n### Example build step\n\n```yaml\n- uses: game-ci/unity-builder@cloud-runner-develop\n  id: aws-fargate-unity-build\n  env:\n    UNITY_LICENSE: ${{ secrets.UNITY_LICENSE }}\n    AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}\n    AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}\n    AWS_DEFAULT_REGION: ${{ secrets.AWS_DEFAULT_REGION }}\n  with:\n    remoteBuildCluster: aws\n    cloudRunnerMemory: 4096\n    cloudRunnerCpu: 1024\n    projectPath: ${{ matrix.projectPath }}\n    unityVersion: ${{ matrix.unityVersion }}\n    targetPlatform: ${{ matrix.targetPlatform }}\n    githubToken: ${{ secrets.GITHUB_TOKEN }}\n```\n\nCurrently aws builds do not save their persistent contents beyond a cloud runner job, so you may want to export the results to cloud storage e.g:\n\n```yaml\n- uses: game-ci/unity-builder@cloud-runner-develop\n  id: aws-fargate-unity-build\n  timeout-minutes: 25\n  with:\n    cloudRunnerCluster: aws\n    versioning: None\n    projectPath: ${{ matrix.projectPath }}\n    unityVersion: ${{ matrix.unityVersion }}\n    targetPlatform: ${{ matrix.targetPlatform }}\n    githubToken: ${{ secrets.GITHUB_TOKEN }}\n    postBuildSteps: |\n      - name: upload\n        image: amazon/aws-cli\n        commands: |\n          aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID --profile default\n          aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY --profile default\n          aws configure set region $AWS_DEFAULT_REGION --profile default\n          aws s3 ls\n          aws s3 ls game-ci-test-storage\n          ls /data/cache/$CACHE_KEY\n          ls /data/cache/$CACHE_KEY/build\n          aws s3 cp /data/cache/$CACHE_KEY/build/build-$BUILD_GUID.zip s3://game-ci-test-storage/$CACHE_KEY/build-$BUILD_GUID.zip\n        secrets:\n        - name: awsAccessKeyId\n          value: ${{ secrets.AWS_ACCESS_KEY_ID }}\n        - name: awsSecretAccessKey\n          value: ${{ secrets.AWS_SECRET_ACCESS_KEY }}\n        - name: awsDefaultRegion\n          value: eu-west-2\n```\n\nA full workflow example can be seen in builder's [test workflow](https://github.com/game-ci/unity-builder/blob/main/.github/workflows/aws-tests.yml).\n");

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kb2NzL2Nsb3VkLXJ1bm5lci92MC8wMi1nZXR0aW5nLXN0YXJ0ZWQvYXdzLm1kIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBZSxzM0NBQXV6Qyx5QkFBeUIsNEJBQTRCLDZCQUE2QixnQ0FBZ0MsaUNBQWlDLDZCQUE2Qiw4QkFBOEIsbUhBQW1ILHNCQUFzQix1QkFBdUIsdUJBQXVCLHlCQUF5Qix5QkFBeUIsc0JBQXNCLHdCQUF3QixpV0FBaVcsc0JBQXNCLHVCQUF1Qix1QkFBdUIseUJBQXlCLHlCQUF5QixzQkFBc0Isd0JBQXdCLHFyQkFBcXJCLDZCQUE2QiwwREFBMEQsaUNBQWlDLCtOQUErTixFIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIiMgR2V0dGluZyBTdGFydGVkIEFXU1xcblxcbiMjIyBSZXF1aXJlbWVudHNcXG5cXG4tIFlvdSBtdXN0IGhhdmUgYW4gQVdTIGFjY291bnQgc2V0dXAgYW5kIHJlYWR5IHRvIGNyZWF0ZSByZXNvdXJjZXMuXFxuLSBDcmVhdGUgYSBzZXJ2aWNlIGFjY291bnQgYW5kIGdlbmVyYXRlIGFuIEFXUyBhY2Nlc3Mga2V5IGFuZCBrZXkgaWQuXFxuXFxuIyMjIEFXUyBDcmVkZW50aWFsc1xcblxcblNldHVwIHRoZSBmb2xsb3dpbmcgYXMgYGVudmAgdmFyaWFibGVzIGZvciB0aGUgR2l0SHViIGJ1aWxkIHN0ZXA6XFxuXFxuLSBgQVdTX0FDQ0VTU19LRVlfSURgXFxuLSBgQVdTX1NFQ1JFVF9BQ0NFU1NfS0VZYFxcbi0gYEFXU19ERUZBVUxUX1JFR0lPTmAgKHNob3VsZCBiZSB0aGUgc2FtZSBBV1MgcmVnaW9uIGFzIHRoZSBiYXNlIHN0YWNrIGUuZyBgZXUtd2VzdC0yYClcXG5cXG5fTm90ZTpfXFxuX1RoaXMgZW5hYmxlcyB1cyB0byBhY2Nlc3MgQVdTIHJlc291cmNlcyBmcm9tIFVuaXR5IEJ1aWxkZXIuX1xcblxcbiMjIyBTdGFuZGFyZCBjb25maWd1cmF0aW9uXFxuXFxuTGluayB0byBjb25maWd1cmF0aW9uIHBhZ2VcXG5cXG4jIyMjIEFsbG93ZWQgQ1BVL01lbW9yeSBjb21iaW5hdGlvbnNcXG5cXG5UaGVyZSBhcmUgc29tZSBsaW1pdGF0aW9ucyB0byB0aGUgQ1BVIGFuZCBNZW1vcnkgcGFyYW1ldGVycy4gQVdTIHdpbGwgb25seSBhY2NlcHQgdGhlIGZvbGxvd2luZyBjb21iaW5hdGlvbnM6XFxuW0FXUyBGYXJnYXRlIERvY3VtZW50YXRpb24sIEFsbG93ZWQgQ1BVIGFuZCBtZW1vcnkgdmFsdWVzIChUYXNrIERlZmluaXRpb25zKV0oaHR0cHM6Ly9kb2NzLmF3cy5hbWF6b24uY29tL0FtYXpvbkVDUy9sYXRlc3QvZGV2ZWxvcGVyZ3VpZGUvdGFza19kZWZpbml0aW9uX3BhcmFtZXRlcnMuaHRtbCN0YXNrX3NpemUpXFxuXFxuIyMjIyMgU3VtbWFyeSBvZiBmb3JtYXQ6XFxuXFxuLSBWYWx1ZXMgYXJlIHJlcHJlc2VudGVkIGFzIDEwMjQ6MSBHQiBvciBDUFUuXFxuLSBEbyBub3QgaW5jbHVkZSB0aGUgdkNQVSBvciBHQiBzdWZmaXguXFxuLSAxIENQVSBjYW4gZ28gdG8gYSBtYXggb2YgNiBHQiBvZiBtZW1vcnkuIDIgQ1BVJ3MgYXJlIHJlcXVpcmVkIHRvIGdvIGhpZ2hlci5cXG5cXG4jIyMjIyBFeGFtcGxlIGNvbmZpZ3VyYXRpb246XFxuXFxuYGBgeWFtbFxcbi0gY2xvdWRSdW5uZXJNZW1vcnk6IDQwOTZcXG4tIGNsb3VkUnVubmVyQ3B1OiAxMDI0XFxuYGBgXFxuXFxuIyMjIEV4YW1wbGUgYnVpbGQgc3RlcFxcblxcbmBgYHlhbWxcXG4tIHVzZXM6IGdhbWUtY2kvdW5pdHktYnVpbGRlckBjbG91ZC1ydW5uZXItZGV2ZWxvcFxcbiAgaWQ6IGF3cy1mYXJnYXRlLXVuaXR5LWJ1aWxkXFxuICBlbnY6XFxuICAgIFVOSVRZX0xJQ0VOU0U6ICR7eyBzZWNyZXRzLlVOSVRZX0xJQ0VOU0UgfX1cXG4gICAgQVdTX0FDQ0VTU19LRVlfSUQ6ICR7eyBzZWNyZXRzLkFXU19BQ0NFU1NfS0VZX0lEIH19XFxuICAgIEFXU19TRUNSRVRfQUNDRVNTX0tFWTogJHt7IHNlY3JldHMuQVdTX1NFQ1JFVF9BQ0NFU1NfS0VZIH19XFxuICAgIEFXU19ERUZBVUxUX1JFR0lPTjogJHt7IHNlY3JldHMuQVdTX0RFRkFVTFRfUkVHSU9OIH19XFxuICB3aXRoOlxcbiAgICByZW1vdGVCdWlsZENsdXN0ZXI6IGF3c1xcbiAgICBjbG91ZFJ1bm5lck1lbW9yeTogNDA5NlxcbiAgICBjbG91ZFJ1bm5lckNwdTogMTAyNFxcbiAgICBwcm9qZWN0UGF0aDogJHt7IG1hdHJpeC5wcm9qZWN0UGF0aCB9fVxcbiAgICB1bml0eVZlcnNpb246ICR7eyBtYXRyaXgudW5pdHlWZXJzaW9uIH19XFxuICAgIHRhcmdldFBsYXRmb3JtOiAke3sgbWF0cml4LnRhcmdldFBsYXRmb3JtIH19XFxuICAgIGdpdGh1YlRva2VuOiAke3sgc2VjcmV0cy5HSVRIVUJfVE9LRU4gfX1cXG5gYGBcXG5cXG5DdXJyZW50bHkgYXdzIGJ1aWxkcyBkbyBub3Qgc2F2ZSB0aGVpciBwZXJzaXN0ZW50IGNvbnRlbnRzIGJleW9uZCBhIGNsb3VkIHJ1bm5lciBqb2IsIHNvIHlvdSBtYXkgd2FudCB0byBleHBvcnQgdGhlIHJlc3VsdHMgdG8gY2xvdWQgc3RvcmFnZSBlLmc6XFxuXFxuYGBgeWFtbFxcbi0gdXNlczogZ2FtZS1jaS91bml0eS1idWlsZGVyQGNsb3VkLXJ1bm5lci1kZXZlbG9wXFxuICBpZDogYXdzLWZhcmdhdGUtdW5pdHktYnVpbGRcXG4gIHRpbWVvdXQtbWludXRlczogMjVcXG4gIHdpdGg6XFxuICAgIGNsb3VkUnVubmVyQ2x1c3RlcjogYXdzXFxuICAgIHZlcnNpb25pbmc6IE5vbmVcXG4gICAgcHJvamVjdFBhdGg6ICR7eyBtYXRyaXgucHJvamVjdFBhdGggfX1cXG4gICAgdW5pdHlWZXJzaW9uOiAke3sgbWF0cml4LnVuaXR5VmVyc2lvbiB9fVxcbiAgICB0YXJnZXRQbGF0Zm9ybTogJHt7IG1hdHJpeC50YXJnZXRQbGF0Zm9ybSB9fVxcbiAgICBnaXRodWJUb2tlbjogJHt7IHNlY3JldHMuR0lUSFVCX1RPS0VOIH19XFxuICAgIHBvc3RCdWlsZFN0ZXBzOiB8XFxuICAgICAgLSBuYW1lOiB1cGxvYWRcXG4gICAgICAgIGltYWdlOiBhbWF6b24vYXdzLWNsaVxcbiAgICAgICAgY29tbWFuZHM6IHxcXG4gICAgICAgICAgYXdzIGNvbmZpZ3VyZSBzZXQgYXdzX2FjY2Vzc19rZXlfaWQgJEFXU19BQ0NFU1NfS0VZX0lEIC0tcHJvZmlsZSBkZWZhdWx0XFxuICAgICAgICAgIGF3cyBjb25maWd1cmUgc2V0IGF3c19zZWNyZXRfYWNjZXNzX2tleSAkQVdTX1NFQ1JFVF9BQ0NFU1NfS0VZIC0tcHJvZmlsZSBkZWZhdWx0XFxuICAgICAgICAgIGF3cyBjb25maWd1cmUgc2V0IHJlZ2lvbiAkQVdTX0RFRkFVTFRfUkVHSU9OIC0tcHJvZmlsZSBkZWZhdWx0XFxuICAgICAgICAgIGF3cyBzMyBsc1xcbiAgICAgICAgICBhd3MgczMgbHMgZ2FtZS1jaS10ZXN0LXN0b3JhZ2VcXG4gICAgICAgICAgbHMgL2RhdGEvY2FjaGUvJENBQ0hFX0tFWVxcbiAgICAgICAgICBscyAvZGF0YS9jYWNoZS8kQ0FDSEVfS0VZL2J1aWxkXFxuICAgICAgICAgIGF3cyBzMyBjcCAvZGF0YS9jYWNoZS8kQ0FDSEVfS0VZL2J1aWxkL2J1aWxkLSRCVUlMRF9HVUlELnppcCBzMzovL2dhbWUtY2ktdGVzdC1zdG9yYWdlLyRDQUNIRV9LRVkvYnVpbGQtJEJVSUxEX0dVSUQuemlwXFxuICAgICAgICBzZWNyZXRzOlxcbiAgICAgICAgLSBuYW1lOiBhd3NBY2Nlc3NLZXlJZFxcbiAgICAgICAgICB2YWx1ZTogJHt7IHNlY3JldHMuQVdTX0FDQ0VTU19LRVlfSUQgfX1cXG4gICAgICAgIC0gbmFtZTogYXdzU2VjcmV0QWNjZXNzS2V5XFxuICAgICAgICAgIHZhbHVlOiAke3sgc2VjcmV0cy5BV1NfU0VDUkVUX0FDQ0VTU19LRVkgfX1cXG4gICAgICAgIC0gbmFtZTogYXdzRGVmYXVsdFJlZ2lvblxcbiAgICAgICAgICB2YWx1ZTogZXUtd2VzdC0yXFxuYGBgXFxuXFxuQSBmdWxsIHdvcmtmbG93IGV4YW1wbGUgY2FuIGJlIHNlZW4gaW4gYnVpbGRlcidzIFt0ZXN0IHdvcmtmbG93XShodHRwczovL2dpdGh1Yi5jb20vZ2FtZS1jaS91bml0eS1idWlsZGVyL2Jsb2IvbWFpbi8uZ2l0aHViL3dvcmtmbG93cy9hd3MtdGVzdHMueW1sKS5cXG5cIjsiXSwic291cmNlUm9vdCI6IiJ9