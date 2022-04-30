import React, { useReducer } from 'react';

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
  const command =
    `docker build . --file ./editor/Dockerfile -t editor ` +
    `--build-arg=version=${editorVersion} ` +
    `--build-arg=changeSet=${changeSet} ` +
    `--build-arg=module=${targetPlatform}`;

  return (
    <div {...rest}>
      <h4>CI Job</h4>
      <pre>{JSON.stringify(ciJob, null, 2)}</pre>
      <br />
      <h4>Commands</h4>
      <p>To manually build for debugging:</p>
      ```powershell
      {[command]}
      ```
      <br />
      <h4>Associated tags</h4>
      <pre>{JSON.stringify(tags, null, 2)}</pre>
      <br />
      <h4>CI Build</h4>
      <pre>{JSON.stringify(ciBuild, null, 2)}</pre>
    </div>
  );
};

export default BuildFailureDetails;
