import React from 'react';
import { notification } from 'antd';
import Heading from '@/components/markdown/components/heading';
import { extractAnchorId } from '../../../tools/search/utils/extract-sections';

interface Props {
  level: number;
  children: React.ReactNode;
}

const copyUrlToClipboard = (hash, onSuccess = () => {}, onError = () => {}) => {
  const { href } = window.location;

  const baseUrl = href.slice(0, Math.min(href.length, href.indexOf('#')));
  const link = `${baseUrl}#${hash}`;

  navigator.clipboard.writeText(link).then(onSuccess, onError);
};

const onSuccessfullyCopied = () => {
  notification.info({
    message: `Link was copied to clipboard.`,
  });
};

const HeadingWithAnchor = ({ level, children }: Props) => {
  const textNode = React.Children.toArray(children)[0];
  // @ts-ignore
  const { value } = textNode.props;
  const anchorId = extractAnchorId(value);

  const onClick = () => {
    copyUrlToClipboard(anchorId, onSuccessfullyCopied);
  };

  return (
    <Heading level={level} id={anchorId}>
      {children}
      <span className="anchor">
        {' '}
        <a href={`#${anchorId}`} onClick={onClick}>
          #
        </a>
      </span>
    </Heading>
  );
};

export default HeadingWithAnchor;
