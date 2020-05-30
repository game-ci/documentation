import { Menu, Layout } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';

const { Sider } = Layout;
const { SubMenu } = Menu;

const DocsSidebar = () => {
  const { asPath: currentKey } = useRouter();

  return (
    <Sider className="site-layout-background" width={200}>
      <Menu
        mode="inline"
        defaultSelectedKeys={[currentKey]}
        defaultOpenKeys={['main', 'github', 'deployment']}
        style={{ height: '100%' }}
      >
        <SubMenu key="main" icon={<UserOutlined />} title="Unity CI">
          <Menu.Item key="/docs"><Link href="/docs"><a>Getting started</a></Link></Menu.Item>
          <Menu.Item key="/example"><Link href="/example"><a>Example</a></Link></Menu.Item>
          <Menu.Item key="3">option3</Menu.Item>
          <Menu.Item key="4">option4</Menu.Item>
        </SubMenu>
        <SubMenu key="github" icon={<LaptopOutlined />} title="Github">
          <Menu.Item key="/docs/unity-actions"><Link href="/docs/unity-actions"><a>Unity Actions</a></Link></Menu.Item>
          <Menu.Item key="6">option6</Menu.Item>
          <Menu.Item key="7">option7</Menu.Item>
          <Menu.Item key="8">option8</Menu.Item>
        </SubMenu>
        <SubMenu key="deployment" icon={<NotificationOutlined />} title="Deployment">
          <Menu.Item key="9">Steam</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default DocsSidebar;
