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
const { SubMenu, Item } = Menu;

const DocumentationSidebar = () => {
  const { asPath: currentKey } = useRouter();

  return (
    <Sider className="site-layout-background" width={200} breakpoint="lg" collapsedWidth="0">
      <Menu
        mode="inline"
        defaultSelectedKeys={[currentKey]}
        defaultOpenKeys={['main', 'github', 'gitlab', 'deployment']}
        style={{ height: '100%' }}
      >
        <SubMenu key="main" icon={<CheckOutlined />} title="Unity CI">
          <Item key="/docs">
            <Link href="/docs">
              <a>Introduction</a>
            </Link>
          </Item>
        </SubMenu>
        <SubMenu key="github" icon={<GithubOutlined />} title="GitHub">
          <Item key="/docs/github/getting-started">
            <Link href="/docs/[...documentation-page]" as="/docs/github/getting-started">
              <a>Getting started</a>
            </Link>
          </Item>
          <Item key="/docs/github/activation">
            <Link href="/docs/[...documentation-page]" as="/docs/github/activation">
              <a>Activation</a>
            </Link>
          </Item>
          <Item key="/docs/github/test-runner">
            <Link href="/docs/[...documentation-page]" as="/docs/github/test-runner">
              <a>Test runner</a>
            </Link>
          </Item>
          <Item key="/docs/github/builder">
            <Link href="/docs/[...documentation-page]" as="/docs/github/builder">
              <a>Builder</a>
            </Link>
          </Item>
          <Item key="/docs/github/returning-a-license">
            <Link href="/docs/[...documentation-page]" as="/docs/github/returning-a-license">
              <a>Returning a license</a>
            </Link>
          </Item>
        </SubMenu>
        <SubMenu key="gitlab" icon={<GitlabOutlined />} title="GitLab">
          <Item key="9" disabled>
            To be added
          </Item>
        </SubMenu>
        <SubMenu key="deployment" icon={<AppstoreAddOutlined />} title="Deployment">
          <Item key="10" disabled>
            To be added
          </Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default DocumentationSidebar;
