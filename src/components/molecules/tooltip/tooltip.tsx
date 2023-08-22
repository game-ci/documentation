import React, { useRef } from 'react';

interface Props {
  content: string;
  isHidden: boolean;
}

export default function Tooltip({ content, isHidden }: Props) {
  const tooltipDiv: React.MutableRefObject<HTMLDivElement> = useRef(null);

  setInterval(() => {
    if (isHidden) return;

    tooltipDiv.current.scrollIntoView();
  }, 10);
  return <div ref={tooltipDiv}>{content}</div>;
}
