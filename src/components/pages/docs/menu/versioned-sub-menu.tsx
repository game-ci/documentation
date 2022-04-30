import { MenuNode } from '@/tools/menu/menu-node';
import { MenuSegment } from '@/tools/menu/menu-segment';
import React, { useContext } from 'react';
import { Menu } from 'antd';
import { map } from 'lodash';
import Link from 'next/link';
import VersionedTitle from '@/components/pages/docs/menu/versioned-title';
import MenuContext from '@/components/pages/docs/menu/menu-context';
import { ReactNodeLike } from 'prop-types';
import { useSelector } from 'react-redux';
import { selectedVersionsSelector } from '@/logic/versions/selected-version-slice';

const { SubMenu, Item } = Menu;

const populateMenuRecursively = (collection: MenuNode, selections) => {
  // Todo sorting by item.meta.order
  return map(Object.entries(collection), ([segment, node]) => {
    if (MenuSegment.isMeta(segment)) {
      return null;
    }

    if (MenuNode.isPage(node)) {
      return (
        <Item key={`/docs/${node.meta.path}`}>
          <Link href="/docs/[...documentation-page]" as={`/docs/${node.meta.path}`}>
            <a>{node.name}</a>
          </Link>
        </Item>
      );
    }

    if (MenuSegment.isVersionContainer(segment)) {
      const { meta, ...versions } = node;
      const selectedVersion = selections[meta.path];
      return map(Object.entries(versions), ([versionSegment, versionNode]) => {
        // Todo - take hardcoded selected version from globally selected version for meta.section
        return versionSegment === selectedVersion
          ? populateMenuRecursively(versionNode, selections)
          : [];
      });
    }

    // container with menu items
    return (
      <SubMenu key={node.meta.path} title={MenuSegment.toTitle(segment)}>
        {populateMenuRecursively(node, selections)}
      </SubMenu>
    );
  });
};

interface Props {
  section: string;
  title: ReactNodeLike;
  icon: ReactNodeLike;
  children?: ReactNodeLike;
}
const VersionedSubMenu = ({ section, title, icon, children, ...props }: Props) => {
  const selectedVersions = useSelector(selectedVersionsSelector);
  const { menuStructure } = useContext(MenuContext);
  const { docs } = menuStructure;

  return (
    <SubMenu {...props} icon={icon} title={<VersionedTitle section={section} title={title} />}>
      {populateMenuRecursively(docs[section], selectedVersions)}
      {children}
    </SubMenu>
  );
};

VersionedSubMenu.defaultProps = {
  children: null,
};

export default VersionedSubMenu;
