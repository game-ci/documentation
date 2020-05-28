import { readdirSync } from 'fs';
import { resolve } from 'path';
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

const PostTemplate = ({ content, meta: { title, date } }) => (
  <div>
    <h1>{title}</h1>
    <sub>{date}</sub>

    <ReactMarkdown source={content} escapeHtml={false} />
  </div>
);

export async function getStaticPaths() {
  const paths = await readdirSync(resolve('content/')).map(file => (
    { params: { subject: file.replace(/\.mdx?$/, '') }}
  ));

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const { subject } = params;

  const markdownFile  = await import(`../../content/${subject}.md`);
  const { orig, data: meta, isEmpty, content, excerpt } = matter(markdownFile.default)

  return { props: { meta, isEmpty, content, excerpt } }
}

export default PostTemplate;
