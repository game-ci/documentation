import type { ReactNodeLike } from 'prop-types';
import { Layout } from 'antd';
import NavBar from './header/nav-bar';
import Footer from './footer/footer';

const { Content } = Layout;

interface Props {
  children: ReactNodeLike;
  showSearch?: boolean;
}

const BaseLayout = ({ children, showSearch }: Props) => (
  <Layout style={{ minHeight: '100vh' }}>
    <NavBar showSearch={showSearch} />
    <Content>{children}</Content>
    <Footer />
  </Layout>
);

BaseLayout.defaultProps = {
  showSearch: true,
};

export default BaseLayout;
