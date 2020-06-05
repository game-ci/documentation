import { Layout } from 'antd';
import { InferProps } from 'prop-types';
import propertyTypes from '../../core/property-types';
import BaseLayout from './base-layout';
import DocumentationSidebar from './components/documentation-sidebar';

const { Content } = Layout;

const propTypes = {
  children: propertyTypes.children.isRequired,
};

const DocumentationLayout = ({ children }: InferProps<typeof propTypes>) => (
  <BaseLayout>
    <DocumentationSidebar />
    <Layout className="site-layout-background">
      <Content style={{ padding: '24px 96px', minHeight: 280 }}>{children}</Content>
    </Layout>
  </BaseLayout>
);

DocumentationLayout.propTypes = propTypes;

export default DocumentationLayout;
