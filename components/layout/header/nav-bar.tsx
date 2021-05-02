import React from 'react';
import { Layout, Menu } from 'antd';
import Link from 'next/link';
import SearchBar from '@/components/layout/header/search-bar';
import SourceLinks from '@/components/layout/header/source-links';
import { IoLogoDiscord } from 'react-icons/all';
import GameCiLogo from '../../../assets/images/game-ci-brand-logo-wordmark.svg';

const { Header } = Layout;
const { Item } = Menu;

interface Props {
  showSearch: boolean;
}

const NavBar = ({ showSearch }: Props) => (
  <Header className="header">
    <a className="logo" href="/">
      <GameCiLogo width="60" height="60" />
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
      {showSearch ? <SearchBar /> : <div style={{ flex: 1 }} />}
      <SourceLinks />
      <Item>
        <Link href="/discord">
          <span>
            <IoLogoDiscord size={24} style={{ marginBottom: -5 }} />
            Discord
          </span>
        </Link>
      </Item>
    </Menu>
  </Header>
);

export default NavBar;
