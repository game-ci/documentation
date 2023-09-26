import React from 'react';

interface Props {
  title: string | JSX.Element;
  subTitle: string | JSX.Element;
}

const TimelineItemText = ({ title, subTitle }: Props): JSX.Element => {
  return (
    <div className="w-auto">
      <h2 className="-mt-2 font-semibold text-xl leading-5 ">{title}</h2>
      <p className="font-normal text-base leading-6 mt-2 text-softer">{subTitle}</p>
    </div>
  );
};

export default TimelineItemText;
