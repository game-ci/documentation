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
    // Starts with youtube
    if (/^https:\/\/www\.youtube(-nocookie)?\.com/.test(link)) {
      // Url as expected
      if (!/^https:\/\/www\.youtube-nocookie\.com\/embed\/.+$/.test(link)) {
        throw new Error(
          `Found youtube link, but it is malformed.
        expected format: "https://www.youtube-nocookie.com/embed/XXXXXXXXXX"
        but received: "${link}"`,
        );
      }

      return true;
    }

    return false;
  }
}

const EmbeddedLinkOrParagraph = ({ node, children, ...props }) => {
  const regularParagraph = <Paragraph {...props}>{children}</Paragraph>;

  const link = EmbeddedLink.fromChildren(children);
  if (!link) return regularParagraph;

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

  return regularParagraph;
};

export default EmbeddedLinkOrParagraph;
