import { MenuNode, MenuStructureGenerator } from '@/tools/menu/menu-structure-generator';
import { MenuStructureParser } from '@/tools/menu/menu-structure-parser';
import { sleep } from '@/tools/utils';
import { writeFileSync, readFileSync } from 'fs';
import path from 'path';

export class MenuStructure {
  private static SAVE_FILE = 'core/menu-structure.json';

  public static async generateFromFiles(filePaths: string[]) {
    console.log('event - generating menu structure');

    const menuStructure = await MenuStructureGenerator.generateMenuStructure(filePaths);
    await this.save(menuStructure);

    return menuStructure;
  }

  static async getFileMetas(structure: MenuNode) {
    return MenuStructureParser.getFileMetas(structure);
  }

  static async load() {
    const asJson = readFileSync(path.resolve(this.SAVE_FILE), { encoding: 'utf8' });
    return JSON.parse(asJson);
  }

  private static async save(menuStructure) {
    const asJson = `${JSON.stringify({ docs: menuStructure }, null, 2)}\n`;
    writeFileSync(path.resolve(this.SAVE_FILE), asJson, { encoding: 'utf8' });
    await sleep(250); // Allow for windows filesystem to catch up.
  }
}
