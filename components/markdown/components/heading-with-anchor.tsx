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

  const hashIndex = href.indexOf('#');
  const baseUrl = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
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

  const onKeyPress = (event) => {
    if (event.keyCode === 13) {
      copyUrlToClipboard(anchorId, onSuccessfullyCopied);
    }
  };

  const anchor = (
    <span onClick={onClick} className="anchor" role="button" tabIndex={0} onKeyPress={onKeyPress}>
      #
    </span>
  );

  return (
    <Heading level={level} id={anchorId}>
      {children}
      {level >= 2 && anchor}
    </Heading>
  );
};

export default HeadingWithAnchor;
