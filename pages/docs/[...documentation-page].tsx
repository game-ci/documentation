import { resolve } from 'path';
import { GetStaticProps, GetStaticPaths } from 'next';
import matter from 'gray-matter';

import DocumentationLayout from '@/components/layout/documentation-layout';
import MarkdownRenderer from '@/components/markdown/markdown-renderer';
import readDirectoryRecursively from '@/core/fs/read-directory-recursively';
import readFile from '@/core/fs/read-file';

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

  const cache = [];
  const paths = [];

  for (const file of files) {
    const path = file.replace(/\.md$/, '');

    cache.push({
      objectID: `docs/${file}`,
      path,
      contents: readFile(resolve('docs/', file)),
    });

    paths.push({
      params: { 'documentation-page': path.split('/') },
    });
  }

  // Todo - Split pages into articles or sub-sections based on headings
  // Todo - Deduce permalink from headings
  console.log(cache);

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
