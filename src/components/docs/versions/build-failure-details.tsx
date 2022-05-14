import React, { useReducer } from 'react';
import CodeBlock from '@theme/CodeBlock';

interface Props {
  ciJob;
  ciBuild;
  repoVersionInfo;
  editorVersionInfo;
  style;
}

const BuildFailureDetails = ({
  ciJob,
  repoVersionInfo,
  editorVersionInfo,
  ciBuild,
  ...rest
}: Props) => {
  const { editorVersion, baseOs, targetPlatform } = ciBuild.buildInfo;
  const { major, minor, patch } = repoVersionInfo;

  const reducer = (state, action) => {
    const { tag, value } = action;
    return { ...state, [tag]: value };
  };

  const [tags /* , dispatch */] = useReducer(reducer, {
    [`${baseOs}-${editorVersion}-${targetPlatform}-${major}`]: '❓',
    [`${baseOs}-${editorVersion}-${targetPlatform}-${major}.${minor}`]: '❓',
    [`${baseOs}-${editorVersion}-${targetPlatform}-${major}.${minor}.${patch}`]: '❓',
    [`${editorVersion}-${targetPlatform}-${major}`]: '❓',
    [`${editorVersion}-${targetPlatform}-${major}.${minor}`]: '❓',
    [`${editorVersion}-${targetPlatform}-${major}.${minor}.${patch}`]: '❓',
  });

  // Todo - fetch docker info from dockerhub for all tags, or do it on the server
  // useEffect(() => {
  //   (async () => {
  //     const repo = 'unityci/editor';
  //     for (const tag of Object.keys(tags)) {
  //       const requestUrl = `https://index.docker.io/v1/repositories/${repo}/tags/${tag}`;
  //       try {
  //         const response = await fetch(requestUrl);
  //         dispatch({ tag, value: response.status === 0 });
  //       } catch (error) {
  //         dispatch({ tag, value: false });
  //       }
  //     }
  //   })();
  // }, []);

  const { changeSet } = editorVersionInfo;
  const buildCommand = `git clone git@github.com:game-ci/docker.git
cd docker
docker build . \\
  --file ./images/${baseOs}/editor/Dockerfile -t unityci-editor:${editorVersion}-${targetPlatform} \\
  --build-arg=version=${editorVersion} \\
  --build-arg=changeSet=${changeSet} \\
  --build-arg=module=${targetPlatform}`;

  const pullCommand = `docker pull unityci/editor:${baseOs}-${editorVersion}-${targetPlatform}-${major}.${minor}.${patch}`;

  return (
    <div {...rest}>
      <h4>CI Job identification</h4>
      <CodeBlock language="json">
        {JSON.stringify(ciJob, null, 2)}
      </CodeBlock>
      <br />
      <h4>Commands</h4>
      <p>Build the docker image locally for debugging:</p>
      <CodeBlock language="bash">
        {buildCommand}
      </CodeBlock>
      <p>Pull this docker image:</p>
      <CodeBlock language="bash">
        {pullCommand}
      </CodeBlock>
      <br />
      <h4>Associated tags on docker hub</h4>
      <CodeBlock language="json">
        {JSON.stringify(tags, null, 2)}
      </CodeBlock>
      <br />
      <h4>CI Build details</h4>
      <CodeBlock language="json">
        {JSON.stringify(ciBuild, null, 2)}
      </CodeBlock>
    </div>
  );
};

export default BuildFailureDetails;
