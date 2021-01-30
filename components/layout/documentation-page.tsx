import { Layout } from 'antd';
import MarkdownRenderer from '@/components/markdown/markdown-renderer';
import { ReactNodeLike } from 'prop-types';
import BaseLayout from './base-layout';
import DocumentationSidebar from './main/documentation-sidebar';
import DocumentationAnchorsSidebar from './main/documentation-anchors-sidebar';

const { Content } = Layout;

interface Props {
  content?: string;
  data?: { title: string; date: string };
  children?: ReactNodeLike;
}

const DocumentationPage = ({ content, data, children }: Props) => {
  return (
    <BaseLayout>
      <DocumentationSidebar />
      <Layout className="site-layout-background">
        <Content className="page documentation-page">
          {content && <MarkdownRenderer meta={data} document={content} />}
          {children}
        </Content>
      </Layout>
      {content && <DocumentationAnchorsSidebar document={content} />}
    </BaseLayout>
  );
};

export default DocumentationPage;
