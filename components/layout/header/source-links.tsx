import React from 'react';
import { AiOutlineGithub, AiOutlineGitlab } from 'react-icons/all';
import { Menu } from 'antd';

const { Item, ItemGroup, SubMenu } = Menu;

// eslint-disable-next-line unicorn/prevent-abbreviations
const SourceLinks = (props) => (
  <SubMenu
    {...props}
    selectable={false}
    icon={<AiOutlineGithub size={24} style={{ marginBottom: -5 }} />}
    title="Source code"
  >
    <ItemGroup title="Project">
      <Item icon={<AiOutlineGithub />} key="source:documentation">
        <a target="_blank" rel="noreferrer" href="https://github.com/game-ci/documentation">
          This Website
        </a>
      </Item>
      <Item icon={<AiOutlineGitlab />} key="external:example:gitlab">
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
      <Item icon={<AiOutlineGithub />} key="external:unityci:editor">
        <a target="_blank" rel="noreferrer" href="https://hub.docker.com/r/unityci/editor">
          unityci/editor
        </a>
      </Item>
    </ItemGroup>
    <ItemGroup title="GitHub Actions">
      <Item icon={<AiOutlineGithub />} key="external:action:overview">
        <a target="_blank" rel="noreferrer" href="https://github.com/game-ci/unity-actions">
          Unity Actions
        </a>
      </Item>
      <Item icon={<AiOutlineGithub />} key="external:action:request-activation-file">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/game-ci/unity-request-activation-file"
        >
          Unity Request Activation
        </a>
      </Item>
      <Item icon={<AiOutlineGithub />} key="external:action:activate">
        <a target="_blank" rel="noreferrer" href="https://github.com/game-ci/unity-activate">
          Unity Activate
        </a>
      </Item>
      <Item icon={<AiOutlineGithub />} key="external:action:test-runner">
        <a target="_blank" rel="noreferrer" href="https://github.com/game-ci/unity-test-runner">
          Unity Test Runner
        </a>
      </Item>
      <Item icon={<AiOutlineGithub />} key="external:action:builder">
        <a target="_blank" rel="noreferrer" href="https://github.com/game-ci/unity-builder">
          Unity Builder
        </a>
      </Item>
      <Item icon={<AiOutlineGithub />} key="external:action:return-license">
        <a target="_blank" rel="noreferrer" href="https://github.com/game-ci/unity-return-license">
          Unity Return License
        </a>
      </Item>
    </ItemGroup>
  </SubMenu>
);

export default SourceLinks;
