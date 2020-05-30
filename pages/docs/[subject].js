import { readdirSync } from 'fs';
import { resolve } from 'path';

import DocsLayout from '../../components/layout/docs-layout';

const Page = ({ subject }) => (
  <DocsLayout>
    <div>Placeholder for {subject}</div>
    {/*<div><Content /></div>*/}
  </DocsLayout>
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

Page.getInitialProps = async ({ query }) => {
  const { subject } = query

  // const { default: Content } = await import(`../../content/${subject}.mdx`);

  return { subject }
}

export default Page;
