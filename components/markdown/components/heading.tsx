import { Typography } from 'antd';
import React from 'react';
import { extractAnchorId } from '../../../tools/search/utils/extract-sections';

const { Title } = Typography;

interface Props {
  level: number;
  children: React.ReactNode;
}

export default ({ level, children }: Props) => {
  const textNode = React.Children.toArray(children)[0];
  // @ts-ignore
  const { value } = textNode.props;
  const anchorId = extractAnchorId(value);

  switch (level) {
    case 1:
    case 2:
    case 3:
    case 4:
      return (
        <Title id={anchorId} level={level}>
          {children}
        </Title>
      );
    case 5:
      return (
        <h5 id={anchorId} className="ant-typography">
          {children}
        </h5>
      );
    case 6:
    default:
      return (
        <h6 id={anchorId} className="ant-typography">
          {children}
        </h6>
      );
  }
};
