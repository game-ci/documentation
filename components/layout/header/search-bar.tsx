import React from 'react';
import { Menu } from 'antd';
import { SearchBox, Pagination } from 'react-instantsearch-dom';
import { FileSearchOutlined } from '@ant-design/icons';
import Configuration from '@/components/search/configuration';
import SearchResults from '@/components/search/results';
import Stats from '@/components/search/results/components/stats';

const { Item, ItemGroup, SubMenu } = Menu;

const SearchBar = (props) => (
  <SubMenu
    {...props}
    selectable={false}
    style={{ flex: 1, padding: '0 10%' }}
    title={<SearchBox />}
  >
    <Configuration />
    <ItemGroup title="Pages">
      <SearchResults />
      <Stats />
      <Pagination />
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
