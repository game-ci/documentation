import { ReactNodeLike } from 'prop-types';
import React from 'react';

interface SectionProps {
  className?: string;
  children: ReactNodeLike;
}

const Section = ({ className, children, ...rest }: SectionProps) => (
  <div {...rest} className={className}>
    {children}
  </div>
);

Section.defaultProps = {
  className: undefined,
};

export default Section;
