import { ReactNodeLike } from 'prop-types';
import React from 'react';
import { animated, Spring } from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';

interface FadeIntoViewProps {
  children: ReactNodeLike;
  className?: string;
  delay?: number;
}

const FadeIntoView = ({ children, className, delay }: FadeIntoViewProps) => (
  <VisibilitySensor>
    {({ isVisible }) => (
      <Spring from={{ opacity: 0 }} delay={delay} to={{ opacity: isVisible ? 1 : 0 }}>
        {({ opacity }) => (
          <animated.div className={className} style={{ opacity }}>
            {children}
          </animated.div>
        )}
      </Spring>
    )}
  </VisibilitySensor>
);

FadeIntoView.defaultProps = {
  delay: 0,
  className: undefined,
};

export default FadeIntoView;
