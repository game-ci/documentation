import React from 'react';
import { Typography } from 'antd';
import cx from 'classnames';

import styles from './markdown-components.module.scss';

const { Title } = Typography;

interface Props {
  level: number;
  children: React.ReactNode;
  id?: string;
}

const Heading = ({ level, children, ...props }: Props) => {
  switch (level) {
    case 1:
    case 2:
    case 3:
    case 4:
      return (
        <Title {...props} level={level} className={styles.heading}>
          {children}
        </Title>
      );
    case 5:
      return (
        <h5 {...props} className={cx('ant-typography', styles.heading)}>
          {children}
        </h5>
      );
    case 6:
    default:
      return (
        <h6 {...props} className={cx('ant-typography', styles.heading)}>
          {children}
        </h6>
      );
  }
};

Heading.defaultProps = {
  id: undefined,
};

export default Heading;
