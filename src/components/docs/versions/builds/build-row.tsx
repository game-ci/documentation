import React, { useState } from 'react';
import DockerImageLinkOrRetryButton, {
  type Record,
} from '@site/src/components/docs/versions/docker-image-link-or-retry-button';
import { SimpleAuthCheck } from '@site/src/components/auth/safe-auth-check';
import Spinner from '@site/src/components/molecules/spinner';
import Tooltip from '@site/src/components/molecules/tooltip/tooltip';
import styles from './builds.module.scss';

const mapBuildStatusToIcon = {
  started: <Spinner type="slow" />,
  failed: '\u26A0',
  published: '\u2705',
};

type Props = {
  children: React.JSX.Element | React.JSX.Element[];
  build: Record;
  selected: boolean;
  jobRepoVersion: string;
  onToggleSelect: () => void;
};

const CopyToClipboard = (copyString: string) => {
  navigator.clipboard.writeText(copyString);
};

const formatTimestamp = (ts: any): string => {
  if (!ts) return '';
  const date = ts.seconds ? new Date(ts.seconds * 1000) : new Date(ts);
  return date.toLocaleString(undefined, {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export default function BuildRow({
  children,
  build,
  selected,
  jobRepoVersion,
  onToggleSelect,
}: Props) {
  const [expanded, setExpanded] = useState(false);
  const [toolbarContent, setToolbarContent] = useState('Click to copy');

  const { buildId, status, failure, meta: rawMeta, addedDate, imageType, buildInfo } = build;
  const buildRepoVersion = buildInfo.repoVersion;
  const hasRepoVersionDrift =
    !!jobRepoVersion && !!buildRepoVersion && jobRepoVersion !== buildRepoVersion;

  const MapBuildStatusToElement = (buildStatus: string) => {
    const icon = mapBuildStatusToIcon[buildStatus];

    switch (buildStatus) {
      case 'started':
        return <Spinner type="slow" />;
      case 'failed': {
        const count = rawMeta?.failureCount || 0;
        const label = count >= 15 ? `${icon} (${count}/15)` : icon;
        return <Tooltip content={failure?.reason}>{label}</Tooltip>;
      }
      case 'published':
        return icon;
      default:
        return buildStatus;
    }
  };

  // Build timeline data
  const meta = (rawMeta || {}) as { [key: string]: any };
  const { lastBuildStart, lastBuildFailure, publishedDate, failureCount = 0 } = meta;

  const timelineItems: { label: string; time: string; color: string }[] = [];
  if (addedDate)
    timelineItems.push({ label: 'Created', time: formatTimestamp(addedDate), color: '#666' });
  if (lastBuildStart)
    timelineItems.push({
      label: 'Last started',
      time: formatTimestamp(lastBuildStart),
      color: '#3b82f6',
    });
  if (lastBuildFailure)
    timelineItems.push({
      label: `Last failure (#${failureCount})`,
      time: formatTimestamp(lastBuildFailure),
      color: '#ef4444',
    });
  if (publishedDate)
    timelineItems.push({
      label: 'Published',
      time: formatTimestamp(publishedDate),
      color: '#22c55e',
    });

  return (
    <>
      <tr className={styles.tableRow}>
        <SimpleAuthCheck
          fallback={<td aria-label="spacer" style={{ width: 30 }} />}
          requiredClaims={{ admin: true }}
        >
          <td style={{ width: 30, textAlign: 'center' }}>
            {status === 'failed' && (
              <input
                type="checkbox"
                checked={selected}
                onChange={onToggleSelect}
                aria-label={`Select build ${buildId}`}
                style={{ cursor: 'pointer' }}
              />
            )}
          </td>
        </SimpleAuthCheck>
        <td
          onClick={() => setExpanded(!expanded)}
          className="text-center select-none cursor-pointer text-2xl"
          aria-label={expanded ? 'Collapse build details' : 'Expand build details'}
        >
          {expanded ? '-' : '+'}
        </td>
        <td className="text-center">{MapBuildStatusToElement(status)}</td>
        <td>
          <span>
            <Tooltip content={toolbarContent}>
              <button
                onClick={() => {
                  CopyToClipboard(buildId);
                  setToolbarContent('Copied to clipboard!');
                }}
                onMouseLeave={() => {
                  setToolbarContent('Click to copy');
                }}
                type="button"
              >
                {buildId}
              </button>
            </Tooltip>
            <DockerImageLinkOrRetryButton record={build} />
            {hasRepoVersionDrift && (
              <span
                style={{
                  marginLeft: 8,
                  padding: '2px 6px',
                  borderRadius: 999,
                  border: '1px solid #b4530933',
                  background: '#b4530911',
                  color: '#b45309',
                  fontSize: '0.75em',
                  fontWeight: 600,
                }}
              >
                Repo drift
              </span>
            )}
          </span>
        </td>
        <td>
          {hasRepoVersionDrift ? (
            <Tooltip content="Job repo version and build repo version differ. This usually indicates retry churn against a newer repo version.">
              <span style={{ color: '#b45309', fontWeight: 600 }}>
                {jobRepoVersion} / {buildRepoVersion}
              </span>
            </Tooltip>
          ) : (
            buildRepoVersion
          )}
        </td>
        <td>{imageType}</td>
        <td>{buildInfo.baseOs}</td>
        <td>{buildInfo.targetPlatform}</td>
      </tr>
      {/* Inline failure reason row (visible without expanding) */}
      {status === 'failed' && failure?.reason && !expanded && (
        <tr>
          <td aria-label="spacer" />
          <td aria-label="spacer" />
          <td colSpan={6} style={{ padding: '2px 8px', fontSize: '0.8em', opacity: 0.7 }}>
            {failure.reason.slice(0, 200)}
            {failure.reason.length > 200 ? '...' : ''}
          </td>
        </tr>
      )}
      {expanded && (
        <tr className={styles.expandedContentRow}>
          <td colSpan={8}>
            {/* Build timeline */}
            {timelineItems.length > 0 && (
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 16,
                  padding: '8px 12px',
                  marginBottom: 8,
                  borderRadius: 6,
                  border: '1px solid #33333322',
                  background: '#fafafa11',
                  fontSize: '0.8em',
                }}
              >
                {timelineItems.map((item) => (
                  <span
                    key={item.label}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}
                  >
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: item.color,
                        display: 'inline-block',
                      }}
                    />
                    <strong>{item.label}:</strong> {item.time}
                  </span>
                ))}
              </div>
            )}
            {hasRepoVersionDrift && (
              <div
                style={{
                  padding: '8px 12px',
                  marginBottom: 8,
                  borderRadius: 6,
                  border: '1px solid #b4530933',
                  background: '#b4530911',
                  fontSize: '0.8em',
                }}
              >
                <strong>Repo-version drift detected:</strong> job repo version is `{jobRepoVersion}`
                while this build carries repo version `{buildRepoVersion}`. That usually means an
                older failed job is being retried against the latest repo version instead of being
                superseded.
              </div>
            )}
            {/* Failure log viewer */}
            {status === 'failed' && failure && (
              <div
                style={{
                  padding: '8px 12px',
                  marginBottom: 8,
                  borderRadius: 6,
                  border: '1px solid #ef444433',
                  background: '#ef444411',
                  fontSize: '0.8em',
                }}
              >
                <strong>Failure reason:</strong> {failure.reason || 'Unknown'}
                {failure.log && (
                  <details style={{ marginTop: 4 }}>
                    <summary style={{ cursor: 'pointer', opacity: 0.8 }}>Build log</summary>
                    <pre
                      style={{
                        maxHeight: 300,
                        overflow: 'auto',
                        padding: 8,
                        marginTop: 4,
                        borderRadius: 4,
                        background: '#1a1a1a',
                        color: '#e5e5e5',
                        fontSize: '0.85em',
                        whiteSpace: 'pre-wrap',
                        wordBreak: 'break-all',
                      }}
                    >
                      {failure.log}
                    </pre>
                  </details>
                )}
              </div>
            )}
            {children}
          </td>
        </tr>
      )}
    </>
  );
}
