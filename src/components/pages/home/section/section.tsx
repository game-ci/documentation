import { ReactNodeLike } from 'prop-types';
import React, { ForwardedRef } from 'react';
import FadeIntoView from '@site/src/components/molecules/animations/fade-into-view';

interface SectionProps {
  className?: string;
  title?: string;
  children: ReactNodeLike;
}

const Section = React.forwardRef(
  ({ className, title, children, ...rest }: SectionProps, ref: ForwardedRef<HTMLDivElement>) => (
    <section
      ref={ref}
      {...rest}
      className={`w-full p-6 md:p-16 min-h-[30vh] flex flex-col items-center bg-background-normal-light dark:bg-background-normal-dark even:bg-background-darker-light dark:even:bg-background-darker-dark text-brand-text-light dark:text-brand-text-dark${
        className ? ` ${className}` : ''
      }`}
    >
      {title && (
        <FadeIntoView>
          <h2 className="text-center text-3xl md:text-5xl font-bold mb-10 text-primary-light dark:text-primary-dark">
            {title}
          </h2>
        </FadeIntoView>
      )}

      {children}
    </section>
  ),
);

Section.defaultProps = {
  className: '',
  title: '',
};

export default Section;
