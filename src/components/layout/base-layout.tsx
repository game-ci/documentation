import type { ReactNodeLike } from 'prop-types';
import { Layout } from 'antd';
import NavBar from './header/nav-bar';
import Footer from './footer/footer';

const { Content } = Layout;

interface Props {
  children: ReactNodeLike;
  showSearch?: boolean;
  stickyHeader?: boolean;
}

const BaseLayout = ({ children, showSearch, stickyHeader }: Props) => (
  <Layout style={{ minHeight: '100vh' }}>
    <NavBar showSearch={showSearch} stickyHeader={stickyHeader} />
    <Content style={{ paddingTop: stickyHeader ? '64px' : 0 }}>{children}</Content>
    <Footer />
  </Layout>
);

BaseLayout.defaultProps = {
  showSearch: true,
  stickyHeader: false,
};

export default BaseLayout;
