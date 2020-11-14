import { Menu, Layout } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  GithubOutlined,
  CheckOutlined,
  AppstoreAddOutlined,
  GitlabOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import { MenuItemProps } from 'antd/es/menu/MenuItem';

const { Sider } = Layout;
const { SubMenu, Item } = Menu;

const DocumentationSidebar = () => {
  const { asPath: currentKey } = useRouter();

  const main = 'main';
  const current = currentKey.split('/')[2] || main;
  const openSections = current === main ? [main] : [main, current];

  interface PageLinkProps extends MenuItemProps {
    path: string;
  }

  const PageLink = ({ path, title, children, ...rest }: PageLinkProps) => {
    const key = `/docs/${path}`;
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Item {...rest} key={key}>
        <Link href="/docs/[...documentation-page]" as={key}>
          <a>{title}</a>
        </Link>
      </Item>
    );
  };

  return (
    <Sider className="site-layout-background" width={200} breakpoint="lg" collapsedWidth="0">
      <Menu
        mode="inline"
        defaultOpenKeys={openSections}
        defaultSelectedKeys={[currentKey]}
        subMenuOpenDelay={1}
        style={{ height: '100%' }}
      >
        <SubMenu key={main} icon={<CheckOutlined />} title="Unity CI">
          <Item key="/docs">
            <Link href="/docs">
              <a>Introduction</a>
            </Link>
          </Item>
        </SubMenu>
        <SubMenu key="github" icon={<GithubOutlined />} title="GitHub">
          <PageLink path="github/getting-started" title="Getting started" />
          <PageLink path="github/activation" title="Activation" />
          <PageLink path="github/test-runner" title="Test runner" />
          <PageLink path="github/builder" title="Builder" />
          <PageLink path="github/returning-a-license" title="Returning a license" />
        </SubMenu>
        <SubMenu key="gitlab" icon={<GitlabOutlined />} title="GitLab">
          <PageLink path="gitlab/getting-started" title="Getting started" />
          <PageLink path="gitlab/activation" title="Activation" />
          <PageLink path="gitlab/example-project" title="Example project" />
          <PageLink path="gitlab/activation" title="Activation" />
          <PageLink path="gitlab/android" title="Android" />
          <PageLink path="gitlab/ios" title="iOS" />
          <PageLink path="gitlab/tests" title="Tests" />
          <PageLink path="gitlab/use-custom-build-options" title="Custom build options" />
        </SubMenu>
        <SubMenu key="travis" title="Travis CI">
          <PageLink path="travis/getting-started" title="Getting started" />
        </SubMenu>
        <SubMenu key="deployment" icon={<AppstoreAddOutlined />} title="Deployment">
          <Item key="10" disabled>
            To be added
          </Item>
        </SubMenu>
        <SubMenu key="troubleshooting" icon={<QuestionCircleOutlined />} title="Troubleshooting">
          <PageLink path="troubleshooting/common-issues" title="Common issues" />
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default DocumentationSidebar;
