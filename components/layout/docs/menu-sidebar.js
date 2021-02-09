import { Menu, Layout } from 'antd';
import { map, has } from 'lodash';
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
import menuStructure from '../../../core/menu-structure.json';
import { menuVersionBranch } from '../../../tools/menu/generate-menu-structure-from-files';

const { docs } = menuStructure;

const { Sider } = Layout;
const { SubMenu, Item } = Menu;

const traverseSection = ([key, item]) => {
  // item
  if (has(item, 'key')) {
    return (
      <Item key={`/docs/${item.key}`}>
        <Link href="/docs/[...documentation-page]" as={`/docs/${item.key}`}>
          <a>{item.name}</a>
        </Link>
      </Item>
    );
  }

  // version container - todo: the versioning logic
  if (key === menuVersionBranch) {
    return map(Object.entries(item), ([versionKey, versionCollection]) => (
      <SubMenu key={versionKey} title={versionKey}>
        {map(Object.entries(versionCollection), traverseSection)}
      </SubMenu>
    ));
  }

  // other containers
  return (
    <SubMenu key="deployment" title="Deployment">
      {map(Object.entries(item), traverseSection)}
    </SubMenu>
  );
};

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
          {map(Object.entries(docs.github), traverseSection)}
          {/* <Item key="/docs/github/getting-started"> */}
          {/*  <Link href="/docs/[...documentation-page]" as="/docs/github/getting-started"> */}
          {/*    <a>Getting started</a> */}
          {/*  </Link> */}
          {/* </Item> */}
          {/* <Item key="/docs/github/activation"> */}
          {/*  <Link href="/docs/[...documentation-page]" as="/docs/github/activation"> */}
          {/*    <a>Activation</a> */}
          {/*  </Link> */}
          {/* </Item> */}
          {/* <Item key="/docs/github/test-runner"> */}
          {/*  <Link href="/docs/[...documentation-page]" as="/docs/github/test-runner"> */}
          {/*    <a>Test runner</a> */}
          {/*  </Link> */}
          {/* </Item> */}
          {/* <Item key="/docs/github/builder"> */}
          {/*  <Link href="/docs/[...documentation-page]" as="/docs/github/builder"> */}
          {/*    <a>Builder</a> */}
          {/*  </Link> */}
          {/* </Item> */}
          {/* <Item key="/docs/github/returning-a-license"> */}
          {/*  <Link href="/docs/[...documentation-page]" as="/docs/github/returning-a-license"> */}
          {/*    <a>Returning a license</a> */}
          {/*  </Link> */}
          {/* </Item> */}
          {/* <SubMenu key="deployment" title="Deployment"> */}
          {/*  <Item key="/docs/github/android"> */}
          {/*    <Link href="/docs/[...android]" as="/docs/github/android"> */}
          {/*      <a>Android</a> */}
          {/*    </Link> */}
          {/*  </Item> */}
          {/*  <Item key="/docs/github/ios"> */}
          {/*    <Link href="/docs/[...ios]" as="/docs/github/ios"> */}
          {/*      <a>iOS</a> */}
          {/*    </Link> */}
          {/*  </Item> */}
          {/* </SubMenu> */}
        </SubMenu>
        <SubMenu key="gitlab" icon={<SiGitlab />} title="GitLab">
          {map(docs.gitlab, (item) => {
            return (
              <Item key={`/docs/${item.key}`}>
                <Link href="/docs/[...documentation-page]" as={`/docs/${item.key}`}>
                  <a>{item.name}</a>
                </Link>
              </Item>
            );
          })}
        </SubMenu>
        <SubMenu key="travis" icon={<SiTravisci />} title="Travis CI">
          <Item key="/docs/travis/getting-started">
            <Link href="/docs/[...documentation-page]" as="/docs/travis/getting-started">
              <a>Getting started</a>
            </Link>
          </Item>
        </SubMenu>
        <SubMenu key="steam" icon={<SiSteam />} title="Steam">
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

export default MenuSidebar;
