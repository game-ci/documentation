const withLess = require('@zeit/next-less');
const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');
const lessToJS = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './styles/custom-antd-theme.less'), 'utf8'),
);

const customWithSass = withSass({
  cssModules: true,
  ...withLess({
    lessLoaderOptions: {
      javascriptEnabled: true,
      modifyVars: themeVariables, // make your antd custom effective
      importLoaders: 0,
    },
    cssLoaderOptions: {
      importLoaders: 3,
      localIdentName: '[local]___[hash:base64:5]',
    },
    webpack: (config, { isServer }) => {
      // Make Ant styles work with less
      if (isServer) {
        const antStyles = /antd\/.*?\/style.*?/;
        const origExternals = [...config.externals];
        // eslint-disable-next-line no-param-reassign
        config.externals = [
          // eslint-disable-next-line consistent-return
          (context, request, callback) => {
            if (request.match(antStyles)) return callback();
            if (typeof origExternals[0] === 'function') {
              origExternals[0](context, request, callback);
            } else {
              callback();
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
});

/* eslint-disable unicorn/no-reduce,no-shadow,no-param-reassign */
const withBundleAnalyzer = require('@next/bundle-analyzer');

const compose = (plugins) => ({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });

    return plugins.reduce((config, plugin) => {
      if (Array.isArray(plugin)) {
        const [_plugin, ...arguments_] = plugin;
        plugin = _plugin(...arguments_);
      }
      if (plugin instanceof Function) {
        plugin = plugin();
      }
      if (plugin && plugin.webpack instanceof Function) {
        return plugin.webpack(config, options);
      }
      return config;
    }, config);
  },

  webpackDevMiddleware(config) {
    return plugins.reduce((config, plugin) => {
      if (Array.isArray(plugin)) {
        const [_plugin, ...arguments_] = plugin;
        plugin = _plugin(...arguments_);
      }
      if (plugin instanceof Function) {
        plugin = plugin();
      }
      if (plugin && plugin.webpackDevMiddleware instanceof Function) {
        return plugin.webpackDevMiddleware(config);
      }
      return config;
    }, config);
  },
});

module.exports = compose([
  [withBundleAnalyzer, { enabled: process.env.ANALYZE === 'true' }],
  customWithSass,
  withCss(),
]);
