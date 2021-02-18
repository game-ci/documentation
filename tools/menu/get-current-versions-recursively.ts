import { menuVersionBranch } from '@/tools/menu/menu-structure';
import { has, set } from 'lodash';

// eslint-disable-next-line import/prefer-default-export
export const getCurrentVersionsRecursively = (collection, sections = {}) => {
  for (const [key, item] of Object.entries(collection)) {
    // skip leaves
    if (key === 'meta' || has(item, 'isLeaf')) {
      continue;
    }

    // add currentVersion for each section
    if (key === menuVersionBranch) {
      // @ts-ignore
      const { meta } = item;
      const { path, currentVersion } = meta;
      set(sections, `${path}`, currentVersion);
    }

    getCurrentVersionsRecursively(item, sections);
  }

  return sections;
};
