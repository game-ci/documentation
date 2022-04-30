import { readFileSync } from 'fs';

export default function readFile(pathToFile) {
  const entry = readFileSync(pathToFile);

  return entry.toString();
}
