import React, { forwardRef } from 'react';
import { Input, Menu } from 'antd';
import { FileSearchOutlined } from '@ant-design/icons';

const { Item, ItemGroup, SubMenu } = Menu;

const search = (value, event) => {
  console.log(`Searching for ${value} ...`, event);
};

const SearchBar = forwardRef((props, reference) => (
  <SubMenu
    {...props}
    selectable={false}
    style={{ flex: 1, padding: '0 10%' }}
    title={<Input.Search onSearch={search} />}
    ref={reference}
  >
    <ItemGroup title="Pages">
      <Item icon={<FileSearchOutlined />} key="source:documentation">
        <a target="_blank" rel="noreferrer" href="https://github.com/game-ci/documentation">
          Website
        </a>
      </Item>
    </ItemGroup>
    <ItemGroup title="Sections">
      <Item icon={<FileSearchOutlined />} key="source:documentation">
        <a target="_blank" rel="noreferrer" href="https://github.com/game-ci/documentation">
          Website
        </a>
      </Item>
    </ItemGroup>
  </SubMenu>
));

export default SearchBar;
