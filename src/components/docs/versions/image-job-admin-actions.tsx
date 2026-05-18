import React, { useState } from 'react';
import { HiOutlineRefresh } from 'react-icons/hi';
import { MdRestartAlt } from 'react-icons/md';
import { useFirestore, useFirestoreCollectionData, useUser } from 'reactfire';
import { SimpleAuthCheck } from '@site/src/components/auth/safe-auth-check';
import config from '@site/src/core/config';
import { useNotification } from '@site/src/core/hooks/use-notification';
import Spinner from '@site/src/components/molecules/spinner';
import Tooltip from '@site/src/components/molecules/tooltip/tooltip';

interface Props {
  ciJobId: string;
  status: string;
}

type BuildRecord = {
  buildId: string;
  relatedJobId: string;
  status: string;
  meta?: {
    failureCount?: number;
  };
};

const buttonStyle: React.CSSProperties = {
  padding: 0,
  border: 0,
  outline: 0,
  cursor: 'pointer',
  background: 'transparent',
  display: 'inline-flex',
  alignItems: 'center',
};

const ImageJobAdminActions = ({ ciJobId, status }: Props) => {
  const firestore = useFirestore();
  const { data: user } = useUser();
  const notify = useNotification();
  const [runningAction, setRunningAction] = useState<'reset' | 'retry' | null>(null);

  const ciBuilds = firestore.collection('ciBuilds').where('relatedJobId', '==', ciJobId);
  const { status: buildStatus, data = [] } = useFirestoreCollectionData<BuildRecord>(ciBuilds);

  if (status !== 'failed' || buildStatus === 'loading') return null;

  const failedBuilds = data.filter((build) => build.status === 'failed');
  if (failedBuilds.length === 0) return null;

  const maxedOutBuilds = failedBuilds.filter((build) => (build.meta?.failureCount || 0) >= 15);

  const callEndpoint = async (endpoint: string, payload: object) => {
    if (!user) {
      throw new Error('User not authenticated');
    }

    const token = await user.getIdToken();
    const response = await fetch(`${config.backendUrl}/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify(payload),
    });

    const body = await response.json();
    if (!response.ok) {
      const detail = body.error ? `${body.message}: ${body.error}` : body.message;
      throw new Error(detail || `Request failed (${response.status})`);
    }
    return body;
  };

  const runAction = async (
    action: 'reset' | 'retry',
    builds: BuildRecord[],
    endpoint: 'resetFailedBuilds' | 'retryBuild',
  ) => {
    if (builds.length === 0) return;

    setRunningAction(action);
    try {
      let succeeded = 0;
      let failed = 0;

      for (const build of builds) {
        try {
          const payload =
            endpoint === 'retryBuild'
              ? { buildId: build.buildId, relatedJobId: build.relatedJobId }
              : { buildId: build.buildId };
          // Sequential calls avoid hammering the backend for a single image row action.
          await callEndpoint(endpoint, payload);
          succeeded += 1;
        } catch {
          failed += 1;
        }
      }

      if (failed > 0) {
        notify.error(
          `${action === 'retry' ? 'Retried' : 'Reset'} ${succeeded}/${builds.length} builds. ${failed} failed.`,
        );
      } else {
        notify.success(
          `${action === 'retry' ? 'Retried' : 'Reset'} ${succeeded} build${succeeded === 1 ? '' : 's'} for ${ciJobId}.`,
        );
      }
    } finally {
      setRunningAction(null);
    }
  };

  return (
    <SimpleAuthCheck fallback={<span />} requiredClaims={{ admin: true }}>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginLeft: 8 }}>
        {maxedOutBuilds.length > 0 && (
          <Tooltip
            content={`Reset ${maxedOutBuilds.length} maxed-out failed build${maxedOutBuilds.length === 1 ? '' : 's'} so Ingeminator can retry them.`}
          >
            <button
              type="button"
              onClick={() => {
                void runAction('reset', maxedOutBuilds, 'resetFailedBuilds');
              }}
              style={buttonStyle}
              disabled={runningAction !== null}
            >
              <MdRestartAlt color={runningAction === 'reset' ? 'orange' : '#b45309'} />
            </button>
          </Tooltip>
        )}
        <Tooltip
          content={`Retry ${failedBuilds.length} failed build${failedBuilds.length === 1 ? '' : 's'} for this image.`}
        >
          <button
            type="button"
            onClick={() => {
              void runAction('retry', failedBuilds, 'retryBuild');
            }}
            style={buttonStyle}
            disabled={runningAction !== null}
          >
            {runningAction === 'retry' ? <Spinner type="spin" /> : <HiOutlineRefresh color="red" />}
          </button>
        </Tooltip>
      </span>
    </SimpleAuthCheck>
  );
};

export default ImageJobAdminActions;
