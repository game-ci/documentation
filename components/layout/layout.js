import { Layout, Menu } from 'antd';
import NavBar from './nav-bar';
import Breadcrumb from './breadcrumb';
import Footer from './footer';

const { Content } = Layout;

const LayoutWrapper = ({children}) => (
  <Layout>
    <NavBar />
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb />
      {children}
    </Content>
    <Footer />
  </Layout>
);

export default LayoutWrapper;
