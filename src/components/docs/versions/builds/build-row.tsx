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

export default function BuildRow({ children, build, selected, onToggleSelect }: Props) {
  const [expanded, setExpanded] = useState(false);
  const [toolbarContent, setToolbarContent] = useState('Click to copy');

  const MapBuildStatusToElement = (status: string) => {
    const icon = mapBuildStatusToIcon[status];

    switch (status) {
      case 'started':
        return <Spinner type="slow" />;
      case 'failed': {
        const count = build.meta?.failureCount || 0;
        const label = count >= 15 ? `${icon} (${count}/15)` : icon;
        return <Tooltip content={build.failure?.reason}>{label}</Tooltip>;
      }
      case 'published':
        return icon;
      default:
        return status;
    }
  };

  // Build timeline data
  const meta = (build.meta || {}) as { [key: string]: any };
  const { addedDate } = build;
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
        <SimpleAuthCheck fallback={<td style={{ width: 30 }} />} requiredClaims={{ admin: true }}>
          <td style={{ width: 30, textAlign: 'center' }}>
            {build.status === 'failed' && (
              <input
                type="checkbox"
                checked={selected}
                onChange={onToggleSelect}
                aria-label={`Select build ${build.buildId}`}
                style={{ cursor: 'pointer' }}
              />
            )}
          </td>
        </SimpleAuthCheck>
        <td
          onClick={() => setExpanded(!expanded)}
          className="text-center select-none cursor-pointer text-2xl"
        >
          {expanded ? '-' : '+'}
        </td>
        <td className="text-center">{MapBuildStatusToElement(build.status)}</td>
        <td>
          <span>
            <Tooltip content={toolbarContent}>
              <button
                onClick={() => {
                  CopyToClipboard(build.buildId);
                  setToolbarContent('Copied to clipboard!');
                }}
                onMouseLeave={() => {
                  setToolbarContent('Click to copy');
                }}
                type="button"
              >
                {build.buildId}
              </button>
            </Tooltip>
            <DockerImageLinkOrRetryButton record={build} />
          </span>
        </td>
        <td>{build.imageType}</td>
        <td>{build.buildInfo.baseOs}</td>
        <td>{build.buildInfo.targetPlatform}</td>
      </tr>
      {/* Inline failure reason row (visible without expanding) */}
      {build.status === 'failed' && build.failure?.reason && !expanded && (
        <tr>
          <td aria-label="spacer" />
          <td aria-label="spacer" />
          <td colSpan={5} style={{ padding: '2px 8px', fontSize: '0.8em', opacity: 0.7 }}>
            {build.failure.reason.slice(0, 200)}
            {build.failure.reason.length > 200 ? '...' : ''}
          </td>
        </tr>
      )}
      {expanded && (
        <tr className={styles.expandedContentRow}>
          <td colSpan={7}>
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
            {/* Failure log viewer */}
            {build.status === 'failed' && build.failure && (
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
                <strong>Failure reason:</strong> {build.failure.reason || 'Unknown'}
                {build.failure.log && (
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
                      {build.failure.log}
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
