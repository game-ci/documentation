import React from 'react';
import { ReactNodeLike } from 'prop-types';

interface Props {
  children: ReactNodeLike;
}

const Timeline = ({ children }: Props): React.JSX.Element => {
  return <div className="w-full grid grid-cols-2">{children}</div>;
};

export default Timeline;
