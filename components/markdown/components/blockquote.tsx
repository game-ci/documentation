import { ReactNodeLike } from 'prop-types';
import React from 'react';
import styles from './blockquote.module.scss';

interface Props {
  children: ReactNodeLike;
}

const Blockquote = ({ children }: Props) => {
  return <blockquote className={styles.blockquote}>{children}</blockquote>;
};

export default Blockquote;
