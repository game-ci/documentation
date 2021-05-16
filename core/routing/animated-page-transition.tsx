import { useTopLevelRoute } from '@/core/hooks/use-top-level-route';
import React from 'react';
import { animated, useTransition, config } from 'react-spring';

interface PageTransitionProps {
  children: any;
}

export const AnimatedPageTransition = ({ children }: PageTransitionProps) => {
  const topLevelRoute = useTopLevelRoute();

  const transitions = useTransition(topLevelRoute, {
    from: { opacity: 0, transform: 'translate3d(50%, 0%, 0px)' },
    enter: { opacity: 1, transform: 'translate3d(0%, 0px, 0px)' },
    config: config.default,
  });

  return (
    <>
      {transitions((animatedStyles, item) => {
        return (
          <animated.main key={item} style={{ willChange: 'opacity, transform', ...animatedStyles }}>
            {children(item)}
          </animated.main>
        );
      })}
    </>
  );
};
