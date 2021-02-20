import { MenuNode, MenuNodeType } from '@/tools/menu/menu-node';
import { normaliseTitle, replaceAll } from '@/tools/utils';
import { defaultsDeep, flow, get, has, set, unset } from 'lodash';
import { MenuSegment } from './menu-segment';

export class MenuStructureGenerator {
  private structure: MenuNode = {};

  private fileName: string;

  private segments: string[];

  private segment: string;

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

  private addSegmentToKey = (segment) => this.keyArray.push(segment);

  private addSegmentToPermalinkPath = (segment) => this.permalinkPathArray.push(segment);

  private addSegmentToSeoFriendlyPath = (segment) => this.seoFriendlyPathArray.push(segment);

  static async generateMenuStructure(fileNames: string[]) {
    // eslint-disable-next-line no-console
    console.log('event - generating menu structure');

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
    this.segments = this.fileName.replace(/\.md$/, '').split('/');

    this.addStructureFromSegments();
    this.addMetaForFileNode();
  }

  private addStructureFromSegments() {
    for (this.segment of this.segments) {
      const { order, segment } = this.extractInfoFromSegment();

      // Make version parts identifiable
      if (MenuSegment.isVersion(segment)) {
        this.addSegmentToKey(MenuSegment.versionContainerIdentifier);
        this.setNodeType('identifier');
        this.setNodePath(this.permalinkPath);
        this.setNodeCurrentVersion(segment);
      }

      // Update pointers
      this.addSegmentToKey(segment);
      this.addSegmentToPermalinkPath(segment);
      if (!MenuSegment.isVersion(segment)) this.addSegmentToSeoFriendlyPath(segment);

      // Add meta for every part
      if (!has(this.structure, this.key)) {
        this.setNodeType(MenuSegment.isVersion(segment) ? 'version' : 'folder');
        this.setNodeOrder(order);
        this.setNodePath(this.permalinkPath);
        this.setNodeSeoFriendlyPath(this.seoFriendlyPath);
      }
    }
  }

  private addMetaForFileNode() {
    const { order, segment } = this.extractInfoFromSegment();

    this.setNodeName(normaliseTitle(segment));
    this.setNodeType('file');
    this.setNodeOrder(order);
    this.setNodePath(this.permalinkPath);
    this.setNodePermalinkPath(this.permalinkPath);
    this.setNodeSeoFriendlyPath(this.seoFriendlyPath);
    this.setNodeAbsolutePath(this.fileName);
  }

  private extractInfoFromSegment() {
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

    const sanitiseSegment = flow(stripSortOrderNumber, removeForbiddenCharacters);

    return {
      order: extractSortOrderNumber(this.segment),
      segment: sanitiseSegment(this.segment),
    };
  }

  private setNodeName(name) {
    set(this.structure, this.key, { name });
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
  private addNodeMeta(meta) {
    const previousMeta = get(this.structure, `${this.key}.meta`, {});
    defaultsDeep(meta, previousMeta);
    set(this.structure, `${this.key}.meta`, meta);
  }

  /**
   * Type of part, to indicate its structure
   */
  private setNodeType(type: MenuNodeType) {
    this.addNodeMeta({ type });
  }

  /**
   * Order in which to appear in the menu
   */
  private setNodeOrder(order: number) {
    this.addNodeMeta({ order });
  }

  /**
   * For routing
   */
  private setNodePath(path: string) {
    this.addNodeMeta({ path });
  }

  /**
   * For linking back to the file in the repo
   */
  private setNodeAbsolutePath(absolutePath: string) {
    this.addNodeMeta({ absolutePath });
  }

  /**
   * For linking to a section for a specific version using an anchor
   */
  private setNodePermalinkPath(permalinkPath: string) {
    this.addNodeMeta({ permalinkPath });
  }

  /**
   * For overwriting `path` in case for latest version path
   *
   * Example: to overwrite `path` github/v2/doc with `seoFriendlyPath` github/doc if v2 is current.
   */
  private setNodeSeoFriendlyPath(seoFriendlyPath: string) {
    this.addNodeMeta({ seoFriendlyPath });
  }

  /**
   * To overwrite currentVersion in meta every time a newer version is found
   */
  private setNodeCurrentVersion(currentVersion: string) {
    if (!MenuSegment.isVersion(currentVersion)) {
      throw new Error('expected version to match a version part');
    }

    this.addNodeMeta({ currentVersion });
  }

  private stripVersionNumbersFromLatestVersionInSeoFriendlyPath() {
    const updateSeoPathsRecursively = (
      collection: MenuNode,
      replacePath = null,
      withPath = null,
    ) => {
      for (const [segment, node] of Object.entries(collection)) {
        if (MenuSegment.isMeta(segment)) continue;

        // Example: Recursively replace /github/v[latest]/something with /github/something.
        if (replacePath && withPath && has(node, 'meta.path')) {
          set(collection, `${segment}.meta.path`, node.meta.path.replace(replacePath, withPath));
        }

        if (!MenuNode.hasChildren(node)) {
          continue;
        }

        if (MenuSegment.isVersionContainer(segment)) {
          const { currentVersion } = node.meta;
          const { seoFriendlyPath } = node[currentVersion].meta;
          const replace = get(collection, `${segment}.${currentVersion}.meta.path`);
          set(collection, `${segment}.${currentVersion}.meta.path`, seoFriendlyPath);
          updateSeoPathsRecursively(node, replace, seoFriendlyPath);
          continue;
        }

        updateSeoPathsRecursively(node, replacePath, withPath);
      }
    };

    updateSeoPathsRecursively(this.structure);
  }

  private cleanup() {
    const cleanupRecursively = (collection: MenuNode) => {
      for (const [segment, node] of Object.entries(collection)) {
        if (MenuSegment.isMeta(segment)) continue;

        unset(collection, `${segment}.meta.seoFriendlyPath`);

        if (MenuNode.hasChildren(node)) {
          cleanupRecursively(node);
        }
      }
    };
    cleanupRecursively(this.structure);
  }
}
