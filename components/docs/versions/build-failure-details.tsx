import Heading from '@/components/markdown/components/heading';
import React, { useReducer } from 'react';

interface Props {
  ciJob;
  ciBuild;
  repoVersionInfo;
  style;
}

const BuildFailureDetails = ({ ciJob, repoVersionInfo, ciBuild, ...rest }: Props) => {
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

  return (
    <article {...rest}>
      <Heading level={4}>CI Job</Heading>
      <pre>{JSON.stringify(ciJob, null, 2)}</pre>
      <br />
      <Heading level={3}>Associated tags</Heading>
      <pre>{JSON.stringify(tags, null, 2)}</pre>
      <br />
      <Heading level={4}>CI Build</Heading>
      <pre>{JSON.stringify(ciBuild, null, 2)}</pre>
    </article>
  );
};

export default BuildFailureDetails;
