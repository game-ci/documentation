import AnchorView from '@site/src/components/markdown/components/anchor-view';
import { Layout } from 'antd';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import markdownToAnchorsMapping from '../../../markdown/markdown-to-anchors-mapping';

import styles from './sidebars.module.scss';

const { Sider } = Layout;

interface Props {
  document: string;
}

const AnchorsSidebar = ({ document }: Props) => {
  return (
    <Sider className={styles.sidebar} width={200} breakpoint="xl" collapsedWidth="0" reverseArrow>
      <AnchorView>
        <ReactMarkdown components={markdownToAnchorsMapping}>{document}</ReactMarkdown>
      </AnchorView>
    </Sider>
  );
};

export default AnchorsSidebar;
