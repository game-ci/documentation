import React from 'react';
import { MenuNode } from '@/tools/menu/menu-node';
import { MenuSegment } from '@/tools/menu/menu-segment';
import { MenuStructure } from '@/tools/menu/menu-structure';
import Link from 'next/link';
import { Breadcrumb } from 'antd';
import { AiOutlineHome } from 'react-icons/all';
import usePathSegments from '@/core/routing/use-path-segments';
import MenuContext from '../../pages/docs/menu/menu-context';

const { Item } = Breadcrumb;

const BreadcrumbWrapper = () => {
  const segments = usePathSegments(<AiOutlineHome />);
  const { menuStructure } = React.useContext(MenuContext);

  return (
    <Breadcrumb>
      {segments.map(({ url, name }) => {
        if (MenuSegment.isVersion(name)) return null;
        // "/" is a segment too
        if (typeof name !== 'string') return null;

        // If segment matches folder in generated menu-structure, determine its first page
        const menuNode = MenuStructure.getNodeByUrl(menuStructure, url);
        const nearestUrl = MenuNode.findFirstPage(menuNode);
        const href = nearestUrl ? `/docs/${nearestUrl}` : url;
        const capitalisedName = name.charAt(0).toUpperCase() + name.slice(1);

        return (
          <Item key={href}>
            <Link href={href}>
              <a>{capitalisedName}</a>
            </Link>
          </Item>
        );
      })}
    </Breadcrumb>
  );
};

export default BreadcrumbWrapper;
