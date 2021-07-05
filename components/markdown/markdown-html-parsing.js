import htmlParser from 'react-markdown/plugins/html-parser';
import HtmlToReact from 'html-to-react';

const processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions();
const parseHtml = htmlParser({
  isValidNode: (node) => node.type !== 'script',
  processingInstructions: [
    // Remove anything that isnt an iframe.
    {
      shouldProcessNode(node) {
        return node.name !== 'iframe';
      },
      processNode() {
        return [];
      },
    },
    // Remove non-youtube embeds.
    {
      shouldProcessNode(node) {
        const url = node.attribs.src;
        const regExp = /(http).+(youtube).+/;
        return !regExp.test(url);
      },
      processNode() {
        return [];
      },
    },
    {
      // Everything else (ie. youtube embeds) are allowed.
      shouldProcessNode() {
        return true;
      },
      processNode: processNodeDefinitions.processDefaultNode,
    },
  ],
});

export default {
  parseHtml,
};
