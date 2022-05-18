module.exports = {
  plain: {
    color: '#F8F8F2',
    backgroundColor: '#282A36',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: 'rgb(98, 114, 164)',
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ['string', 'attr-value'],
      style: {
        color: 'rgb(241, 250, 140)',
      },
    },
    {
      types: [
        'entity',
        'url',
        'symbol',
        'number',
        'boolean',
        'variable',
        'constant',
        'property',
        'regex',
        'inserted',
      ],
      style: {
        color: 'rgb(189, 147, 249)',
      },
    },
    {
      types: ['atrule', 'function'],
      style: {
        color: 'rgb(139, 233, 253)',
      },
    },
    {
      types: ['punctuation', 'operator', 'keyword', 'attr-name', 'selector'],
      style: {
        color: 'rgb(255, 121, 198)',
      },
    },
    {
      types: ['deleted', 'tag'],
      style: {
        color: 'rgb(255, 85, 85)',
      },
    },
    {
      types: ['function-variable'],
      style: {
        color: 'rgb(255, 184, 108)',
      },
    },
    {
      types: ['tag', 'selector', 'keyword'],
      style: {
        color: 'rgb(80, 250, 123)',
      },
    },
  ],
};
