import { Layout, Menu } from 'antd';
import Link from 'next/link';
import SearchBar from '@/components/layout/header/search-bar';
import DiscordLogo from '@/components/layout/logos/discord-logo';
import SourceLinks from '@/components/layout/header/source-links';
import GameCiLogo from '../../../images/game-ci-brand-logo-wordmark.svg';

const { Header } = Layout;
const { Item } = Menu;

const NavBar = () => (
  <Header className="header">
    <a className="logo" href="/">
      <GameCiLogo height="30" />
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
      <SearchBar />
      <SourceLinks />
      <Item selectable={false}>
        <Link href="/discord">
          <DiscordLogo />
        </Link>
      </Item>
    </Menu>
  </Header>
);

export default NavBar;
