import { Layout } from 'antd';
import MarkdownRenderer from '@/components/markdown/markdown-renderer';
import { ReactNodeLike } from 'prop-types';
import BaseLayout from '../base-layout';
import MenuSidebar from './menu-sidebar';
import AnchorsSidebar from './anchors-sidebar';

const { Content } = Layout;

interface Props {
  content?: string;
  data?: { title: string; date: string };
  children?: ReactNodeLike;
}

const Page = ({ content, data, children }: Props) => {
  return (
    <BaseLayout>
      <MenuSidebar />
      <Layout className="site-layout-background">
        <Content className="page documentation-page">
          {content && <MarkdownRenderer meta={data} document={content} />}
          {children}
        </Content>
      </Layout>
      {content && <AnchorsSidebar document={content} />}
    </BaseLayout>
  );
};

Page.defaultProps = {
  content: undefined,
  data: { title: '', date: '' },
  children: null,
};

export default Page;
