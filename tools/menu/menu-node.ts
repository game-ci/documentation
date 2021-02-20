import { get, has } from 'lodash';

import { MenuSegment } from '@/tools/menu/menu-segment';

export interface MenuNode {
  [key: string]: any;
}

export type MenuNodeType = 'file' | 'folder' | 'version' | 'identifier';

export class MenuNode {
  static isFile(node: MenuNode) {
    return get(node, 'meta.type') === 'file';
  }

  static isPage(node: MenuNode) {
    return this.isFile(node);
  }

  static hasChildren(node: any) {
    return typeof node === 'object';
  }

  static hasVersionContainer(node: MenuNode) {
    return has(node, MenuSegment.versionContainerIdentifier);
  }
}
