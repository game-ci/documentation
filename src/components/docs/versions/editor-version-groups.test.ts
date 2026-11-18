import { describe, expect, it } from 'vitest';
import { EditorVersionGroups, type CiJob } from './editor-version-groups';

const job = (major: number, minor: number, patch: string, status = 'completed'): CiJob => ({
  NO_ID_FIELD: `editor-${major}.${minor}.${patch}`,
  status,
  editorVersionInfo: { major, minor, patch },
});

const idsPerMajor = (jobs: CiJob[]) =>
  EditorVersionGroups.byMajor(jobs).map(({ major, jobs: grouped }) => [
    major,
    grouped.map(({ NO_ID_FIELD }) => NO_ID_FIELD),
  ]);

describe('EditorVersionGroups.byMajor', () => {
  it('groups jobs per major, newest major and version first', () => {
    const jobs = [
      job(2022, 3, '9f1'),
      job(6000, 0, '1f1'),
      job(2022, 3, '10f1'),
      job(6000, 1, '0f1'),
      job(2022, 2, '20f1'),
    ];

    expect(idsPerMajor(jobs)).toEqual([
      ['6000', ['editor-6000.1.0f1', 'editor-6000.0.1f1']],
      ['2022', ['editor-2022.3.10f1', 'editor-2022.3.9f1', 'editor-2022.2.20f1']],
    ]);
  });

  it('leaves out a major whose jobs are all deprecated', () => {
    const jobs = [job(6000, 0, '1f1', 'created'), job(2021, 3, '1f1', 'deprecated')];

    expect(idsPerMajor(jobs)).toEqual([['6000', ['editor-6000.0.1f1']]]);
  });

  it('leaves out deprecated jobs within a major that still builds', () => {
    const jobs = [job(2018, 4, '2f1', 'completed'), job(2018, 4, '1f1', 'deprecated')];

    expect(idsPerMajor(jobs)).toEqual([['2018', ['editor-2018.4.2f1']]]);
  });

  it('leaves out editors from 2017 and older', () => {
    const jobs = [job(2017, 4, '1f1'), job(5, 6, '7f1')];

    expect(idsPerMajor(jobs)).toEqual([]);
  });

  it('returns no groups for no jobs', () => {
    expect(EditorVersionGroups.byMajor([])).toEqual([]);
  });

  it('does not reorder the jobs it is given', () => {
    const jobs = [job(2022, 1, '1f1'), job(6000, 0, '1f1')];

    EditorVersionGroups.byMajor(jobs);

    expect(jobs.map(({ NO_ID_FIELD }) => NO_ID_FIELD)).toEqual([
      'editor-2022.1.1f1',
      'editor-6000.0.1f1',
    ]);
  });
});

describe('EditorVersionGroups.isListed', () => {
  it('lists every job except deprecated ones', () => {
    expect(EditorVersionGroups.isListed(job(6000, 0, '1f1', 'failed'))).toBe(true);
    expect(EditorVersionGroups.isListed(job(2021, 3, '1f1', 'deprecated'))).toBe(false);
  });
});
