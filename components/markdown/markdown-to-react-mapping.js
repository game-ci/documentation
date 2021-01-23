import { Typography, Divider } from 'antd';

import CodeBlock from './components/code-block';
import Heading from './components/heading';
import { List, ListItem } from './components/list';
import Article from './components/article';

const { Paragraph } = Typography;

export default {
  root: Article,
  heading: Heading,
  paragraph: Paragraph,
  thematicBreak: Divider,
  list: List,
  listItem: ListItem,
  code: CodeBlock,
  // blockquote: Blockquote, // ' - Block quote (<blockquote>)',
  // link: ' - Link (<a>)',
  // image: ' - Image (<img>)',
  // linkReference: ' - Link (through a reference) (<a>)',
  // imageReference: ' - Image (through a reference) (<img>)',
  // definition: ' - Definition (not rendered by default)',
  // inlineCode: ' - Inline code (<code>)',
};
