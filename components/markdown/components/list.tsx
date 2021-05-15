import cx from 'classnames';

import styles from './markdown-components.module.scss';

interface ListProps {
  children: React.ReactNode;
  ordered?: boolean;
}

const List = (props: ListProps) => {
  const { ordered, children } = props;

  if (ordered) {
    return <ol className={styles.list}>{children}</ol>;
  }

  return <ul className={styles.list}>{children}</ul>;
};

List.defaultProps = {
  ordered: false,
};

interface ItemProps {
  children: React.ReactNode;
}

const ListItem = (props: ItemProps) => {
  const { children } = props;

  return <li className={cx('ant-typography', styles.listItem)}>{children}</li>;
};

export { List, ListItem };
