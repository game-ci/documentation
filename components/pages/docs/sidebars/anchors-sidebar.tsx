import { Layout } from 'antd';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import markdownToReactMapping from '../../../markdown/markdown-to-anchors-mapping';

import styles from './sidebars.module.scss';

const { Sider } = Layout;

interface Props {
  document: string;
}

const AnchorsSidebar = ({ document }: Props) => {
  return (
    <Sider className={styles.sidebar} width={200} breakpoint="xl" collapsedWidth="0" reverseArrow>
      <ReactMarkdown source={document} renderers={markdownToReactMapping} />
    </Sider>
  );
};

export default AnchorsSidebar;
