import ReactMarkdown from 'react-markdown';
import PropTypes, { InferProps } from 'prop-types';
import renderers from './markdown-to-page-mapping';
import EditOnGithubLink from '../pages/docs/edit-on-github-link';

const propTypes = {
  document: PropTypes.string.isRequired,
  meta: PropTypes.shape({ title: PropTypes.string, date: PropTypes.string }).isRequired,
};

const MarkdownRenderer = ({ document, meta }: InferProps<typeof propTypes>) => {
  const { title = '', date = '' } = meta;
  const metaInformation = `${date} - ${title}`.replace(/(^\s-\s)|(\s-\s$)/, '');

  return (
    <div>
      <sub>{metaInformation}</sub>
      <ReactMarkdown source={document} renderers={renderers} />
      <EditOnGithubLink />
    </div>
  );
};

MarkdownRenderer.propTypes = propTypes;

export default MarkdownRenderer;
