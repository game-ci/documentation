import ReactMarkdown from 'react-markdown';
import PropTypes, { InferProps } from 'prop-types';
import renderers from './markdown-to-react-mapping';

const propTypes = {
  document: PropTypes.string.isRequired,
  meta: PropTypes.shape({ title: PropTypes.string, date: PropTypes.string }).isRequired,
};

const MarkdownRenderer = ({ document, meta }: InferProps<typeof propTypes>) => {
  const { title, date } = meta;
  return (
    <div>
      <sub>{`${title} - ${date}`}</sub>

      <ReactMarkdown source={document} renderers={renderers} />
    </div>
  );
};

MarkdownRenderer.propTypes = propTypes;

export default MarkdownRenderer;
