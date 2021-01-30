import algoliasearch from 'algoliasearch';
import config from '@/core/config';

export const client = algoliasearch(config.search.applicationId, config.search.publicApiKey);
export const indexName = config.search.index;
