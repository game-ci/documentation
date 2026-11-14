import React, { useState } from 'react';
import { MdRestartAlt } from 'react-icons/md';
import { SimpleAuthCheck } from '@site/src/components/auth/safe-auth-check';
import { useAuthenticatedEndpoint } from '@site/src/core/hooks/use-authenticated-endpoint';
import { useNotification } from '@site/src/core/hooks/use-notification';
import Spinner from '@site/src/components/molecules/spinner';
import Tooltip from '@site/src/components/molecules/tooltip/tooltip';

const ResetAllFailedBuildsButton = () => {
  const [running, setRunning] = useState(false);
  const notify = useNotification();
  const resetAll = useAuthenticatedEndpoint('resetFailedBuilds', {});

  const onClick = async () => {
    try {
      setRunning(true);
      await notify.promise(resetAll(), {
        loading: <Spinner type="spin" />,
        success: (response) => {
          const results = response.results || [];
          return results.length > 0 ? results.join('\n') : response.message;
        },
        error: (error) => error.message || 'Reset failed',
      });
    } finally {
      setRunning(false);
    }
  };

  return (
    <SimpleAuthCheck fallback={<span />} requiredClaims={{ admin: true }}>
      <Tooltip content="Reset failure counts on all builds stuck at max retries (15+) so the Ingeminator retries them">
        <button
          type="button"
          onClick={onClick}
          disabled={running}
          style={{
            padding: '4px 12px',
            border: '1px solid #ccc',
            borderRadius: 4,
            cursor: running ? 'wait' : 'pointer',
            background: 'transparent',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            fontSize: '0.85em',
          }}
        >
          <MdRestartAlt color={running ? 'orange' : 'inherit'} />
          Reset all failed builds
        </button>
      </Tooltip>
    </SimpleAuthCheck>
  );
};

export default ResetAllFailedBuildsButton;
