import React from 'react';
import { GithubOutlined, GitlabOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const { Item, ItemGroup, SubMenu } = Menu;

// eslint-disable-next-line unicorn/prevent-abbreviations
const SourceLinks = (props) => (
  <SubMenu {...props} selectable={false} icon={<GithubOutlined />} title="Source code">
    <ItemGroup title="Project">
      <Item icon={<GithubOutlined />} key="source:documentation">
        <a target="_blank" rel="noreferrer" href="https://github.com/game-ci/documentation">
          This Website
        </a>
      </Item>
      <Item icon={<GitlabOutlined />} key="external:example:gitlab">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://gitlab.com/gableroux/unity3d-gitlab-ci-example"
        >
          Example CI project
        </a>
      </Item>
    </ItemGroup>
    <ItemGroup title="Docker">
      <Item icon={<GithubOutlined />} key="external:unityci:editor">
        <a target="_blank" rel="noreferrer" href="https://hub.docker.com/r/unityci/editor">
          unityci/editor
        </a>
      </Item>
    </ItemGroup>
    <ItemGroup title="GitHub Actions">
      <Item icon={<GithubOutlined />} key="external:action:overview">
        <a target="_blank" rel="noreferrer" href="https://github.com/game-ci/unity-actions">
          Unity Actions
        </a>
      </Item>
      <Item icon={<GithubOutlined />} key="external:action:request-activation-file">
        <a target="_blank" rel="noreferrer" href="https://github.com/game-ci/unity-request-activation-file">
          Unity Request Activation
        </a>
      </Item>
      <Item icon={<GithubOutlined />} key="external:action:activate">
        <a target="_blank" rel="noreferrer" href="https://github.com/game-ci/unity-activate">
          Unity Activate
        </a>
      </Item>
      <Item icon={<GithubOutlined />} key="external:action:test-runner">
        <a target="_blank" rel="noreferrer" href="https://github.com/game-ci/unity-test-runner">
          Unity Test Runner
        </a>
      </Item>
      <Item icon={<GithubOutlined />} key="external:action:builder">
        <a target="_blank" rel="noreferrer" href="https://github.com/game-ci/unity-builder">
          Unity Builder
        </a>
      </Item>
      <Item icon={<GithubOutlined />} key="external:action:return-license">
        <a target="_blank" rel="noreferrer" href="https://github.com/game-ci/unity-return-license">
          Unity Return License
        </a>
      </Item>
    </ItemGroup>
  </SubMenu>
);

export default SourceLinks;
