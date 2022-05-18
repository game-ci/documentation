import { ReactNodeLike } from 'prop-types';
import React, { ForwardedRef } from 'react';
import cx from 'classnames';

import styles from './section.module.scss';

interface SectionProps {
  className?: string;
  children: ReactNodeLike;
}

const Section = React.forwardRef(
  ({ className, children, ...rest }: SectionProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div ref={ref} {...rest} className={cx(className, styles.section)}>
      {children}
    </div>
  ),
);

Section.defaultProps = {
  className: undefined,
};

export default Section;
