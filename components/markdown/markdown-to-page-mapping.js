import { Typography, Divider } from 'antd';
import Blockquote from './components/blockquote';

import CodeBlock from './components/code-block';
import { List, ListItem } from './components/list';
import Article from './components/article';
import HeadingWithAnchor from './components/heading-with-anchor';

const { Paragraph } = Typography;

export default {
  root: Article,
  heading: HeadingWithAnchor,
  paragraph: Paragraph,
  thematicBreak: Divider,
  list: List,
  listItem: ListItem,
  code: CodeBlock,
  blockquote: Blockquote,
  // link: ' - Link (<a>)',
  // image: ' - Image (<img>)',
  // linkReference: ' - Link (through a reference) (<a>)',
  // imageReference: ' - Image (through a reference) (<img>)',
  // definition: ' - Definition (not rendered by default)',
  // inlineCode: ' - Inline code (<code>)',
};
