import { Layout } from 'antd';
import Vercel from './vercel.svg';

const { Footer } = Layout;

const FooterWrapper = () => (
  <Footer style={{ textAlign: 'center' }}>
    Made with ❤ by open source contributors and powered by
    <a href="https://vercel.com?utm_source=game-ci">
      <Vercel alt="Vercel" style={{ margin: '0 4px -2px' }} width="20" height="16" />
    </a>
  </Footer>
);

export default FooterWrapper;
