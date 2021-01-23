import React from 'react';
import ParallaxG from './parallaxG';

export default function svgBgToParallax(children, i = 0) {
  return React.Children.toArray(children).map((child, ii) => (
    <ParallaxG
      key={ii.toString()}
      location="page2"
      animation={{
        y: Math.random() * -200 - 30 - i * 20,
        playScale: [0, Math.random() + 2],
      }}
    >
      {child}
    </ParallaxG>
  ));
}
