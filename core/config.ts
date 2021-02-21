import { getIsomorphicValue } from '@/tools/utils/get-isomorphic-value';

export default {
  baseUrl: 'https://game.ci',
  docsPath: '/docs',
  firebase: {
    apiKey: 'AIzaSyCz60Pmbrb4v2nqd8TGrm1Vo0Ylb6daKWQ',
    authDomain: 'unity-ci-versions.firebaseapp.com',
    databaseURL: 'https://unity-ci-versions.firebaseio.com',
    projectId: 'unity-ci-versions',
    storageBucket: 'unity-ci-versions.appspot.com',
    messagingSenderId: '841479186623',
    appId: '1:841479186623:web:c20350191e962a8a71fe0a',
    measurementId: 'G-1BGVS7HDW8',
  },
  search: {
    applicationId: 'W4X62KM9QE',
    index: getIsomorphicValue('SEARCH_INDEX'),
    publicApiKey: '4a06011ed8a467811866c27ca4c1a367',
    hitsPerPage: 12,
    settings: {
      // Select the attributes you want to search in
      searchableAttributes: ['title', 'summary', 'body', 'version', 'categories', 'filename'],
      // Define business metrics for ranking and sorting
      customRanking: ['asc(level)', 'desc(title)'],
      // Set up some attributes to filter results on
      attributesForFaceting: ['filename'],
      // Define the attribute we want to distinct on
      attributeForDistinct: 'ObjectID',
    },
  },
};
