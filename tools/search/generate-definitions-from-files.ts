import path from 'path';
import { writeFileSync } from 'fs';
import readFile from '@/core/fs/read-file';
import extractSections from './utils/extract-sections';

export default function generateSearchDefinitionsFromFiles(files) {
  // eslint-disable-next-line no-console
  console.log('event - generating search cache');

  const cache = [];
  for (const file of files) {
    const filePath = file.replace(/\.md$/, '');
    const fileContents = readFile(path.resolve('docs/', file));
    const sections = extractSections(fileContents, filePath);
    cache.push(...sections);
  }

  writeFileSync(path.resolve('.search/sections.json'), JSON.stringify(cache), { encoding: 'utf8' });
}
