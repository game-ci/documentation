import React from 'react';
import cx from 'classnames';

interface Props {
  right?: boolean;
}

const TimelineItemBullet = ({ right }: Props): React.JSX.Element => {
  const positions = right
    ? [
        { cx: 6, cy: 6, r: 5.5, transform: 'rotate(-180 6 6)' },
        { cx: 18, cy: 6, r: 1.5, transform: 'rotate(-180 18 6)' },
        { cx: 26, cy: 6, r: 1.5, transform: 'rotate(-180 26 6)', opacity: 0.7 },
        { cx: 34, cy: 6, r: 1.5, transform: 'rotate(-180 34 6)', opacity: 0.5 },
        { cx: 42, cy: 6, r: 1.5, transform: 'rotate(-180 42 6)', opacity: 0.3 },
        { cx: 50, cy: 6, r: 1.5, transform: 'rotate(-180 50 6)', opacity: 0.2 },
        { cx: 58, cy: 6, r: 1.5, transform: 'rotate(-180 58 6)', opacity: 0.1 },
      ]
    : [
        { cx: 54, cy: 6, r: 5.5 },
        { cx: 42, cy: 6, r: 1.5 },
        { cx: 34, cy: 6, r: 1.5, opacity: 0.7 },
        { cx: 26, cy: 6, r: 1.5, opacity: 0.5 },
        { cx: 18, cy: 6, r: 1.5, opacity: 0.3 },
        { cx: 10, cy: 6, r: 1.5, opacity: 0.2 },
        { cx: 2, cy: 6, r: 1.5, opacity: 0.1 },
      ];

  return (
    <div className={cx({ '-me-2 ms-1': !right, '-ms-2 me-1': right })}>
      <svg
        width="60"
        height="12"
        viewBox="0 0 60 12"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        {positions.map((props, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <circle key={index} stroke="var(--brand-primary)" {...props} />
        ))}
      </svg>
    </div>
  );
};

TimelineItemBullet.defaultProps = {
  right: false,
};

export default TimelineItemBullet;
