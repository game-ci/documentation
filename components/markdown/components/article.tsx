import cx from 'classnames';

import styles from './markdown-components.module.scss';

interface Props {
  children: React.ReactNode;
}

const Article = ({ children }: Props) => (
  <article className={cx('ant-typography', styles.markdown)}>{children}</article>
);

export default Article;
