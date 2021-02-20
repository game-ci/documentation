import { getIsomorphicValue } from '@/tools/utils/get-isomorphic-value';

export default {
  baseUrl: 'https://game.ci',
  docsPath: '/docs',
  search: {
    applicationId: 'W4X62KM9QE',
    index: getIsomorphicValue('SEARCH_INDEX'),
    publicApiKey: '4a06011ed8a467811866c27ca4c1a367',
    hitsPerPage: 12,
    settings: {
      // Select the attributes you want to search in
      searchableAttributes: ['title', 'summary', 'body', 'categories', 'filename'],
      // Define business metrics for ranking and sorting
      customRanking: ['asc(level)', 'desc(title)'],
      // Set up some attributes to filter results on
      attributesForFaceting: ['filename'],
      // Define the attribute we want to distinct on
      attributeForDistinct: 'ObjectID',
    },
  },
};
