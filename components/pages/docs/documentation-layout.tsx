import BaseLayout from '@/components/layout/base-layout';
import type { ReactNodeLike } from 'prop-types';
import { Layout } from 'antd';
import Breadcrumb from '../../layout/main/breadcrumb';

interface Props {
  children: ReactNodeLike;
  showSearch?: boolean;
}

const DocumentationLayout = ({ children, showSearch }: Props) => (
  <BaseLayout showSearch={showSearch}>
    <Breadcrumb />
    <Layout
      hasSider
      className="site-layout-background"
      style={{ padding: '12px 0', flexDirection: 'row' }}
    >
      {children}
    </Layout>
  </BaseLayout>
);

DocumentationLayout.defaultProps = {
  showSearch: true,
};

export default DocumentationLayout;
