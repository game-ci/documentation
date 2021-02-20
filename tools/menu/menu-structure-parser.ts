import { MenuNode } from '@/tools/menu/menu-node';
import { MenuSegment } from '@/tools/menu/menu-segment';

export class MenuStructureParser {
  public static getFileMetas(menuStructure: MenuNode, fileMetas = []) {
    for (const [segment, node] of Object.entries(menuStructure)) {
      if (MenuSegment.isMeta(segment)) continue;

      if (MenuNode.isFile(node)) {
        fileMetas.push(node);
      }

      if (MenuNode.hasChildren(node)) {
        this.getFileMetas(node, fileMetas);
      }
    }

    return fileMetas;
  }
}
