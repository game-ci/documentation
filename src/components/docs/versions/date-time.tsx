import React from 'react';

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
  timeZone: 'UTC',
  hour12: true,
};

const DateTime = ({ utcSeconds }: Props) => {
  const date = new Date(0); // Use epoch

  date.setUTCSeconds(utcSeconds);

  return <span>{`${date.toLocaleString('en-GB', options)}`}</span>;
};

export default DateTime;
