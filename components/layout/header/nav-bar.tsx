import SearchBar from '@/components/layout/header/search-bar';
import SourceLinks from '@/components/layout/header/source-links';
import { useTopLevelRoute } from '@/core/hooks/use-top-level-route';
import { Layout, Menu } from 'antd';
import Link from 'next/link';
import React from 'react';
import { IoLogoDiscord } from 'react-icons/all';
import cx from 'classnames';
import GameCiLogo from '../../../assets/images/game-ci-brand-logo-wordmark.svg';

import styles from './nav-bar.module.scss';

const { Header } = Layout;
const { Item } = Menu;

interface Props {
  showSearch?: boolean;
  stickyHeader?: boolean;
}

const NavBar = ({ showSearch, stickyHeader }: Props) => {
  const defaultSelectedKey = useTopLevelRoute();

  return (
    <Header className={cx(styles.navBar, { [styles.sticky]: stickyHeader })}>
      <a className={styles.brand} href="/">
        <GameCiLogo height={64} width={64} />
      </a>
      <Menu
        theme="dark"
        mode="horizontal"
        className={styles.menu}
        defaultSelectedKeys={[defaultSelectedKey]}
      >
        <Item key="/">
          <Link href="/">
            <a>Home</a>
          </Link>
        </Item>
        <Item key="/docs">
          <Link href="/docs">
            <a>Docs</a>
          </Link>
        </Item>
        {showSearch ? <SearchBar /> : <div style={{ flex: 1 }} />}
        <SourceLinks />
        <Item key="/discord">
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
};

NavBar.defaultProps = {
  showSearch: false,
  stickyHeader: false,
};

export default NavBar;
