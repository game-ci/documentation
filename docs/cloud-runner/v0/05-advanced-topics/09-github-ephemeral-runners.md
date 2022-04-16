```yaml
- name: Unity - Builder
  id: aws-fargate-unity-build
  uses: game-ci/unity-builder@cloud-runner-develop
  env:
    UNITY_EMAIL: ${{ secrets.UNITY_EMAIL }}
    UNITY_PASSWORD: ${{ secrets.UNITY_PASSWORD }}
    UNITY_SERIAL: ${{ secrets.UNITY_SERIAL }}
  with:
    cloudRunnerCluster: aws
    allowDirtyBuild: true
    cloudRunnerMemory: 8192
    cloudRunnerCpu: 2048
    gitPrivateToken: ${{ secrets.PAT_GITHUB }}
    targetPlatform: StandaloneWindows64
    customJob: |
      - name: upload
        image: ubuntu
        commands: |
          export DEBIAN_FRONTEND=noninteractive
          export RUNNER_ALLOW_RUNASROOT="1"
          apt-get update
          apt-get install -qy unzip curl libdigest-sha-perl apt-transport-https libicu-dev
          [ ! -f awscliv2.zip ] && curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" && unzip awscliv2.zip && ./aws/install
          aws --version
          aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID --profile default
          aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY --profile default
          aws configure set region $AWS_DEFAULT_REGION --profile default
          aws s3 ls
          mkdir -p $BUILD_GUID
          cd $BUILD_GUID
          echo $PWD
          mkdir actions-runner && cd actions-runner
          curl -o actions-runner-linux-x64-2.289.2.tar.gz -L https://github.com/actions/runner/releases/download/v2.289.2/actions-runner-linux-x64-2.289.2.tar.gz
          echo "7ba89bb75397896a76e98197633c087a9499d4c1db7603f21910e135b0d0a238  actions-runner-linux-x64-2.289.2.tar.gz" | shasum -a 256 -c
          tar xzf ./actions-runner-linux-x64-2.289.2.tar.gz
          ./config.sh --url https://github.com/frostebite/FPS.GameClient --token <your token here from add runner menu> --ephemeral
          echo "cloud runner stop watching job"
          ./run.sh
        secrets:
        - name: awsAccessKeyId
          value: ${{ secrets.AWS_ACCESS_KEY_ID }}
        - name: awsSecretAccessKey
          value: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        - name: patGit
          value: ${{ secrets.PAT_GITHUB }}
        - name: awsDefaultRegion
          value: eu-west-2
```
