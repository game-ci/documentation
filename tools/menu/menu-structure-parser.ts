import { MenuNode } from '@/tools/menu/menu-structure-generator';

export class MenuStructureParser {
  public static getFileMetas(menuStructure: MenuNode, fileMetas = []) {
    for (const [key, item] of Object.entries(menuStructure)) {
      if (key === 'meta') {
        continue;
      }

      if (item.meta?.type === 'file') {
        fileMetas.push(item);
      }

      if (typeof item === 'object') {
        this.getFileMetas(item, fileMetas);
      }
    }

    return fileMetas;
  }
}
