import { ReactNodeLike } from 'prop-types';
import React, { ForwardedRef } from 'react';

interface SectionProps {
  className?: string;
  children: ReactNodeLike;
}

const Section = React.forwardRef(
  ({ className, children, ...rest }: SectionProps, ref: ForwardedRef<HTMLDivElement>) => (
    <section
      ref={ref}
      {...rest}
      className={`w-full p-16 min-h-[30vh] flex flex-col items-center bg-background-normal-light dark:bg-background-normal-dark even:bg-background-darker-light dark:even:bg-background-darker-dark text-brand-text-light dark:text-brand-text-dark${
        className ? ` ${className}` : ''
      }`}
    >
      {children}
    </section>
  ),
);

Section.defaultProps = {
  className: '',
};

export default Section;
