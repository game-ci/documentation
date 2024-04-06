import React from 'react';

interface Props {
  title: string | React.JSX.Element;
  subTitle: string | React.JSX.Element;
}

const TimelineItemText = ({ title, subTitle }: Props): React.JSX.Element => {
  return (
    <div className="w-full">
      <h3 className="font-semibold text-xl leading-5">{title}</h3>
      <p className="font-normal text-base leading-6 mt-2">{subTitle}</p>
    </div>
  );
};

export default TimelineItemText;
