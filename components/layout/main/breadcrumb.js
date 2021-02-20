import { MenuSegment } from '@/tools/menu/menu-segment';
import Link from 'next/link';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import usePathSegments from '@/core/routing/use-path-segments';

const { Item } = Breadcrumb;

const BreadcrumbWrapper = () => {
  const segments = usePathSegments(<HomeOutlined />);
  return (
    <Breadcrumb>
      {segments.map(({ url, name }) => {
        if (MenuSegment.isVersion(name)) return null;

        return (
          <Item key={url} style={{ textTransform: 'capitalize' }}>
            <Link href={url}>
              <a>{name}</a>
            </Link>
          </Item>
        );
      })}
    </Breadcrumb>
  );
};

export default BreadcrumbWrapper;
