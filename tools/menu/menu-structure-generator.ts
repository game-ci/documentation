import { normaliseTitle, replaceAll } from '@/tools/utils';
import { get, flow, has, set, defaultsDeep, unset } from 'lodash';

export interface MenuNode {
  [name: string]: any;
}

export type MenuNodeType = 'file' | 'folder' | 'version' | 'identifier';

export const menuVersionBranch = '<versions>';
export const versionPartRegex = /^v?\d+(\.\d+)*$/;

const isVersionPart = (part: any): boolean => {
  return versionPartRegex.test(part);
};

export class MenuStructureGenerator {
  private structure: MenuNode = {};

  private fileName: string;

  private parts: string[];

  private part: string;

  private keyArray: string[];

  private permalinkPathArray: string[];

  private seoFriendlyPathArray: string[];

  private get key() {
    return this.keyArray.join('.');
  }

  private get permalinkPath() {
    return this.permalinkPathArray.join('/');
  }

  private get seoFriendlyPath() {
    return this.seoFriendlyPathArray.join('/');
  }

  private reset() {
    this.keyArray = [];
    this.permalinkPathArray = [];
    this.seoFriendlyPathArray = [];
  }

  private addPartToKey = (part) => this.keyArray.push(part);

  private addPartToPermalinkPath = (part) => this.permalinkPathArray.push(part);

  private addPartToSeoFriendlyPath = (part) => this.seoFriendlyPathArray.push(part);

  static async generateMenuStructure(fileNames: string[]) {
    const structure = new this();
    for (const fileName of fileNames) {
      structure.addFromFile(fileName);
    }

    structure.stripVersionNumbersFromLatestVersionInSeoFriendlyPath();
    structure.cleanup();

    return structure.toObject();
  }

  public toString() {
    return JSON.stringify(this.structure, null, 2);
  }

  public toObject() {
    return this.structure;
  }

  public addFromFile(fileName: string) {
    this.reset();

    this.fileName = fileName;
    this.parts = this.fileName.replace(/\.md$/, '').split('/');

    this.addStructureFromParts();
    this.addMetaForFile();
  }

  private addStructureFromParts() {
    for (this.part of this.parts) {
      const { order, part } = this.extractInfoFromPart();

      // Make version parts identifiable
      if (isVersionPart(part)) {
        // pointer
        this.addPartToKey(menuVersionBranch);
        // meta
        this.setPartType('identifier');
        this.setPartPath(this.permalinkPath);
        this.setPartCurrentVersion(part);
      }

      // Update pointers
      this.addPartToKey(part);
      this.addPartToPermalinkPath(part);
      if (!isVersionPart(part)) this.addPartToSeoFriendlyPath(part);

      // Add meta for every part
      if (!has(this.structure, this.key)) {
        this.setPartType(isVersionPart(part) ? 'version' : 'folder');
        this.setPartOrder(order);
        this.setPartPath(this.permalinkPath);
        this.setPartSeoFriendlyPath(this.seoFriendlyPath);
      }
    }
  }

  private addMetaForFile() {
    const { order, part } = this.extractInfoFromPart();

    set(this.structure, this.key, { name: normaliseTitle(part) });

    this.setPartType('file');
    this.setPartOrder(order);
    this.setPartPath(this.permalinkPath);
    this.setPartPermalinkPath(this.permalinkPath);
    this.setPartSeoFriendlyPath(this.seoFriendlyPath);
    this.setPartAbsolutePath(this.fileName);
  }

  private extractInfoFromPart() {
    const sortOrderNumberRegex = /^\d{2}-/;

    const extractSortOrderNumber = (part: string): number => {
      return Number(part.match(sortOrderNumberRegex)?.[0]?.replace(/-$/, '') || 99);
    };

    const stripSortOrderNumber = (part: string): string => {
      return part.replace(sortOrderNumberRegex, '');
    };

    const removeForbiddenCharacters = (part: string): string => {
      return replaceAll(part, '.', '-');
    };

    const sanitisePart = flow(stripSortOrderNumber, removeForbiddenCharacters);

    return {
      order: extractSortOrderNumber(this.part),
      part: sanitisePart(this.part),
    };
  }

  /**
   * Add meta to currently selected key.
   *
   * New properties overwrite existing properties recursively.
   *
   * Example:
   *   Before:     { a: 1, b: 2 }
   *   Add:        { a: 3, c: 4 }
   *   Results in: { a: 3, b: 2, c: 4 }
   */
  private addPartMeta(meta) {
    const previousMeta = get(this.structure, `${this.key}.meta`, {});
    defaultsDeep(meta, previousMeta);
    set(this.structure, `${this.key}.meta`, meta);
  }

  /**
   * Type of part, to indicate its structure
   */
  private setPartType(type: MenuNodeType) {
    this.addPartMeta({ type });
  }

  /**
   * Order in which to appear in the menu
   */
  private setPartOrder(order: number) {
    this.addPartMeta({ order });
  }

  /**
   * For routing
   */
  private setPartPath(path: string) {
    this.addPartMeta({ path });
  }

  /**
   * For linking back to the file in the repo
   */
  private setPartAbsolutePath(absolutePath: string) {
    this.addPartMeta({ absolutePath });
  }

  /**
   * For linking to a section for a specific version using an anchor
   */
  private setPartPermalinkPath(permalinkPath: string) {
    this.addPartMeta({ permalinkPath });
  }

  /**
   * For overwriting `path` in case for latest version path
   *
   * Example: to overwrite `path` github/v2/doc with `seoFriendlyPath` github/doc if v2 is current.
   */
  private setPartSeoFriendlyPath(seoFriendlyPath: string) {
    this.addPartMeta({ seoFriendlyPath });
  }

  /**
   * To overwrite currentVersion in meta every time a newer version is found
   */
  private setPartCurrentVersion(currentVersion: string) {
    if (!isVersionPart(currentVersion)) throw new Error('expected version to match a version part');
    this.addPartMeta({ currentVersion });
  }

  private stripVersionNumbersFromLatestVersionInSeoFriendlyPath() {
    const updateSeoPathsRecursively = (
      collection: MenuNode,
      replacePath = null,
      withPath = null,
    ) => {
      for (const [key, item] of Object.entries(collection)) {
        if (key === 'meta') {
          continue;
        }

        // Example: Recursively replace /github/v[latest]/something with /github/something.
        if (replacePath && withPath && has(item, 'meta.path')) {
          set(collection, `${key}.meta.path`, item.meta.path.replace(replacePath, withPath));
        }

        if (typeof item !== 'object') {
          continue;
        }

        if (key === menuVersionBranch) {
          const { currentVersion } = item.meta;
          const { seoFriendlyPath } = item[currentVersion].meta;
          const replace = get(collection, `${key}.${currentVersion}.meta.path`);
          set(collection, `${key}.${currentVersion}.meta.path`, seoFriendlyPath);
          updateSeoPathsRecursively(item, replace, seoFriendlyPath);
          continue;
        }

        updateSeoPathsRecursively(item, replacePath, withPath);
      }
    };

    updateSeoPathsRecursively(this.structure);
  }

  private cleanup() {
    const cleanupRecursively = (collection: MenuNode) => {
      for (const [key, item] of Object.entries(collection)) {
        if (key === 'meta') {
          continue;
        }

        unset(collection, `${key}.meta.seoFriendlyPath`);

        if (typeof item === 'object') {
          cleanupRecursively(item);
        }
      }
    };
    cleanupRecursively(this.structure);
  }
}
