import React from 'react';

import styles from './tooltip.module.scss';

interface Props {
  content: string;
  children: React.JSX.Element | React.JSX.Element[] | string;
}

export default function Tooltip({ children, content }: Props) {
  return (
    // For some odd reason, inline-flex fixes a small bug where the div is bigger than what it is supposed to be
    <div className="group relative inline-flex">
      {children}
      <span className={`group-hover:block ${styles.tooltipContent}`}>{content}</span>
    </div>
  );
}
