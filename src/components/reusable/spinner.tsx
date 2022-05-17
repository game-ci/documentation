import React from 'react';
import { AiOutlineLoading3Quarters, FaSpinner } from 'react-icons/all';
import { ThreeDots } from '@site/src/components/reusable/spinner/three-dots';
import styles from './spinner.module.scss';

interface Props {
  type: 'spin' | 'pulse' | 'slow' | 'dots';
}

const Spinner = ({ type }: Props) => {
  switch (type) {
    case 'pulse':
      return <FaSpinner className={styles.pulse} />;
    case 'spin':
      return <AiOutlineLoading3Quarters className={styles.spin} />;
    case 'slow':
      return <AiOutlineLoading3Quarters className={styles.slowSpin} />;
    case 'dots':
      return <ThreeDots color="rgba(0, 255, 0, 1)" height={14} width={14} />;
    default:
      throw new Error(`Spinner of type ${type} is not implemented.`);
  }
};

export default Spinner;
