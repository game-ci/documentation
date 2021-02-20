import React from 'react';
import { Menu, Layout } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { QuestionCircleOutlined } from '@ant-design/icons';
import {
  SiTravisci,
  SiGithubactions,
  SiGitlab,
  AiOutlineInfoCircle,
  SiDocker,
} from 'react-icons/all';
import VersionedSubMenu from './menu/versioned-sub-menu';

const { Sider } = Layout;
const { Item } = Menu;

const MenuSidebar = () => {
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
        <Item key="/docs" icon={<AiOutlineInfoCircle />}>
          <Link href="/docs">
            <a>Introduction</a>
          </Link>
        </Item>
        <VersionedSubMenu key="docker" section="docker" title="Docker" icon={<SiDocker />} />
        <VersionedSubMenu key="github" section="github" title="GitHub" icon={<SiGithubactions />} />
        <VersionedSubMenu key="gitlab" section="gitlab" title="GitLab" icon={<SiGitlab />} />
        <VersionedSubMenu key="travis" section="travis" title="Travis CI" icon={<SiTravisci />} />
        <VersionedSubMenu
          key="troubleshooting"
          section="troubleshooting"
          title="Troubleshooting"
          icon={<QuestionCircleOutlined />}
        />
      </Menu>
    </Sider>
  );
};

export default MenuSidebar;
