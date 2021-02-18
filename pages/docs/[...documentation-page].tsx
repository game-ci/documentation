import path from 'path';
import { GetStaticProps, GetStaticPaths } from 'next';
import matter from 'gray-matter';
import Page from '@/components/layout/docs/page';
import readDirectoryRecursively from '@/core/fs/read-directory-recursively';
import generateSearchDefinitionsFromFiles from '@/tools/search/generate-definitions-from-files';
import generateMenuStructureFromFiles from '@/tools/menu/generate-menu-structure-from-files';

interface Props {
  content: string;
  data: { title: string; date: string };
}

// Represents all the markdown documentation pages
const Documentation = ({ content, data }: Props) => <Page content={content} data={data} />;

// Build time: Determines which pages are generated
export const getStaticPaths: GetStaticPaths = async () => {
  const files = await readDirectoryRecursively(path.resolve('docs/'));

  await generateMenuStructureFromFiles(files);

  if (process.env.CI) {
    generateSearchDefinitionsFromFiles(files);
  }

  const paths = [];
  for (const file of files) {
    const filePath = file.replace(/\.md$/, '');

    paths.push({
      params: { 'documentation-page': filePath.split('/') },
    });
  }

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

export default Documentation;
