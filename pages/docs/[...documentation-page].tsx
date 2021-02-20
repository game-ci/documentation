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
  meta: { [key: string]: any };
}

// Represents all the markdown documentation pages
const Documentation = ({ content, data, meta }: Props) => (
  <Page content={content} data={data} meta={meta} />
);

// Build time: Determines which pages are generated
export const getStaticPaths: GetStaticPaths = async () => {
  const filePaths = await readDirectoryRecursively(path.resolve('docs/'));
  const structure = await MenuStructure.generateFromFiles(filePaths);
  const fileMetas = await MenuStructure.getFileMetas(structure);

  if (process.env.CI) generateSearchDefinitionsFromFiles(fileMetas);

  const paths = fileMetas.map((file) => ({
    params: { 'documentation-page': file.meta.path.split('/') },
  }));

  return { paths, fallback: false };
};

interface StaticProps {
  params: { [key: string]: string[] };
}

// Build time: Generate JSON for each generated page
export const getStaticProps: GetStaticProps = async ({ params }: StaticProps) => {
  const { 'documentation-page': parts } = params;

  const structure = await MenuStructure.load();
  const fileMetas = await MenuStructure.getFileMetas(structure);

  const seoPath = parts.join('/');
  const { meta } = fileMetas.find((file) => file.meta.path === seoPath);

  const content = await import(`../../docs/${meta.absolutePath}`);
  const { orig, ...data } = matter(content.default);

  return { props: { ...data, meta } };
};

export default Documentation;
