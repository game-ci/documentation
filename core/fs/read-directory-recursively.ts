import path from 'path';
import { readdirSync } from 'fs';

export default function readDirectoryRecursively(directory, fileNames = [], currentDirectory = '') {
  const directoryEntries = readdirSync(directory, { withFileTypes: true });

  for (const entry of directoryEntries) {
    const { name } = entry;
    if (entry.isDirectory()) {
      readDirectoryRecursively(
        path.resolve(directory, name),
        fileNames,
        `${currentDirectory}${name}/`,
      );
      continue;
    }

    if (entry.isFile()) {
      fileNames.push(`${currentDirectory}${name}`);
    }
  }

  return fileNames;
}
