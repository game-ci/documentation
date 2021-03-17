import { MenuNode } from '@/tools/menu/menu-node';
import { MenuSegment } from '@/tools/menu/menu-segment';
import { MenuStructureGenerator } from '@/tools/menu/menu-structure-generator';
import { MenuStructureParser } from '@/tools/menu/menu-structure-parser';
import { sleep } from '@/tools/utils';
import { readFileSync, writeFileSync } from 'fs';
import { set, get } from 'lodash';
import fsPath from 'path';

export class MenuStructure {
  private static saveFile = 'core/menu-structure.json';

  public static async generateFromFiles(filePaths: string[]) {
    const menuStructure = await MenuStructureGenerator.generateMenuStructure(filePaths);
    await this.save(menuStructure);

    return menuStructure;
  }

  public static async getFileMetas(structure: MenuNode) {
    return MenuStructureParser.getFileMetas(structure);
  }

  public static async load() {
    const asJson = readFileSync(fsPath.resolve(this.saveFile), { encoding: 'utf8' });
    return JSON.parse(asJson);
  }

  private static async save(menuStructure) {
    const asJson = `${JSON.stringify({ docs: menuStructure }, null, 2)}\n`;
    writeFileSync(fsPath.resolve(this.saveFile), asJson, { encoding: 'utf8' });
    await sleep(250); // Allow for windows filesystem to catch up.
  }

  public static getCurrentVersions(collection: MenuNode, sections = {}) {
    for (const [segment, node] of Object.entries(collection)) {
      if (MenuSegment.isMeta(segment)) continue;

      if (MenuSegment.isVersionContainer(segment)) {
        const { path, currentVersion } = node.meta;
        set(sections, `${path}`, currentVersion);
      }

      if (MenuNode.hasChildren(node)) {
        this.getCurrentVersions(node, sections);
      }
    }

    return sections;
  }

  static getNodeByUrl(menuStructure, urlPath) {
    return get(menuStructure, urlPath.replace(/^\/+/, '').split('/').join('.'));
  }
}
