import React, { useEffect, useRef, useState } from 'react';
import FadeIntoView from '@site/src/components/molecules/animations/fade-into-view';
import Section from '@site/src/components/pages/home/section/section';

/**
 * SponsorsSection displays the OpenCollective sponsors iframe with dynamic height.
 *
 * The iframe automatically resizes based on postMessage events from OpenCollective,
 * which sends height updates as the content changes (e.g., when sponsor count changes).
 * Falls back to 1200px if no message is received.
 */
const SponsorsSection = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  // Start with a generous fallback height that works for most sponsor counts
  const [iframeHeight, setIframeHeight] = useState<number>(1200);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Only accept messages from OpenCollective
      if (event.origin !== 'https://opencollective.com') return;

      try {
        // OpenCollective sends data as a string prefixed with "oc-"
        const { data } = event;
        let parsedData = data;

        if (typeof data === 'string' && data.startsWith('oc-')) {
          parsedData = JSON.parse(data.slice(3)); // Remove "oc-" prefix and parse JSON
        }

        // Extract height from the parsed data
        const height = parsedData?.height || parsedData?.frameHeight;

        if (height && typeof height === 'number' && height > 0) {
          // Add a small buffer to prevent scrollbars
          setIframeHeight(Math.ceil(height) + 10);
        }
      } catch {
        // Silently ignore parsing errors
      }
    };

    window.addEventListener('message', handleMessage);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    // Would be nice if the banner had a dark mode that we could use for `dark:*`
    <Section title="Sponsors" className="bg-white dark:bg-white">
      <FadeIntoView className="w-full max-w-7xl">
        <div className="w-full overflow-hidden">
          <iframe
            ref={iframeRef}
            title="Game CI Sponsors"
            className="w-full border-0"
            style={{ height: `${iframeHeight}px`, maxWidth: '100%', overflow: 'hidden' }}
            src="https://opencollective.com/game-ci/banner.html"
            scrolling="no"
          />
        </div>
      </FadeIntoView>
    </Section>
  );
};

export default SponsorsSection;
