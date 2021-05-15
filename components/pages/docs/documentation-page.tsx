import { Layout } from 'antd';
import MarkdownRenderer from '@/components/markdown/markdown-renderer';
import { PageContext } from '@/components/context/page-context';
import { ReactNodeLike } from 'prop-types';
import DocumentationLayout from './documentation-layout';
import MenuSidebar from './menu-sidebar';
import AnchorsSidebar from './anchors-sidebar';

const { Content } = Layout;

interface Props {
  content?: string;
  data?: { title: string; date: string };
  children?: ReactNodeLike;
  meta?: any;
}

const DocumentationPage = ({ content, data, meta, children }: Props) => {
  return (
    <PageContext.Provider value={meta}>
      <DocumentationLayout>
        <MenuSidebar />
        <Layout className="site-layout-background">
          <Content className="page documentation-page">
            {content && <MarkdownRenderer meta={data} document={content} />}
            {children}
          </Content>
        </Layout>
        {content && <AnchorsSidebar document={content} />}
      </DocumentationLayout>
    </PageContext.Provider>
  );
};

DocumentationPage.defaultProps = {
  content: undefined,
  data: { title: '', date: '' },
  children: null,
  meta: null,
};

export default DocumentationPage;
