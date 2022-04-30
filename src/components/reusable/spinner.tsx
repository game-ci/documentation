import React from 'react';
import { AiOutlineLoading3Quarters, FaSpinner } from 'react-icons/all';
// import styles from './spinner.module.scss';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

interface Props {
  type: 'spin' | 'pulse' | 'slow' | 'dots';
}

const Spinner = ({ type }: Props) => {
  switch (type) {
    case 'pulse':
      return 
    case 'spin':
      return 
    case 'slow':
      return 
    case 'dots':
      return 
    default:
      throw new Error(`Spinner of type ${type} is not implemented.`);
  }
};

export default Spinner;
