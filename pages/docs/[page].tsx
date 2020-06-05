import { readdirSync } from 'fs';
import { resolve } from 'path';
import PropTypes, { InferProps } from 'prop-types';
import { GetStaticProps, GetStaticPaths } from 'next';
import matter from 'gray-matter';

import DocumentationLayout from '../../components/layout/documentation-layout';
import MarkdownRenderer from '../../components/markdown/markdown-renderer';

const propTypes = {
  content: PropTypes.string.isRequired,
  data: PropTypes.shape({ title: PropTypes.string, date: PropTypes.string }).isRequired,
};

// Represents all the markdown documentation pages
const Page = ({ content, data }: InferProps<typeof propTypes>) => (
  <DocumentationLayout>
    <MarkdownRenderer meta={data} document={content} />
  </DocumentationLayout>
);

Page.propTypes = propTypes;

// Build time: Determines which pages are generated
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await readdirSync(resolve('docs/')).map((file) => ({
    params: { page: file.replace(/\.md$/, '') },
  }));

  return { paths, fallback: false };
};

// Build time: Generate JSON for each generated page
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = params;

  const content = await import(`../../docs/${page}.md`);
  const { orig, ...data } = matter(content.default);

  return { props: { ...data } };
};

export default Page;
