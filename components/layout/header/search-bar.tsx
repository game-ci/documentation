import React from 'react';
import { Menu } from 'antd';
import { SearchBox } from 'react-instantsearch-dom';
import { FileSearchOutlined } from '@ant-design/icons';
import Content from '../../search/results';

const { Item, ItemGroup, SubMenu } = Menu;

const SearchBar = (props) => (
  <SubMenu
    {...props}
    selectable={false}
    style={{ flex: 1, padding: '0 10%' }}
    title={<SearchBox />}
  >
    <ItemGroup title="Pages">
      <Content>
        {/* <Item icon={<FileSearchOutlined />} key="source:documentation2"> */}
        {/*  Testing */}
        {/* </Item> */}
      </Content>
    </ItemGroup>
    <ItemGroup title="Sections">
      <Item icon={<FileSearchOutlined />} key="source:documentation">
        <a target="_blank" rel="noreferrer" href="https://github.com/game-ci/documentation">
          Website
        </a>
      </Item>
    </ItemGroup>
  </SubMenu>
);

export default SearchBar;
