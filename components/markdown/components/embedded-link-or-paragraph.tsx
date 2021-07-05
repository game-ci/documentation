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
    if (link.startsWith('https://www.youtube.com')) {
      if (/^https:\/\/www\.youtube\.com\/embed\/.+$/.test(link)) {
        return true;
      }

      throw new Error(
        `Found youtube link, but it is malformed.
        expected format: "https://www.youtube.com/embed/XXXXXXXXXX"
        but received: "${link}"`,
      );
    }

    return false;
  }
}

const EmbeddedLinkOrParagraph = ({ node, children, ...props }) => {
  const link = EmbeddedLink.fromChildren(children);
  if (!link) return <Paragraph {...props}>{children}</Paragraph>;

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
