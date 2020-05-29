import { readdirSync } from 'fs';
import { resolve } from 'path';

import DocumentationPage from '../../components/docs-page';

const PostTemplate = ({ Content }) => (
  <DocumentationPage style={{ display: 'inline-flex' }}>
    <div><Content /></div>
  </DocumentationPage>
);

// export async function getStaticPaths() {
//   const paths = await readdirSync(resolve('content/')).map(file => (
//     { params: { subject: file.replace(/\.mdx?$/, '') }}
//   ));
//
//   return { paths, fallback: false }
// }
//
// export async function getStaticProps({ params }) {
//   const { subject } = params;
//   const { default: Content } = await import(`../../content/${subject}.md`);
//
//   // Todo - serialize Content in order to make it static
//   return { props: { Content } }
// }

PostTemplate.getInitialProps = async ({ query }) => {
  const { subject } = query
  const { default: Content } = await import(`../../content/${subject}.mdx`);

  return { Content }
}

export default PostTemplate;
