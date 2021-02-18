import { MenuStructure } from '@/tools/menu/menu-structure';
import { sleep } from '@/tools/utils';
import { writeFileSync } from 'fs';
import path from 'path';

export default async function generateMenuStructureFromFiles(fileNames: string[]) {
  // eslint-disable-next-line no-console
  console.log('event - generating menu structure');

  const structure = await MenuStructure.generateMenuStructure(fileNames);

  const menuStructure = `${JSON.stringify({ docs: structure }, null, 2)}\n`;
  writeFileSync(path.resolve('core/menu-structure.json'), menuStructure, {
    encoding: 'utf8',
  });
  await sleep(500); // Allow for windows filesystem to catch up.

  return menuStructure;
}
