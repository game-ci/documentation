import React, { useState, useEffect } from 'react';
import { Anchor } from 'antd';
import { ReactNodeLike } from 'prop-types';

import styles from './anchor-view.module.scss';

interface Props {
  children: ReactNodeLike;
}

const AnchorView = ({ children }: Props) => {
  const [targetOffset, setTargetOffset] = useState<number | undefined>();
  const [windowHeight, setWindowHeight] = useState<number | undefined>();

  // Update offset based on window size
  useEffect(() => {
    const eightPercentOfScreenHeight = Math.floor(window.innerHeight / 12.5);
    const maxDistance = 24; // This will need to be higher if there's a sticky menu bar
    const offset = Math.min(eightPercentOfScreenHeight, maxDistance);
    setTargetOffset(offset);
  }, [windowHeight]);

  // Update window size on resize
  useEffect(() => {
    const onResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  });

  return (
    <Anchor className={styles.anchorWrapper} targetOffset={targetOffset} affix showInkInFixed>
      <div className={styles.topSpacer} />
      {children}
    </Anchor>
  );
};

export default AnchorView;
