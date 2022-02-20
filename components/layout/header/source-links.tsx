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
    <ItemGroup title="Projects">
      <Item icon={<AiOutlineGithub />} key="source:game-ci:documentation">
        <a target="_blank" rel="noreferrer" href="https://github.com/game-ci/documentation">
          This Website
        </a>
      </Item>
      <Item icon={<AiOutlineGithub />} key="source:game-ci:versioning-backend">
        <a target="_blank" rel="noreferrer" href="https://github.com/game-ci/versioning-backend">
          Versioning Backend
        </a>
      </Item>
    </ItemGroup>
    <ItemGroup title="Docker">
      <Item icon={<AiOutlineGithub />} key="external:game-ci:docker">
        <a target="_blank" rel="noreferrer" href="https://github.com/game-ci/docker">
          Docker images for Unity
        </a>
      </Item>
    </ItemGroup>
    <ItemGroup title="Gitlab">
      <Item icon={<AiOutlineGitlab />} key="external:game-ci:unity3d-gitlab-ci-example">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://gitlab.com/gableroux/unity3d-gitlab-ci-example"
        >
          gitlab-ci unity3d example project
        </a>
      </Item>
    </ItemGroup>
    <ItemGroup title="GitHub Actions">
      <Item icon={<AiOutlineGithub />} key="external:game-ci:unity-actions">
        <a target="_blank" rel="noreferrer" href="https://github.com/game-ci/unity-actions">
          Unity Actions
        </a>
      </Item>
      <Item icon={<AiOutlineGithub />} key="external:game-ci:unity-request-activation-file">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/game-ci/unity-request-activation-file"
        >
          Unity Request Activation
        </a>
      </Item>
      <Item icon={<AiOutlineGithub />} key="external:game-ci:unity-activate">
        <a target="_blank" rel="noreferrer" href="https://github.com/game-ci/unity-activate">
          Unity Activate
        </a>
      </Item>
      <Item icon={<AiOutlineGithub />} key="external:game-ci:unity-test-runner">
        <a target="_blank" rel="noreferrer" href="https://github.com/game-ci/unity-test-runner">
          Unity Test Runner
        </a>
      </Item>
      <Item icon={<AiOutlineGithub />} key="external:game-ci:unity-builder">
        <a target="_blank" rel="noreferrer" href="https://github.com/game-ci/unity-builder">
          Unity Builder
        </a>
      </Item>
      <Item icon={<AiOutlineGithub />} key="external:game-ci:unity-return-license">
        <a target="_blank" rel="noreferrer" href="https://github.com/game-ci/unity-return-license">
          Unity Return License
        </a>
      </Item>
      <Item icon={<AiOutlineGithub />} key="external:game-ci:steam-deploy">
        <a target="_blank" rel="noreferrer" href="https://github.com/game-ci/steam-deploy">
          Steam Deploy
        </a>
      </Item>
    </ItemGroup>
  </SubMenu>
);

export default SourceLinks;
