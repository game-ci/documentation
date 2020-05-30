// import { readdirSync } from 'fs';
// import { resolve } from 'path';
// import DocsLayout from '../../components/layout/docs-layout';

const Page = ({ subject, Content }) => (
  // <DocsLayout>
  // Todo - Content can't be rehydrated, probably need to move to react-markdown
  <div>
    <div>Placeholder for {subject}</div>
    { Content ? <Content /> : <div>Loading or failed to rehydrate</div> }
  </div>
  // </DocsLayout>
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
  const { subject } = query;

  const { default: Content } = require(`../../content/${subject}.mdx`);

  return { subject, Content };
};

export default Page;
