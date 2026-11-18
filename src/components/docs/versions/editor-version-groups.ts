export type CiJob = {
  NO_ID_FIELD: string;
  status: string;
  editorVersionInfo: { major: number | string; minor: number | string; patch: string };
  meta?: { failureCount?: number };
  [key: string]: unknown;
};

export type EditorVersionGroup = {
  readonly major: string;
  readonly jobs: ReadonlyArray<CiJob>;
};

const NEWEST_UNLISTED_MAJOR = 2017;

const patchRank = (patch: string): number => {
  let rank = 0;
  for (const [index, part] of patch.split('f').entries()) {
    rank += 10 ** (9 - 3 * index) * Number.parseInt(part, 10);
  }
  return rank;
};

const newestFirst = (a: CiJob, b: CiJob): number => {
  const infoA = a.editorVersionInfo;
  const infoB = b.editorVersionInfo;

  const byMajor = Number(infoB.major) - Number(infoA.major);
  if (byMajor !== 0) return byMajor;

  const byMinor = Number(infoB.minor) - Number(infoA.minor);
  if (byMinor !== 0) return byMinor;

  return patchRank(infoB.patch) - patchRank(infoA.patch);
};

/**
 * A deprecated job is for an editor that no longer gets images for this repo version.
 */
const isListed = (job: CiJob): boolean => job.status !== 'deprecated';

const byMajor = (jobs: ReadonlyArray<CiJob>): EditorVersionGroup[] => {
  const groups = new Map<string, CiJob[]>();

  for (const job of jobs.filter(isListed).sort(newestFirst)) {
    const major = String(job.editorVersionInfo.major);
    if (Number.parseInt(major, 10) <= NEWEST_UNLISTED_MAJOR) continue;

    const group = groups.get(major);
    if (group) group.push(job);
    else groups.set(major, [job]);
  }

  return [...groups].map(([major, grouped]) => ({ major, jobs: grouped }));
};

export const EditorVersionGroups = {
  byMajor,
  isListed,
} as const;
