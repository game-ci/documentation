import path from 'path';
import readDirectoryRecursively from '../../core/fs/read-directory-recursively';
import generateMenuStructureFromFiles from './generate-menu-structure-from-files';

(async () => {
  const files = await readDirectoryRecursively(path.resolve('docs/'));

  generateMenuStructureFromFiles(files);
})();
