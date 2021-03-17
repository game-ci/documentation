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

  static isFolder(node: MenuNode) {
    return get(node, 'meta.type') === 'folder';
  }

  static isPage(node: MenuNode) {
    return this.isFile(node);
  }

  static isVersion(node: MenuNode) {
    return get(node, 'meta.type') === 'version';
  }

  static hasChildren(node: MenuNode) {
    return typeof node === 'object';
  }

  static hasVersionContainer(node: MenuNode) {
    return has(node, MenuSegment.versionContainerIdentifier);
  }

  static getCurrentVersion(versionContainerNode: MenuNode) {
    return get(versionContainerNode, 'meta.currentVersion');
  }

  static findFirstPage(menuNode: MenuNode) {
    if (menuNode && MenuNode.isFolder(menuNode)) {
      const page = MenuNode.findFirstPageInFolder(menuNode);
      return page?.meta?.path || null;
    }

    return null;
  }

  static findFirstPageInFolder(menuNode: MenuNode) {
    const fileMetas = [];
    const containers = [];

    for (const [segment, node] of Object.entries(menuNode)) {
      if (MenuSegment.isMeta(segment)) continue;

      if (MenuNode.isFile(node)) {
        fileMetas.push(node);
      }

      if (MenuSegment.isVersionContainer(segment)) {
        const currentVersion = this.getCurrentVersion(node);
        containers.push(node[currentVersion]);
      }

      if (MenuNode.isFolder(node) || MenuNode.isVersion(node)) {
        containers.push(node);
      }
    }

    // Todo sort by fileMeta.meta.order asc
    if (fileMetas.length > 0) {
      return fileMetas[0];
    }

    for (const container of containers) {
      const result = this.findFirstPageInFolder(container);
      if (result) {
        return result;
      }
    }

    return null;
  }
}
