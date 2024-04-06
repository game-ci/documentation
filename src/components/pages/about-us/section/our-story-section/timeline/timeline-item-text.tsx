import React from 'react';

interface Props {
  title: string | React.JSX.Element;
  subTitle: string | React.JSX.Element;
}

const TimelineItemText = ({ title, subTitle }: Props): React.JSX.Element => {
  return (
    <div className="w-full">
      <h2 className="font-semibold text-xl leading-5">{title}</h2>
      <p className="font-normal text-base leading-6 mt-2 text-softer">{subTitle}</p>
    </div>
  );
};

export default TimelineItemText;
