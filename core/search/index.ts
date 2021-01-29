import algoliasearch from 'algoliasearch';
import config from '@/core/config';

const client = algoliasearch(config.search.applicationId, config.search.publicApiKey);

const index = client.initIndex(config.search.index);

export { client, index };
