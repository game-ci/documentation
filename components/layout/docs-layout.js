import { Layout } from 'antd';
import BaseLayout from './base-layout';
import DocsSidebar from './components/docs-sidebar';

const { Content } = Layout;

const DocsLayout = ({ children }) => (
  <BaseLayout>
    <DocsSidebar />
    <Layout>
      <Content style={{ padding: '24px 96px', minHeight: 280 }}>{children}</Content>
    </Layout>
  </BaseLayout>
);

export default DocsLayout;
