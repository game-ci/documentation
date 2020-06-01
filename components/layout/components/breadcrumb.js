import Link from 'next/link';
import { Breadcrumb } from 'antd';
import usePathSegments from '../../../core/hooks/use-path-segments';

const { Item } = Breadcrumb;

const BreadcrumbWrapper = () => {
  const segments = usePathSegments('Unity CI');
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      {segments.map(({ url, name }) => (
        <Item key={url} style={{ textTransform: 'capitalize' }}>
          <Link href={url}>
            <a>{name}</a>
          </Link>
        </Item>
      ))}
    </Breadcrumb>
  );
};

export default BreadcrumbWrapper;
