import { Layout } from 'antd';
import NavBar from './components/nav-bar';
import Breadcrumb from './components/breadcrumb';
import Footer from './components/footer';

const { Content } = Layout;

const BaseLayout = ({ children }) => (
  <Layout>
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

export default BaseLayout;
