import AnchorView from '@/components/markdown/components/anchor-view';
import AnchorItem from '@/components/markdown/components/anchor-item';

const nothing = () => null;

export default {
  root: AnchorView,
  heading: AnchorItem,
  /* rest is not rendered */
  paragraph: nothing,
  thematicBreak: nothing,
  list: nothing,
  listItem: nothing,
  code: nothing,
  blockquote: nothing,
  link: nothing,
  image: nothing,
  linkReference: nothing,
  imageReference: nothing,
  definition: nothing,
  inlineCode: nothing,
};
