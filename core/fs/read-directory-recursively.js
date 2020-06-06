import { readdirSync } from 'fs';
import { resolve } from 'path';

export default function readDirectoryRecursively(directory, fileNames = [], currentDirectory = '') {
  const directoryEntries = readdirSync(directory, { withFileTypes: true });

  directoryEntries.forEach((entry) => {
    const { name } = entry;
    if (entry.isDirectory()) {
      readDirectoryRecursively(resolve(directory, name), fileNames, `${currentDirectory}${name}/`);
      return;
    }

    if (entry.isFile()) {
      fileNames.push(`${currentDirectory}${name}`);
    }
  });

  return fileNames;
}
