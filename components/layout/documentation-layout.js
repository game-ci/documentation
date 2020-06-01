import { Layout } from 'antd';
import BaseLayout from './base-layout';
import DocumentationSidebar from './components/documentation-sidebar';

const { Content } = Layout;

const DocumentationLayout = ({ children }) => (
  <BaseLayout>
    <DocumentationSidebar />
    <Layout>
      <Content style={{ padding: '24px 96px', minHeight: 280 }}>{children}</Content>
    </Layout>
  </BaseLayout>
);

export default DocumentationLayout;
