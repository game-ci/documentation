import { InferProps } from 'prop-types';
import { Layout } from 'antd';
import propertyTypes from '@/core/property-types';
import NavBar from './header/nav-bar';
import Breadcrumb from './main/breadcrumb';
import Footer from './footer/footer';

const { Content } = Layout;

export const propTypes = {
  children: propertyTypes.children.isRequired,
};

const BaseLayout = ({ children }: InferProps<typeof propTypes>) => (
  <Layout style={{ minHeight: '100vh' }}>
    <NavBar />
    <Content className="site-layout-main">
      <Breadcrumb />
      <Layout
        hasSider
        className="site-layout-background"
        style={{ padding: '24px 0', flexDirection: 'row' }}
      >
        {children}
      </Layout>
    </Content>
    <Footer />
  </Layout>
);

BaseLayout.propTypes = propTypes;

export default BaseLayout;
