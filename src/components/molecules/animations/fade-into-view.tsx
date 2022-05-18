/* eslint-disable unicorn/no-nested-ternary */
import { ReactNodeLike } from 'prop-types';
import React, { useMemo } from 'react';
import { animated, Spring } from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';

interface FadeIntoViewProps {
  children: ReactNodeLike;
  className?: string;
  delay?: number;
}

const FadeIntoView = ({ children, className, delay }: FadeIntoViewProps) => {
  const automatedTest = useMemo(
    // @ts-ignore
    () => typeof window !== 'undefined' && typeof window.Cypress !== 'undefined',
    [],
  );

  return (
    <VisibilitySensor partialVisibility minTopValue={100}>
      {({ isVisible }) => (
        <Spring
          from={{ opacity: 0 }}
          delay={delay}
          to={{ opacity: isVisible ? 1 : automatedTest ? 1 : 0.1 }}
          config={automatedTest ? { duration: 0 } : { friction: 60 }}
        >
          {({ opacity }) => (
            <animated.div className={className} style={{ opacity }}>
              {children}
            </animated.div>
          )}
        </Spring>
      )}
    </VisibilitySensor>
  );
};

FadeIntoView.defaultProps = {
  delay: 0,
  className: undefined,
};

export default FadeIntoView;
