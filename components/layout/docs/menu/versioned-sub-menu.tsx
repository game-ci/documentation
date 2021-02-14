import React, { useContext } from 'react';
import { Menu } from 'antd';
import { has, map } from 'lodash';
import Link from 'next/link';
import VersionedTitle from '@/components/layout/docs/menu/versioned-title';
import MenuContext from '@/components/layout/docs/menu/menu-context';
import { ReactNodeLike } from 'prop-types';
import { menuVersionBranch } from '@/tools/menu/generate-menu-structure-from-files';
import { normaliseTitle } from '@/tools/text';

const { SubMenu, Item } = Menu;

const populateMenuRecursively = (collection) => {
  return map(Object.entries(collection), ([key, item]) => {
    // menu item
    if (has(item, 'key')) {
      return (
        <Item key={`/docs/${item.key}`}>
          <Link href="/docs/[...documentation-page]" as={`/docs/${item.key}`}>
            <a>{item.name}</a>
          </Link>
        </Item>
      );
    }

    // container with versions
    if (key === menuVersionBranch) {
      const { meta, ...versions } = item;
      return map(Object.entries(versions), ([versionKey, versionCollection]) => {
        // Todo - take hardcoded selected version from globally selected version for meta.section
        return versionKey === 'v1' ? populateMenuRecursively(versionCollection) : [];
      });
    }

    // container with menu items
    return (
      <SubMenu key={key} title={normaliseTitle(key)}>
        {populateMenuRecursively(item)}
      </SubMenu>
    );
  });
};

interface Props {
  section: string;
  title: ReactNodeLike;
  icon: ReactNodeLike;
}
const VersionedSubMenu = ({ section, title, icon, ...props }: Props) => {
  const { menuStructure } = useContext(MenuContext);
  const { docs } = menuStructure;

  return (
    <SubMenu {...props} icon={icon} title={<VersionedTitle section={section} title={title} />}>
      {populateMenuRecursively(docs[section])}
    </SubMenu>
  );
};

export default VersionedSubMenu;
