import { Menu, Layout } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  GithubOutlined,
  CheckOutlined,
  AppstoreAddOutlined,
  GitlabOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;

const DocumentationSidebar = () => {
  const { asPath: currentKey } = useRouter();

  return (
    <Sider className="site-layout-background" width={200}>
      <Menu
        mode="inline"
        defaultSelectedKeys={[currentKey]}
        defaultOpenKeys={['main', 'github', 'gitlab', 'deployment']}
        style={{ height: '100%' }}
      >
        <SubMenu key="main" icon={<CheckOutlined />} title="Unity CI">
          <Menu.Item key="/docs">
            <Link href="/docs">
              <a>Introduction</a>
            </Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="github" icon={<GithubOutlined />} title="GitHub">
          <Menu.Item key="/docs/getting-started">
            <Link href="/docs/[page]" as="/docs/getting-started">
              <a>Getting started</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/docs/activation">
            <Link href="/docs/[page]" as="/docs/activation">
              <a>Activation</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/docs/test-runner">
            <Link href="/docs/[page]" as="/docs/test-runner">
              <a>Test runner</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/docs/builder">
            <Link href="/docs/[page]" as="/docs/builder">
              <a>Builder</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/docs/testing-a-license">
            <Link href="/docs/[page]" as="/docs/testing-a-license">
              <a>Testing a license</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/docs/returning-a-license">
            <Link href="/docs/[page]" as="/docs/returning-a-license">
              <a>Returning a license</a>
            </Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="gitlab" icon={<GitlabOutlined />} title="GitLab">
          <Menu.Item key="9" disabled>
            To be added
          </Menu.Item>
        </SubMenu>
        <SubMenu key="deployment" icon={<AppstoreAddOutlined />} title="Deployment">
          <Menu.Item key="10" disabled>
            To be added
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default DocumentationSidebar;
