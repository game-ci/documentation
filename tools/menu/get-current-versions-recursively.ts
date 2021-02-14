import { has, set } from 'lodash';
import { menuVersionBranch } from '@/tools/menu/generate-menu-structure-from-files';

// eslint-disable-next-line import/prefer-default-export
export const getCurrentVersionsRecursively = (collection, sections = {}) => {
  for (const [key, item] of Object.entries(collection)) {
    // skip leaves
    if (key === 'meta' || has(item, 'key')) {
      continue;
    }

    // add currentVersion for each section
    if (key === menuVersionBranch) {
      // @ts-ignore
      const { meta } = item;
      const { section, currentVersion } = meta;
      set(sections, `${section}`, currentVersion);
    }

    getCurrentVersionsRecursively(item, sections);
  }

  return sections;
};
