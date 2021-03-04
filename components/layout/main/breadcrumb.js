import { MenuNode } from '@/tools/menu/menu-node';
import { MenuSegment } from '@/tools/menu/menu-segment';
import { MenuStructure } from '@/tools/menu/menu-structure';
import Link from 'next/link';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import usePathSegments from '@/core/routing/use-path-segments';
import { useContext } from 'react';
import MenuContext from '../docs/menu/menu-context';

const { Item } = Breadcrumb;

const BreadcrumbWrapper = () => {
  const segments = usePathSegments(<HomeOutlined />);
  const { menuStructure } = useContext(MenuContext);

  return (
    <Breadcrumb>
      {segments.map(({ url, name }) => {
        if (MenuSegment.isVersion(name)) return null;

        // If segment matches folder in generated menu-structure, determine its first page
        const menuNode = MenuStructure.getNodeByUrl(menuStructure, url);
        const nearestUrl = MenuNode.findFirstPage(menuNode);
        const href = nearestUrl ? `/docs/${nearestUrl}` : url;

        return (
          <Item key={href} style={{ textTransform: 'capitalize' }}>
            <Link href={href}>
              <a>{name}</a>
            </Link>
          </Item>
        );
      })}
    </Breadcrumb>
  );
};

export default BreadcrumbWrapper;
