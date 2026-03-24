import React, { useState } from 'react';
import { HiOutlineRefresh } from 'react-icons/hi';
import { SimpleAuthCheck } from '@site/src/components/auth/safe-auth-check';
import { useAuthenticatedEndpoint } from '@site/src/core/hooks/use-authenticated-endpoint';
import { useNotification } from '@site/src/core/hooks/use-notification';
import Spinner from '@site/src/components/molecules/spinner';
import Tooltip from '@site/src/components/molecules/tooltip/tooltip';

const CleanUpStuckBuildsButton = () => {
  const [running, setRunning] = useState(false);
  const notify = useNotification();
  const cleanUp = useAuthenticatedEndpoint('cleanUpStuckBuilds', {});

  const onClick = async () => {
    try {
      setRunning(true);
      await notify.promise(cleanUp(), {
        loading: <Spinner type="spin" />,
        success: (response) => {
          const results = response.results || [];
          return results.length > 0 ? results.join('\n') : response.message;
        },
        error: (err) => err.message || 'Cleanup failed',
      });
    } finally {
      setRunning(false);
    }
  };

  return (
    <SimpleAuthCheck fallback={<span />} requiredClaims={{ admin: true }}>
      <Tooltip content="Clean up all stuck builds (checks DockerHub, marks as published or failed)">
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
          <HiOutlineRefresh color={running ? 'orange' : 'inherit'} />
          Clean up stuck builds
        </button>
      </Tooltip>
    </SimpleAuthCheck>
  );
};

export default CleanUpStuckBuildsButton;
