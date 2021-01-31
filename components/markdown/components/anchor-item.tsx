import React from 'react';
import { ReactNodeLike } from 'prop-types';
import { Anchor } from 'antd';
import { extractAnchorId } from '../../../tools/search/utils/extract-sections';

const { Link } = Anchor;

interface Props {
  level: number;
  children: ReactNodeLike;
}

const AnchorItem = ({ level, children }: Props) => {
  if (level >= 6) {
    return null;
  }

  // @ts-ignore
  const textNode = React.Children.toArray(children)[0]?.props;
  if (!textNode) {
    return null;
  }

  // identity
  const { value, nodeKey } = textNode;
  const anchorId = extractAnchorId(value);

  // styles
  const paddingLeft = level * 8 - 8;
  const fontSize = `${120 - level * 10}%`;

  return (
    <div style={{ paddingLeft, fontSize }}>
      <Link key={nodeKey} href={`#${anchorId}`} title={value} />
    </div>
  );
};

export default AnchorItem;
