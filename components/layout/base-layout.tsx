import type { ReactNodeLike } from 'prop-types';
import { Layout } from 'antd';
import NavBar from './header/nav-bar';
import Breadcrumb from './main/breadcrumb';
import Footer from './footer/footer';

const { Content } = Layout;

interface Props {
  children: ReactNodeLike;
  showSearch?: boolean;
}

const BaseLayout = ({ children, showSearch }: Props) => (
  <Layout style={{ minHeight: '100vh' }}>
    <NavBar showSearch={showSearch} />
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

BaseLayout.defaultProps = {
  showSearch: true,
};

export default BaseLayout;
