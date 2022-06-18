import React from 'react';
import cx from 'classnames';
import TimelineItemText from '@site/src/components/pages/about-us/section/our-story-section/timeline/timeline-item-text';
import TimelineItemBullet from '@site/src/components/pages/about-us/section/our-story-section/timeline/timeline-item-bullet';
import FadeIntoView from '@site/src/components/molecules/animations/fade-into-view';

interface Props {
  title: string | JSX.Element;
  subTitle: string | JSX.Element;
  right?: boolean;
}

const TimelineItem = ({ title, subTitle, right }: Props): JSX.Element => {
  return (
    <>
      {right ? (
        <div
          className={cx('border-0 border-solid border-primary', {
            'sm:border-r-2': right,
          })}
        />
      ) : null}
      <div
        className={cx('pb-5 border-0 border-solid border-primary', {
          'border-r-2': !right,
          'border-l-2 sm:border-l-0 mb-5 sm:mb-0 sm:pb-5': right,
        })}
      >
        <FadeIntoView>
          <div className="flex justify-between">
            {right && <TimelineItemBullet right={right} />}

            <TimelineItemText title={title} subTitle={subTitle} />

            {right || <TimelineItemBullet right={right} />}
          </div>
        </FadeIntoView>
      </div>
      {right ? null : <div />}
    </>
  );
};

TimelineItem.defaultProps = {
  right: false,
};

export default TimelineItem;
