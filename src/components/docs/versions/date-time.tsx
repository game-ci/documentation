import React from 'react';
import Tooltip from '../../molecules/tooltip/tooltip';

interface Props {
  utcSeconds: number;
}

const options: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  timeZoneName: 'short',
  hour12: true,
};

const DateTime = ({ utcSeconds }: Props) => {
  const date = new Date(0); // Use epoch

  date.setUTCSeconds(utcSeconds);

  return (
    <Tooltip content={`${date.toLocaleString('en-GB', options)}`}>
      <span style={{ color: 'rgba(255, 255, 255, 0.4)' }}>
        <u>( ... )</u>
      </span>
    </Tooltip>
  );
};

export default DateTime;
