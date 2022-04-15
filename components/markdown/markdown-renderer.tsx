import Article from '@/components/markdown/components/article';
import ReactMarkdown from 'react-markdown';
import PropTypes, { InferProps } from 'prop-types';
import remarkGfm from 'remark-gfm';
import components from './markdown-components';
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
      <Article>
        {/* @ts-ignore // todo - fix type properly */}
        <ReactMarkdown components={components} remarkPlugins={[remarkGfm]}>
          {document}
        </ReactMarkdown>
      </Article>
      <EditOnGithubLink />
    </div>
  );
};

MarkdownRenderer.propTypes = propTypes;

export default MarkdownRenderer;
