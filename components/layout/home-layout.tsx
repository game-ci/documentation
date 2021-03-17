import type { ReactNodeLike } from 'prop-types';
import { Layout } from 'antd';
import NavBar from './header/nav-bar';
import Footer from './footer/footer';

interface Props {
  children: ReactNodeLike;
}

const HomeLayout = ({ children }: Props) => (
  <Layout style={{ minHeight: '100vh' }}>
    <NavBar showSearch={false} />
    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
      {children}
    </Layout>
    <Footer />
  </Layout>
);

export default HomeLayout;
