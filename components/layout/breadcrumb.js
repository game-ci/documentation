import { Breadcrumb } from 'antd';
import { useRouter } from 'next/router';

const { Item } = Breadcrumb;

const BreadcrumbWrapper = () => {
  const { asPath } = useRouter();

  const segments = asPath.split('/');
  let url = ''
  const items = segments.map(segment => {
    url += `${segment}/`;
    return (
      <Item style={{ textTransform: 'capitalize' }}>
        <a href={url.slice(0, -1)}>{segment.replace('-', ' ')}</a>
      </Item>
    )
  });

  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      {items}
    </Breadcrumb>
  );
};

export default BreadcrumbWrapper;
