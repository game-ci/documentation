import { InferProps } from 'prop-types';
import { Layout } from 'antd';
import NavBar from './components/nav-bar';
import Breadcrumb from './components/breadcrumb';
import Footer from './components/footer';
import propertyTypes from '../../core/property-types';

const { Content } = Layout;

export const propTypes = {
  children: propertyTypes.children.isRequired,
};

const BaseLayout = ({ children }: InferProps<typeof propTypes>) => (
  <Layout style={{ minHeight: '100vh' }}>
    <NavBar />
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb />
      <Layout
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
