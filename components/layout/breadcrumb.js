import { Breadcrumb } from 'antd';

const { Item } = Breadcrumb;

const BreadcrumbWrapper = () => (
  <Breadcrumb style={{ margin: '16px 0' }}>
    <Item>Home</Item>
    <Item>List</Item>
    <Item>App</Item>
  </Breadcrumb>
);

export default BreadcrumbWrapper;
