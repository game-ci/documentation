import { normaliseTitle } from '@/tools/utils';

export type Segment = string;

export class MenuSegment {
  public static versionContainerIdentifier = '<versions>';

  public static isMeta(segment: Segment) {
    return segment === 'meta';
  }

  public static isVersionContainer(segment: Segment) {
    return segment === this.versionContainerIdentifier;
  }

  public static isVersion(segment: Segment) {
    return /^v?\d+(\.\d+)*$/.test(segment);
  }

  static toTitle(segment: Segment) {
    return normaliseTitle(segment);
  }
}
