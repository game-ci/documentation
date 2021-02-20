import { MenuNode } from '@/tools/menu/menu-node';
import path from 'path';
import { writeFileSync } from 'fs';
import readFile from '@/core/fs/read-file';
import extractSections from './utils/extract-sections';

export default function generateSearchDefinitionsFromFiles(files: MenuNode[]) {
  // eslint-disable-next-line no-console
  console.log('event - generating search cache');

  const cache = [];
  for (const file of files) {
    const { meta } = file;

    const contents = readFile(path.resolve('docs/', meta.absolutePath));
    const sections = extractSections(meta, contents);

    cache.push(...sections);
  }

  writeFileSync(path.resolve('.search/sections.json'), JSON.stringify(cache), { encoding: 'utf8' });
}
