import { Layout, Menu } from 'antd';
import Link from 'next/link';

const { Header } = Layout;
const { Item } = Menu;

const NavBar = () => (
  <Header className="header">
    <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
      <Item key="2">Home</Item>
      <Item key="1">
        <Link href="/docs">
          <a>Docs</a>
        </Link>
      </Item>
      <Item key="3">nav 3</Item>
    </Menu>
  </Header>
);

export default NavBar;
