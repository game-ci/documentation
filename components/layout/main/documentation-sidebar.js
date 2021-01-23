import { Menu, Layout } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { QuestionCircleOutlined } from '@ant-design/icons';
import {
  SiTravisci,
  SiGithubactions,
  SiGitlab,
  SiSteam,
  AiOutlineInfoCircle,
} from 'react-icons/all';

const { Sider } = Layout;
const { SubMenu, Item } = Menu;

const DocumentationSidebar = () => {
  const { asPath: currentKey } = useRouter();

  const main = 'main';
  const current = currentKey.split('/')[2] || main;
  const openSections = [current];

  return (
    <Sider className="site-layout-background" width={200} breakpoint="lg" collapsedWidth="0">
      <Menu
        mode="inline"
        defaultSelectedKeys={[currentKey]}
        defaultOpenKeys={openSections}
        subMenuOpenDelay={1}
        style={{ height: '100%' }}
      >
        <SubMenu key="main" icon={<AiOutlineInfoCircle />} title="GameCI">
          <Item key="/docs">
            <Link href="/docs">
              <a>Introduction</a>
            </Link>
          </Item>
          <Item key="/docs/game-ci/docker-images">
            <Link href="/docs/[...documentation-page]" as="/docs/game-ci/docker-images">
              <a>Unity images</a>
            </Link>
          </Item>
        </SubMenu>
        <SubMenu key="github" icon={<SiGithubactions />} title="GitHub">
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
        <SubMenu key="gitlab" icon={<SiGitlab />} title="GitLab">
          <Item key="/docs/gitlab/getting-started">
            <Link href="/docs/[...documentation-page]" as="/docs/gitlab/getting-started">
              <a>Getting started</a>
            </Link>
          </Item>
          <Item key="/docs/gitlab/activation">
            <Link href="/docs/[...documentation-page]" as="/docs/gitlab/activation">
              <a>Activation</a>
            </Link>
          </Item>
          <Item key="/docs/gitlab/example-project">
            <Link href="/docs/[...documentation-page]" as="/docs/gitlab/example-project">
              <a>Example project</a>
            </Link>
          </Item>
          <Item key="/docs/gitlab/android">
            <Link href="/docs/[...documentation-page]" as="/docs/gitlab/android">
              <a>Android</a>
            </Link>
          </Item>
          <Item key="/docs/gitlab/ios">
            <Link href="/docs/[...documentation-page]" as="/docs/gitlab/ios">
              <a>iOS</a>
            </Link>
          </Item>
          <Item key="/docs/gitlab/tests">
            <Link href="/docs/[...documentation-page]" as="/docs/gitlab/tests">
              <a>Tests</a>
            </Link>
          </Item>
          <Item key="/docs/gitlab/use-custom-build-options">
            <Link href="/docs/[...documentation-page]" as="/docs/gitlab/use-custom-build-options">
              <a>Custom build options</a>
            </Link>
          </Item>
        </SubMenu>
        <SubMenu key="travis" icon={<SiTravisci />} title="Travis CI">
          <Item key="/docs/travis/getting-started">
            <Link href="/docs/[...documentation-page]" as="/docs/travis/getting-started">
              <a>Getting started</a>
            </Link>
          </Item>
        </SubMenu>
        <SubMenu key="deployment" icon={<SiSteam />} title="Deployment">
          <Item key="10" disabled>
            To be added
          </Item>
        </SubMenu>
        <SubMenu key="troubleshooting" icon={<QuestionCircleOutlined />} title="Troubleshooting">
          <Item key="/docs/troubleshooting/common-issues">
            <Link href="/docs/[...documentation-page]" as="/docs/troubleshooting/common-issues">
              <a>Common issues</a>
            </Link>
          </Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default DocumentationSidebar;
