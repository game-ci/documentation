import { Layout } from 'antd';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import markdownToReactMapping from '../../markdown/markdown-to-anchors-mapping';

const { Sider } = Layout;

interface Props {
  document: string;
}

const AnchorsSidebar = ({ document }: Props) => {
  return (
    <Sider
      className="site-layout-background"
      width={200}
      breakpoint="xl"
      collapsedWidth="0"
      reverseArrow
    >
      <ReactMarkdown source={document} renderers={markdownToReactMapping} />
    </Sider>
  );
};

export default AnchorsSidebar;
