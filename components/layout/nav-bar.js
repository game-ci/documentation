import { Layout, Menu } from 'antd';

const { Header } = Layout;
const { Item } = Menu;

const NavBar = () => (
  <Header className="header">
    <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      <Item key="1">nav 1</Item>
      <Item key="2">nav 2</Item>
      <Item key="3">nav 3</Item>
    </Menu>
  </Header>
);

export default NavBar;
