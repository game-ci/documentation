import { normaliseTitle, replaceAll } from '@/tools/utils';
import { get, flow, has, set, defaultsDeep, unset } from 'lodash';

interface JsonNode {
  [name: string]: any;
}

export const menuVersionBranch = '<versions>';
export const versionPartRegex = /^v?\d+(\.\d+)*$/;

const isVersionPart = (part: any): boolean => {
  return versionPartRegex.test(part);
};

export class MenuStructure {
  private structure: JsonNode = {};

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

      // Make version parts identifiable (inside parent folder, thus before updating key)
      if (isVersionPart(part)) {
        this.addPartToKey(menuVersionBranch);
        this.addMeta({ path: this.permalinkPath, currentVersion: part });
      }

      this.addPartToKey(part);
      this.addPartToPermalinkPath(part);
      if (!isVersionPart(part)) this.addPartToSeoFriendlyPath(part);

      // Add meta for every part
      if (!has(this.structure, this.key)) {
        this.addMeta({ path: this.permalinkPath, order, seoFriendlyPath: this.seoFriendlyPath });
      }
    }
  }

  private addMetaForFile() {
    const { order, part } = this.extractInfoFromPart();

    set(this.structure, this.key, {
      name: normaliseTitle(part),
      path: this.permalinkPath,
      permalinkPath: this.permalinkPath,
      seoFriendlyPath: this.seoFriendlyPath,
      order,
    });
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
  private addMeta(meta) {
    const previousMeta = get(this.structure, `${this.key}.meta`, {});
    defaultsDeep(meta, previousMeta);
    set(this.structure, `${this.key}.meta`, meta);
  }

  public stripVersionNumbersFromLatestVersionInSeoFriendlyPath() {
    const updateSeoPathsRecursively = (
      collection: JsonNode,
      replacePath = null,
      withPath = null,
    ) => {
      for (const [key, item] of Object.entries(collection)) {
        if (key === 'meta') {
          continue;
        }

        // Example: Recursively replace /github/v[latest]/something with /github/something.
        if (replacePath && withPath && has(item, 'path')) {
          set(collection, `${key}.path`, item.path.replace(replacePath, withPath));
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
    const cleanupRecursively = (collection: JsonNode) => {
      for (const [key, item] of Object.entries(collection)) {
        unset(collection, `${key}.seoFriendlyPath`);

        if (key === 'meta' || typeof item !== 'object') {
          continue;
        }

        cleanupRecursively(item);
      }
    };
    cleanupRecursively(this.structure);
  }
}
