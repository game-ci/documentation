import { Layout, Menu } from 'antd';
import Link from 'next/link';
import { GithubOutlined, GitlabOutlined } from '@ant-design/icons';
import UnityCiLogo from '../../../images/unity-ci-brand-logo-wordmark.svg';
import DiscordLogo from '../../../images/discord-brand-logo-wordmark.svg';

const { Header } = Layout;
const { Item, ItemGroup, SubMenu } = Menu;

const NavBar = () => (
  <Header className="header">
    <a className="logo" href="/">
      <UnityCiLogo height="30" />
    </a>
    <Menu
      theme="dark"
      mode="horizontal"
      style={{ position: 'relative', display: 'flex', justifyContent: 'left' }}
      defaultSelectedKeys={['1']}
    >
      <Item key="2">
        <Link href="/">
          <a>Home</a>
        </Link>
      </Item>
      <Item key="1">
        <Link href="/docs">
          <a>Docs</a>
        </Link>
      </Item>
    </Menu>
    <Menu
      theme="dark"
      selectable={false}
      mode="horizontal"
      style={{ position: 'absolute', top: 0, right: 0 }}
    >
      <SubMenu icon={<GithubOutlined />} title="Source code">
        <ItemGroup title="Project">
          <Item icon={<GithubOutlined />} key="source:documentation">
            <a target="_blank" rel="noreferrer" href="https://github.com/Unity-CI/Website">
              Website
            </a>
          </Item>
          <Item icon={<GitlabOutlined />} key="external:example:gitlab">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://gitlab.com/gableroux/unity3d-gitlab-ci-example"
            >
              Example CI project
            </a>
          </Item>
        </ItemGroup>
        <ItemGroup title="Docker">
          <Item icon={<GitlabOutlined />} key="external:gableroux:unity3d">
            <a target="_blank" rel="noreferrer" href="https://hub.docker.com/r/gableroux/unity3d">
              GabLeRoux:Unity3D
            </a>
          </Item>
        </ItemGroup>
        <ItemGroup title="GitHub Actions">
          <Item icon={<GithubOutlined />} key="external:action:overview">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/webbertakken/unity-actions"
            >
              Unity Actions
            </a>
          </Item>
          <Item icon={<GithubOutlined />} key="external:action:builder">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/webbertakken/unity-builder"
            >
              Unity Builder
            </a>
          </Item>
          <Item icon={<GithubOutlined />} key="external:action:test-runner">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/webbertakken/unity-test-runner"
            >
              Unity Test Runner
            </a>
          </Item>
          <Item icon={<GithubOutlined />} key="external:action:activate">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/webbertakken/unity-activate"
            >
              Unity Activate
            </a>
          </Item>
          <Item icon={<GithubOutlined />} key="external:action:request-activation-file">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/webbertakken/unity-request-activation-file"
            >
              Unity Request Activation
            </a>
          </Item>
          <Item icon={<GithubOutlined />} key="external:action:return-license">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/webbertakken/unity-return-license"
            >
              Unity Return License
            </a>
          </Item>
        </ItemGroup>
      </SubMenu>
      <Item>
        <Link href="/discord">
          <DiscordLogo height={30} style={{ verticalAlign: '-0.75em' }} />
        </Link>
      </Item>
    </Menu>
  </Header>
);

export default NavBar;
