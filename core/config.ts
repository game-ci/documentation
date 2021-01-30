export default {
  search: {
    applicationId: 'W4X62KM9QE',
    index: 'documentation_sections',
    publicApiKey: '4a06011ed8a467811866c27ca4c1a367',
    settings: {
      // Select the attributes you want to search in
      searchableAttributes: ['title', 'summary', 'body', 'categories', 'filename'],
      // Define business metrics for ranking and sorting
      customRanking: ['desc(title)'],
      // Set up some attributes to filter results on
      attributesForFaceting: ['filename'],
      // Define the attribute we want to distinct on
      attributeForDistinct: 'ObjectID',
    },
  },
};
