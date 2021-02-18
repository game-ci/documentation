import { normaliseTitle, replaceAll } from '@/tools/utils';
import { get, flow, has, set, defaultsDeep, unset } from 'lodash';

export const menuVersionBranch = '<versions>';
export const versionPartRegex = /^v?\d+(\.\d+)*$/;

const isVersionPart = (part: any): boolean => {
  return versionPartRegex.test(part);
};

export class MenuStructure {
  private structure = {};

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
        this.addMeta(this.key, { path: this.permalinkPath, currentVersion: part });
      }

      this.addPartToKey(part);
      this.addPartToPermalinkPath(part);
      if (!isVersionPart(part)) this.addPartToSeoFriendlyPath(part);

      // Add meta for every part
      if (!has(this.structure, this.key)) {
        this.addMeta(this.key, {
          path: this.permalinkPath,
          order,
          seoFriendlyPath: this.seoFriendlyPath,
        });
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
      isLeaf: true,
      order,
    });
  }

  private extractInfoFromPart() {
    const sortOrderNumberRegex = /^\d{2}-/;

    const extractSortOrderNumber = (part: string): number => {
      return Number(part.match(sortOrderNumberRegex)?.[0]?.replace(/-$/, '') || '100');
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

  private addMeta(key, meta) {
    const previousMeta = get(this.structure, `${key}.meta`, {});
    defaultsDeep(meta, previousMeta);
    set(this.structure, key, { meta });
  }

  public stripVersionNumbersFromLatestVersionInSeoFriendlyPath() {
    const updateSeoPathsRecursively = (collection, replacePath = null, withPath = null) => {
      for (const [parent, children] of Object.entries(collection)) {
        if (parent === 'meta') {
          continue;
        }

        // Example: Recursively replace /github/v[latest]/something with /github/something.
        if (replacePath && withPath && has(children, 'path')) {
          set(collection, `${parent}.path`, children.path.replace(replacePath, withPath));
        }

        if (has(children, 'isLeaf')) {
          continue;
        }

        if (parent === menuVersionBranch) {
          // @ts-ignore
          const { currentVersion } = children.meta;
          const { seoFriendlyPath } = children[currentVersion].meta;
          const replace = get(collection, `${parent}.${currentVersion}.meta.path`);
          set(collection, `${parent}.${currentVersion}.meta.path`, seoFriendlyPath);
          updateSeoPathsRecursively(children, replace, seoFriendlyPath);
          continue;
        }

        updateSeoPathsRecursively(children, replacePath, withPath);
      }
    };

    updateSeoPathsRecursively(this.structure);
  }

  private cleanup() {
    const cleanupRecursively = (collection) => {
      for (const [parent, children] of Object.entries(collection)) {
        unset(collection, `${parent}.seoFriendlyPath`);

        if (parent === 'meta' || has(children, 'isLeaf')) {
          continue;
        }

        cleanupRecursively(children);
      }
    };
    cleanupRecursively(this.structure);
  }
}
