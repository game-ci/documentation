/* eslint-disable no-console,unicorn/no-process-exit */
import path from 'path';
import { readFileSync } from 'fs';
import getBranchName from 'current-git-branch';
import algoliasearch from 'algoliasearch';
import { difference } from 'lodash';
import config from '../../core/config';
import generateObjectIDs from './utils/generate-object-ids';

(async () => {
  try {
    if (process.env.CI) {
      console.log(`[push-search-payload] Updating search cache for "${getBranchName()}" branch.`);
    } else {
      console.log('[push-search-payload] Skipping search update for local builds.');
      return;
    }

    const sectionsRaw = readFileSync(path.resolve('.search/sections.json'), { encoding: 'utf-8' });
    const sections = JSON.parse(sectionsRaw);

    // Create search client instance
    const client = algoliasearch(config.search.applicationId, process.env.SEARCH_API_PRIVATE_KEY);

    // Use existing index or create one if it does not exist
    const index = client.initIndex(config.search.index);
    await index.setSettings(config.search.settings);

    // Inventory current objects
    let existingObjects = [];
    await index.browseObjects({
      query: '', // Empty query will match all records
      attributesToRetrieve: ['objectID'],
      batch: (batch) => {
        existingObjects = [...existingObjects, ...batch.map((hit) => hit.objectID)];
      },
    });

    // Push objects to Algolia
    const objects = generateObjectIDs(sections, ['title', 'basePath', 'summary']);
    const updatedObjects = (await index.saveObjects(objects)).objectIDs;
    console.log('[push-search-payload] Updated search entries.\n', updatedObjects);

    // Remove objects that are no longer relevant
    const floatingObjects = difference(existingObjects, updatedObjects);
    if (floatingObjects.length > 0) {
      console.log('[push-search-payload] Removing old search entries.\n', floatingObjects);
      await index.deleteObjects(floatingObjects);
    }

    console.log('[push-search-payload] Finished updating search cache.');
  } catch (error) {
    console.log(error);

    process.exit(400);
  }
})();
