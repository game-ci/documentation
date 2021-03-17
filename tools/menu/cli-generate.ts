import { MenuStructure } from '@/tools/menu/menu-structure';
import path from 'path';
import readDirectoryRecursively from '../../core/fs/read-directory-recursively';

(async () => {
  const filePaths = await readDirectoryRecursively(path.resolve('docs/'));

  await MenuStructure.generateFromFiles(filePaths);
})();
