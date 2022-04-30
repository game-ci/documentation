**Create a self-hosted cloud runner in an initial job:**

```yaml
boot-self-hosted-runner:
  runs-on: ubuntu-latest
  outputs:
    BUILD_GUID: ${{ steps.start-runner.outputs.BUILD_GUID }}
  steps:
    - name: Configure AWS Credentials
      uses: aws-actions/configure-aws-credentials@v1
      with:
        aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: eu-west-2
    - name: start runner
      id: start-runner
      uses: game-ci/unity-builder@cloud-runner-develop
      with:
        cloudRunnerCluster: aws
        allowDirtyBuild: true
        cloudRunnerMemory: 4096
        cloudRunnerCpu: 2048
        gitPrivateToken: ${{ secrets.PAT_GITHUB }}
        targetPlatform: StandaloneWindows64
        GITHUB_SHA: ${{ github.sha }}
        branch: ${{ github.ref_name }}
        unityVersion: 2021.3.1f1
        githubRepo: ${{ github.repositoryUrl }}
        versioning: None
        customJob: |
          - name: upload
            image: ubuntu
            commands: |
              export DEBIAN_FRONTEND=noninteractive
              export RUNNER_ALLOW_RUNASROOT="1"
              apt-get -q update
              apt-get install -qy tar curl libdigest-sha-perl apt-transport-https libicu-dev jq git git-lfs
              p="$BUILD_GUID/actions-runner"
              mkdir -p $p && cd $p
              curl -o actions-runner-linux-x64-2.289.2.tar.gz -L https://github.com/actions/runner/releases/download/v2.289.2/actions-runner-linux-x64-2.289.2.tar.gz
              echo "7ba89bb75397896a76e98197633c087a9499d4c1db7603f21910e135b0d0a238  actions-runner-linux-x64-2.289.2.tar.gz" | shasum -a 256 -c
              tar xzf ./actions-runner-linux-x64-2.289.2.tar.gz
              repo="frostebite/FPS.GameClient"
              KEY=$(curl -X POST -H "Authorization: Bearer $GIT_PRIVATE_TOKEN" -H "Accept: application/vnd.github.v3+json" https://api.github.com/repos/$repo/actions/runners/registration-token | jq -r .token)
              ./config.sh --url https://github.com/$repo --token $KEY --ephemeral --labels $BUILD_GUID
              ./run.sh
            secrets: []
```

**Run the build in the job:**

```yaml
boot-game-ci-cloud-runner:
  runs-on:
    - self-hosted
    - ${{ needs.boot-self-hosted-runner.outputs.BUILD_GUID }}
  needs: boot-self-hosted-runner
  steps:
    - name: Configure AWS Credentials
      uses: aws-actions/configure-aws-credentials@v1
      with:
        aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: eu-west-2
    - name: Unity - Build
      id: aws-fargate-unity-build
      uses: game-ci/unity-builder@cloud-runner-develop
      env:
        UNITY_EMAIL: ${{ secrets.UNITY_EMAIL }}
        UNITY_PASSWORD: ${{ secrets.UNITY_PASSWORD }}
        UNITY_SERIAL: ${{ secrets.UNITY_SERIAL }}
        CUSTOM_JOB: ''
      with:
        cloudRunnerCluster: aws
        allowDirtyBuild: true
        cloudRunnerMemory: 8192
        cloudRunnerCpu: 2048
        versioning: None
        unityVersion: 2021.3.1f1
        gitPrivateToken: ${{ secrets.PAT_GITHUB }}
        targetPlatform: StandaloneWindows64
        customJob: ''
        GITHUB_SHA: ${{ github.sha }}
        branch: ${{ github.ref_name }}
        githubRepo: ${{ github.repositoryUrl }}
        postBuildSteps: |
          - name: upload
            image: amazon/aws-cli
            commands: |
              aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID --profile default
              aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY --profile default
              aws configure set region $AWS_DEFAULT_REGION --profile default
              aws s3 cp /data/cache/$CACHE_KEY/build/build-$BUILD_GUID.tar s3://game-ci-test-storage/$CACHE_KEY/build-$BUILD_GUID.tar
            secrets:
            - name: awsAccessKeyId
              value: ${{ secrets.AWS_ACCESS_KEY_ID }}
            - name: awsSecretAccessKey
              value: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
            - name: awsDefaultRegion
              value: eu-west-2
```

**Download and deploy results:**

```yaml
post-job-message:
  runs-on: ubuntu-latest
  needs: [boot-game-ci-cloud-runner, boot-self-hosted-runner]
  if: always()
  steps:
    - name: Configure AWS Credentials
      uses: aws-actions/configure-aws-credentials@v1
      with:
        aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: eu-west-2
    - run: |
        aws s3 cp s3://game-ci-test-storage/${{ steps.aws-fargate-unity-build.outputs.CACHE_KEY }}/build-${{ steps.aws-fargate-unity-build.outputs.BUILD_GUID }}.tar build-${{ steps.aws-fargate-unity-build.outputs.BUILD_GUID }}.tar
        mkdir build
        tar -xf build-${{ steps.aws-fargate-unity-build.outputs.BUILD_GUID }}.tar -C build
        ls build
    - uses: actions/upload-artifact@v2
      with:
        name: AWS Build (${{ matrix.targetPlatform }})
        path: build-${{ steps.aws-fargate-unity-build.outputs.BUILD_GUID }}.tar
        retention-days: 14
    - name: Steam - Deploy
      uses: game-ci/steam-deploy@main
      with:
        username: ${{ secrets.STEAM_USERNAME }}
        password: ${{ secrets.STEAM_PASSWORD }}
        appId: ${{ secrets.STEAM_APPID }}
        configVdf: ${{ secrets.STEAM_CONFIG_VDF }}
        ssfnFileName: ${{ secrets.STEAM_SSFN_FILE_NAME }}
        ssfnFileContents: ${{ secrets.STEAM_SSFN_FILE_CONTENTS }}
        rootPath: build
        depot1Path: StandaloneWindows64
        releaseBranch: pre-release
```
