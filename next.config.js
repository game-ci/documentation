/* eslint-disable unicorn/no-array-reduce,no-param-reassign,@typescript-eslint/no-shadow */
import { SearchIndex } from './tools/search/search-index';

const withCSS = require('@zeit/next-css');
const withLess = require('@zeit/next-less');

module.exports = withCSS(
  withLess({
    target: 'serverless',

    // Interpreted at build-time
    publicRuntimeConfig: {
      SEARCH_INDEX: SearchIndex.getForCurrentEnvironment(),
    },

    lessLoaderOptions: {
      javascriptEnabled: true,
    },

    webpack: (config, { isServer }) => {
      config.module.rules.push(
        {
          test: /\.md$/,
          use: 'raw-loader',
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
      );

      if (isServer) {
        const antStyles = /antd\/.*?\/style.*?/;
        const origExternals = [...config.externals];
        config.externals = [
          (context, request, callback) => {
            if (antStyles.test(request) || typeof origExternals[0] !== 'function') {
              callback();
            } else {
              origExternals[0](context, request, callback);
            }
          },
          ...(typeof origExternals[0] === 'function' ? [] : origExternals),
        ];

        config.module.rules.unshift({
          test: antStyles,
          use: 'null-loader',
        });
      }
      return config;
    },
  }),
);
