import ReactMarkdown from 'react-markdown';
import PropTypes, { InferProps } from 'prop-types';
import { useRouter } from 'next/router';
import renderers from './markdown-to-react-mapping';
import GithubEdit from '../layout/main/github-edit';

const propTypes = {
  document: PropTypes.string.isRequired,
  meta: PropTypes.shape({ title: PropTypes.string, date: PropTypes.string }).isRequired,
};

const MarkdownRenderer = ({ document, meta }: InferProps<typeof propTypes>) => {
  const { title = '', date = '' } = meta;
  const metaInformation = `${date} - ${title}`.replace(/(^\s-\s)|(\s-\s$)/, '');

  const router = useRouter();
  const filePath = router.asPath.replace(/^\/+/, '');
  const repoPath = 'https://github.com/game-ci/documentation/edit/main';
  const fullPath = `${repoPath}/${filePath}.md`;

  return (
    <div>
      <sub>{metaInformation}</sub>
      <ReactMarkdown source={document} renderers={renderers} />
      <GithubEdit href={fullPath} />
    </div>
  );
};

MarkdownRenderer.propTypes = propTypes;

export default MarkdownRenderer;
