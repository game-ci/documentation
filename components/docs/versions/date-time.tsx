interface Props {
  utcSeconds: number;
}

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZoneName: 'short',
};

const DateTime = ({ utcSeconds }: Props) => {
  const date = new Date(0); // Use epoch

  date.setUTCSeconds(utcSeconds);

  return <span>{`${date.toLocaleString('en-GB', options)}`}</span>;
};

export default DateTime;
