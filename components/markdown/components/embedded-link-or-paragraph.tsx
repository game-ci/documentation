/* eslint-disable react/prop-types */
import { Typography } from 'antd';

const { Paragraph } = Typography;

class EmbeddedLink {
  static fromChildren(children) {
    if (children.length === 1) {
      const potentialLink = children[0];

      if (typeof potentialLink === 'string' && potentialLink.startsWith('https://')) {
        return potentialLink;
      }
    }

    return null;
  }

  static isYoutubeLink(link: string) {
    return /^https:\/\/www\.youtube\.com\/watch\?v=.+$/.test(link);
  }
}

const EmbeddedLinkOrParagraph = ({ node, children, ...props }) => {
  const link = EmbeddedLink.fromChildren(children);
  if (EmbeddedLink.isYoutubeLink(link)) {
    return (
      <iframe
        width="560"
        height="315"
        src={link}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return <Paragraph {...props}>{children}</Paragraph>;
};

export default EmbeddedLinkOrParagraph;
