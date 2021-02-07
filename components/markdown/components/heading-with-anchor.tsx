import React from 'react';
import Heading from '@/components/markdown/components/heading';
import { extractAnchorId } from '../../../tools/search/utils/extract-sections';

interface Props {
  level: number;
  children: React.ReactNode;
}

const copyUrlToClipboard = (hash) => {
  const { href } = window.location;

  const baseUrl = href.slice(0, Math.min(href.length, href.indexOf('#')));
  const link = `${baseUrl}#${hash}`;

  navigator.clipboard.writeText(link);
};

const HeadingWithAnchor = ({ level, children }: Props) => {
  const textNode = React.Children.toArray(children)[0];
  // @ts-ignore
  const { value } = textNode.props;
  const anchorId = extractAnchorId(value);

  return (
    <Heading level={level} id={anchorId}>
      {children}
      <span className="anchor">
        {' '}
        <a href={`#${anchorId}`} onClick={() => copyUrlToClipboard(anchorId)}>
          #
        </a>
      </span>
    </Heading>
  );
};

export default HeadingWithAnchor;
