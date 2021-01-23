import algoliasearch from 'algoliasearch';

const client = algoliasearch('W4X62KM9QE', '••••••••••••••••••••••••••••••••');

const index = client.initIndex('demo_media');

fetch('https://alg.li/doc-media.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (posts) {
    index.saveObjects(posts, {
      autoGenerateObjectIDIfNotExist: true,
    });

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
  });
