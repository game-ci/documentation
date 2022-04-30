/* eslint-disable react/prop-types */
import AnchorItem from '@/components/markdown/components/anchor-item';

const nothing = () => null;

export default {
  h1: ({ node, children, ...props }) => (
    <AnchorItem level={1} {...props}>
      {children}
    </AnchorItem>
  ),
  h2: ({ node, children, ...props }) => (
    <AnchorItem level={2} {...props}>
      {children}
    </AnchorItem>
  ),
  h3: ({ node, children, ...props }) => (
    <AnchorItem level={3} {...props}>
      {children}
    </AnchorItem>
  ),
  h4: ({ node, children, ...props }) => (
    <AnchorItem level={4} {...props}>
      {children}
    </AnchorItem>
  ),
  h5: ({ node, children, ...props }) => (
    <AnchorItem level={5} {...props}>
      {children}
    </AnchorItem>
  ),
  h6: ({ node, children, ...props }) => (
    <AnchorItem level={6} {...props}>
      {children}
    </AnchorItem>
  ),
  /* rest is not rendered */
  br: nothing,
  del: nothing,
  em: nothing,
  p: nothing,
  ul: nothing,
  ol: nothing,
  li: nothing,
  code: nothing,
  inlineCode: nothing,
  blockquote: nothing,
  a: nothing,
  img: nothing,
};
