import React from 'react';
import { Menu, Layout } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  SiGithubactions,
  SiGitlab,
  AiOutlineInfoCircle,
  SiDocker,
  AiOutlineQuestionCircle,
} from 'react-icons/all';
import VersionedSubMenu from '../menu/versioned-sub-menu';

import styles from './sidebars.module.scss';

const { Sider } = Layout;
const { Item } = Menu;

const MenuStructureSidebar = () => {
  const { asPath: currentKey } = useRouter();

  const main = 'main';
  const current = currentKey.split('/')[2] || main;
  const openSections = [current];

  return (
    <Sider className={styles.sidebar} width={200} breakpoint="lg" collapsedWidth="0">
      <Menu
        mode="inline"
        defaultSelectedKeys={[currentKey]}
        defaultOpenKeys={openSections}
        subMenuOpenDelay={1}
        className={styles.menuStructure}
        style={{ height: '100%', marginBottom: '-70px' }}
      >
        <VersionedSubMenu
          key="introduction"
          section="introduction"
          title="Introduction"
          icon={<AiOutlineInfoCircle />}
        />
        <VersionedSubMenu key="docker" section="docker" title="Docker" icon={<SiDocker />}>
          <Item key="/docs/docker/versions">
            <Link href="/docs/docker/versions">
              <a>Version statuses</a>
            </Link>
          </Item>
        </VersionedSubMenu>
        <VersionedSubMenu key="github" section="github" title="GitHub" icon={<SiGithubactions />} />
        <VersionedSubMenu key="gitlab" section="gitlab" title="GitLab" icon={<SiGitlab />} />
        <VersionedSubMenu
          key="troubleshooting"
          section="troubleshooting"
          title="Troubleshooting"
          icon={<AiOutlineQuestionCircle />}
        />
      </Menu>
    </Sider>
  );
};

export default MenuStructureSidebar;
