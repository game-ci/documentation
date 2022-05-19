module.exports = {
  indexName: 'game',
  pathsToMatch: ['https://game.ci/**'],
  recordExtractor: ({ $, helpers }) => {
    // priority order: deepest active sub list header -> navbar active item -> 'Documentation'
    const lvl0 =
      $('.menu__link.menu__link--sublist.menu__link--active, .navbar__item.navbar__link--active')
        .last()
        .text() || 'Documentation';

    return helpers.docsearch({
      recordProps: {
        lvl0: {
          selectors: '',
          defaultValue: lvl0,
        },
        lvl1: 'header h1',
        lvl2: 'article h2',
        lvl3: 'article h3',
        lvl4: 'article h4',
        lvl5: 'article h5, article td:first-child',
        lvl6: 'article h6',
        content: 'article p, article li, article td:last-child',
      },
      indexHeadings: true,
      aggregateContent: true,
    });
  },
};
