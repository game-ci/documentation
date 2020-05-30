import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

export const mdxComponents = {
  p: Paragraph,
  h1: Title,
  // h2: (children, ...props) => <Title level={2} {...props}>{children}</Title>,
  // table: Table,
  // h1: DesignSystem.H1,
};
