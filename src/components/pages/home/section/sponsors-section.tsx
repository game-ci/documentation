import FadeIntoView from '@site/src/components/molecules/animations/fade-into-view';
import Link from '@docusaurus/Link';
import React from 'react';
import styles from '@site/src/components/pages/home/section/section.module.scss';
import Section from '@site/src/components/pages/home/section/section';
import cx from 'classnames';

const SponsorsSection = () => {
  return (
    <Section className={styles.sponsorsSection}>
      <FadeIntoView>
        <h2 className={cx('text-center text-5xl font-bold mb-10', styles.title)}>Sponsors</h2>
      </FadeIntoView>

      <FadeIntoView>
        <div className="mt-12 inline-flex">
          <Link to="https://circleci.com/" className="text-black dark:text-white">
            <span className={styles.linkSpan}>
              <svg
                width="120"
                height="25"
                viewBox="0 0 120 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M105.517 20.1526C109.094 20.1526 112.095 17.697 112.94 14.3775C112.945 14.3535 112.949 14.3285 112.949 14.3032C112.949 14.1013 112.786 13.9379 112.585 13.9379H109.496C109.349 13.9379 109.223 14.0248 109.166 14.1512L109.165 14.1507C108.53 15.5345 107.137 16.4965 105.517 16.4965C103.301 16.4965 101.504 14.6963 101.504 12.4752C101.504 10.2544 103.301 8.45375 105.517 8.45375C107.137 8.45375 108.53 9.41571 109.165 10.7998L109.166 10.7991C109.223 10.9245 109.349 11.0128 109.496 11.0128H112.585C112.786 11.0128 112.949 10.8491 112.949 10.6471C112.949 10.6217 112.945 10.5983 112.94 10.574C112.095 7.25447 109.094 4.79812 105.517 4.79812C101.287 4.79812 97.8548 8.23631 97.8548 12.4752C97.8548 16.7153 101.287 20.1526 105.517 20.1526ZM118.683 5.16355V19.4211C118.683 19.6227 118.519 19.7864 118.319 19.7864H115.4C115.198 19.7864 115.035 19.6227 115.035 19.4211V5.16355H118.683ZM116.859 0.0456006C115.65 0.0456006 114.67 1.02806 114.67 2.23915C114.67 3.45061 115.65 4.4327 116.859 4.4327C118.068 4.4327 119.048 3.45061 119.048 2.23915C119.048 1.02806 118.068 0.0456006 116.859 0.0456006ZM82.729 11.0128C83.3688 8.69492 85.4878 6.99167 88.0047 6.99167C90.5216 6.99167 92.6389 8.69492 93.2786 11.0128H82.729ZM88.0047 4.79812C83.7726 4.79812 80.3419 8.23507 80.3419 12.4752C80.3419 16.7148 83.7726 20.1526 88.0047 20.1526C90.9962 20.1526 93.5847 18.4339 94.8465 15.9294C94.8718 15.8796 94.886 15.8246 94.886 15.7651C94.886 15.5628 94.7226 15.3998 94.5211 15.3998H92.8278C92.7072 15.3998 92.6001 15.459 92.5343 15.5502C91.5491 17.0032 89.8885 17.9588 88.0047 17.9588C85.229 17.9588 82.9381 15.8888 82.5811 13.206H95.2915C95.4871 13.206 95.6456 13.052 95.6556 12.859C95.6623 12.7319 95.6658 12.6038 95.6658 12.4752C95.6658 8.23507 92.236 4.79812 88.0047 4.79812ZM77.7879 0.411151H76.3289C76.1266 0.411151 75.9639 0.574915 75.9639 0.776577V19.4211C75.9639 19.6227 76.1266 19.7864 76.3289 19.7864H77.7879C77.9895 19.7864 78.1534 19.6227 78.1534 19.4211V0.776577C78.1534 0.574915 77.9895 0.411151 77.7879 0.411151ZM73.4096 15.3998H71.7158C71.5977 15.3998 71.4932 15.4564 71.4275 15.5433C70.4438 17.0002 68.7799 17.9588 66.8931 17.9588C63.8694 17.9588 61.4198 15.5037 61.4198 12.4752C61.4198 9.44653 63.8694 6.99167 66.8931 6.99167C68.7799 6.99167 70.4438 7.9504 71.4275 9.40689C71.494 9.49424 71.5986 9.55065 71.7158 9.55065H73.4096C73.6114 9.55065 73.7749 9.38664 73.7749 9.1851C73.7749 9.12558 73.7598 9.07029 73.7345 9.02084C72.4735 6.51653 69.8833 4.79812 66.8931 4.79812C62.6612 4.79812 59.231 8.23507 59.231 12.4752C59.231 16.7148 62.6612 20.1526 66.8931 20.1526C69.8833 20.1526 72.4735 18.4339 73.7345 15.9294C73.7598 15.8796 73.7749 15.8246 73.7749 15.7651C73.7749 15.5628 73.6114 15.3998 73.4096 15.3998ZM58.8712 4.80695C56.6632 4.91132 54.8998 5.96821 53.7577 7.58262V5.52848C53.7577 5.32769 53.5941 5.16355 53.3927 5.16355H51.9334C51.7318 5.16355 51.5687 5.32769 51.5687 5.52848V19.4211C51.5687 19.6227 51.7318 19.7864 51.9334 19.7864H53.3927C53.5941 19.7864 53.7577 19.6227 53.7577 19.4211V12.4752C53.7577 9.56966 56.0135 7.19247 58.8652 7.00435C59.0668 7.00435 59.231 6.84033 59.231 6.63805V5.1725C59.231 4.97208 59.0701 4.8108 58.8712 4.80695ZM49.3792 19.4211V5.16355H47.1899V19.4211C47.1899 19.6227 47.3538 19.7864 47.5551 19.7864H49.0143C49.2158 19.7864 49.3792 19.6227 49.3792 19.4211ZM49.7438 2.23915C49.7438 3.04679 49.091 3.70147 48.2847 3.70147C47.4789 3.70147 46.8255 3.04679 46.8255 2.23915C46.8255 1.43151 47.4789 0.776577 48.2847 0.776577C49.091 0.776577 49.7438 1.43151 49.7438 2.23915ZM44.6359 15.3998H42.9425C42.8239 15.3998 42.7204 15.4564 42.6531 15.5433C41.6701 17.0002 40.0067 17.9588 38.119 17.9588C35.096 17.9588 32.646 15.5037 32.646 12.4752C32.646 9.44653 35.096 6.99167 38.119 6.99167C40.0067 6.99167 41.6701 7.9504 42.6539 9.40689C42.7204 9.49424 42.8249 9.55065 42.9425 9.55065H44.6359C44.8378 9.55065 45.0017 9.38664 45.0017 9.1851C45.0017 9.12558 44.9859 9.07029 44.9617 9.02084C43.6999 6.51653 41.1096 4.79812 38.119 4.79812C33.8873 4.79812 30.4563 8.23507 30.4563 12.4752C30.4563 16.7148 33.8873 20.1526 38.119 20.1526C41.1096 20.1526 43.6999 18.4339 44.9617 15.9294C44.9859 15.8796 45.0017 15.8246 45.0017 15.7651C45.0017 15.5628 44.8378 15.3998 44.6359 15.3998ZM12.0774 0C6.2655 0 1.38827 3.98986 0.015625 9.38403C0.0063244 9.42329 0 9.4633 0 9.50505C0 9.83307 0.265501 10.099 0.593006 10.099H5.61111C5.85007 10.099 6.05456 9.95608 6.14893 9.75206L6.1498 9.75231C7.1808 7.50347 9.44544 5.94013 12.0774 5.94013C15.6782 5.94013 18.5988 8.86652 18.5988 12.4752C18.5988 16.084 15.6782 19.0103 12.0774 19.0103C9.44544 19.0103 7.1808 17.447 6.1498 15.1975L6.14893 15.1988C6.05456 14.9944 5.85007 14.8517 5.61111 14.8517H0.593006C0.265501 14.8517 0 15.1169 0 15.4458C0 15.4864 0.0063244 15.5252 0.0147569 15.5641C1.38703 20.9586 6.26439 24.9501 12.0774 24.9501C18.9529 24.9501 24.5277 19.3641 24.5277 12.4752C24.5277 5.58551 18.9529 0 12.0774 0ZM9.11272 12.4752C9.11272 10.8352 10.4404 9.50505 12.0774 9.50505C13.7143 9.50505 15.0414 10.8352 15.0414 12.4752C15.0414 14.1153 13.7143 15.4458 12.0774 15.4458C10.4404 15.4458 9.11272 14.1153 9.11272 12.4752Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </Link>
        </div>
      </FadeIntoView>
    </Section>
  );
};

export default SponsorsSection;
