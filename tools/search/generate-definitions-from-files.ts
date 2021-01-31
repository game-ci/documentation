import { writeFileSync } from 'fs';
import readFile from '@/core/fs/read-file';
import { resolve } from 'path';
import extractSections from './utils/extract-sections';

export default function generateSearchDefinitionsFromFiles(files) {
  // eslint-disable-next-line no-console
  console.log('event - generating search cache');

  const cache = [];
  for (const file of files) {
    const path = file.replace(/\.md$/, '');
    const fileContents = readFile(resolve('docs/', file));
    const sections = extractSections(fileContents, path);
    cache.push(...sections);
  }

  writeFileSync(resolve('.search/sections.json'), JSON.stringify(cache), { encoding: 'utf8' });
}
