import algoliasearch from 'algoliasearch';

const searchOnlyApiKey = '4a06011ed8a467811866c27ca4c1a367';

const client = algoliasearch('W4X62KM9QE', searchOnlyApiKey);

const index = client.initIndex('demo_media');

index.setSettings({
  // Select the attributes you want to search in
  searchableAttributes: ['post_title', 'author_name', 'categories', 'content'],
  // Define business metrics for ranking and sorting
  customRanking: ['desc(post_date)', 'desc(record_index)'],
  // Set up some attributes to filter results on
  attributesForFaceting: ['categories'],
  // Define the attribute we want to distinct on
  attributeForDistinct: 'post_id',
});

export { client, index };
