import { MenuStructure } from '@/tools/menu/menu-structure';
import path from 'path';
import { GetStaticProps, GetStaticPaths } from 'next';
import matter from 'gray-matter';
import Page from '@/components/layout/docs/page';
import readDirectoryRecursively from '@/core/fs/read-directory-recursively';
import generateSearchDefinitionsFromFiles from '@/tools/search/generate-definitions-from-files';

interface Props {
  content: string;
  data: { title: string; date: string };
}

// Represents all the markdown documentation pages
const Documentation = ({ content, data }: Props) => <Page content={content} data={data} />;

// Build time: Determines which pages are generated
export const getStaticPaths: GetStaticPaths = async () => {
  const filePaths = await readDirectoryRecursively(path.resolve('docs/'));
  const structure = await MenuStructure.generateFromFiles(filePaths);
  const fileMetas = await MenuStructure.getFileMetas(structure);

  // Todo - update search engine part
  if (process.env.CI) {
    generateSearchDefinitionsFromFiles(filePaths);
  }

  const paths = fileMetas.map((file) => ({
    params: { 'documentation-page': file.meta.path.split('/') },
  }));

  return { paths, fallback: false };
};

// Build time: Generate JSON for each generated page
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { 'documentation-page': parts } = params;

  const structure = await MenuStructure.load();
  const fileMetas = await MenuStructure.getFileMetas(structure);

  const seoPath = typeof parts !== 'string' ? parts.join('/') : parts;
  const page = fileMetas.find((file) => file.meta.path === seoPath);

  const content = await import(`../../docs/${page.meta.absolutePath}`);
  const { orig, ...data } = matter(content.default);

  return { props: { ...data } };
};

export default Documentation;
