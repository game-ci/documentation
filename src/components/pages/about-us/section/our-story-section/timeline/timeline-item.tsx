import React from 'react';
import cx from 'classnames';
import TimelineItemText from '@site/src/components/pages/about-us/section/our-story-section/timeline/timeline-item-text';
import TimelineItemBullet from '@site/src/components/pages/about-us/section/our-story-section/timeline/timeline-item-bullet';
import FadeIntoView from '@site/src/components/molecules/animations/fade-into-view';

interface Props {
  title: string | React.JSX.Element;
  subTitle: string | React.JSX.Element;
  right?: boolean;
}

const TimelineItem = ({ title, subTitle, right }: Props): React.JSX.Element => {
  return (
    <>
      {!!right && (
        <div
          className={cx('border-0 border-solid border-primary', {
            'border-r-2': right,
          })}
        />
      )}
      <div
        className={cx('pb-5 border-0 border-solid border-primary', {
          'border-e-2': !right,
          'border-s-0 mb-0 pb-5': right,
        })}
      >
        <FadeIntoView>
          <div className="flex justify-between">
            {right && <TimelineItemBullet right={right} />}

            <TimelineItemText title={title} subTitle={subTitle} />

            {!right && <TimelineItemBullet right={right} />}
          </div>
        </FadeIntoView>
      </div>
      {!right && <div />}
    </>
  );
};

TimelineItem.defaultProps = {
  right: false,
};

export default TimelineItem;
