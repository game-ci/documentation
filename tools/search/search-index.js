/* eslint-disable import/no-useless-path-segments */
import { currentBranch } from '../utils/current-branch';

export class SearchIndex {
  static name = `search`;

  static getForCurrentEnvironment() {
    const prefix = `${this.name}_`;
    const index = currentBranch()
      .replace(/\//g, '-') // convert slash (/) to hyphen (-)
      .replace(/[^\w-]/g, '') // remove non-word-characters except hyphen (-)
      .replace(/-+/g, '-') // deduplicate hyphens
      .replace(/^/, prefix); // prefix with index name

    console.log(`info  - Using search index "${index}".`);

    return index;
  }
}
