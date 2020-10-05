import { resolve } from 'path';
import { GetStaticProps, GetStaticPaths } from 'next';
import matter from 'gray-matter';

import DocumentationLayout from '@/layout/documentation-layout';
import MarkdownRenderer from '@/markdown/markdown-renderer';
import readDirectoryRecursively from '@/core/fs/read-directory-recursively';

interface Props {
  content: string;
  data: { title: string; date: string };
}

// Represents all the markdown documentation pages
const DocumentationPage = ({ content, data }: Props) => (
  <DocumentationLayout>
    <MarkdownRenderer meta={data} document={content} />
  </DocumentationLayout>
);

// Build time: Determines which pages are generated
export const getStaticPaths: GetStaticPaths = async () => {
  const files = await readDirectoryRecursively(resolve('docs/'));

  const paths = files.map((file) => ({
    params: { 'documentation-page': file.replace(/\.md$/, '').split('/') },
  }));

  return { paths, fallback: false };
};

// Build time: Generate JSON for each generated page
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { 'documentation-page': parts } = params;
  const page = typeof parts !== 'string' ? parts.join('/') : parts;

  const content = await import(`../../docs/${page}.md`);
  const { orig, ...data } = matter(content.default);

  return { props: { ...data } };
};

export default DocumentationPage;
