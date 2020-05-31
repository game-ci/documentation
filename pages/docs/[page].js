import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

import { readdirSync } from 'fs';
import { resolve } from 'path';
import DocsLayout from '../../components/layout/docs-layout';

const Page = ({ content, data }) => {
  const { title, date } = data;
  return (
    <DocsLayout>
    <div>
      <h1>{title}</h1>
      <sub>{date}</sub>

      <ReactMarkdown source={content} />
    </div>
    </DocsLayout>
  );
};

// Build time: Determines which pages are generated
export async function getStaticPaths() {
  const paths = await readdirSync(resolve('docs/')).map(file => (
    { params: { page: file.replace(/\.md$/, '') } }
  ));

  return { paths, fallback: false };
}

// Build time: Generate JSON for each generated page
export async function getStaticProps({ params }) {
  const { page } = params;

  const content = await import(`../../docs/${page}.md`);
  const { orig, ...data } = matter(content.default);

  return { props: { ...data } };
}

// Runtime: Generate props for requested page
// Page.getInitialProps = async ({ query }) => {
//   const { page } = query;
//
//   const content = await import(`../../docs/${page}.md`)
//   const data = matter(content.default)
//
//   return { ...data };
// };

export default Page;
