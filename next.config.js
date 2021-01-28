/* eslint-disable unicorn/no-reduce,no-shadow,no-param-reassign */
const withLess = require('@zeit/next-less');
// const withCss = require('@zeit/next-css');

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
  withLess({
    cssModules: true,
    lessLoaderOptions: {
      javascriptEnabled: true,
      localIdentName: '[local]___[hash:base64:5]',
    },
    webpack: (config, { isServer }) => {
      if (isServer) {
        // deal antd style
        const antStyles = /antd\/.*?\/style.*?/;
        const origExternals = [...config.externals];
        config.externals = [
          (context, request, callback) => {
            if (request.match(antStyles)) return callback();
            if (typeof origExternals[0] === 'function') {
              return origExternals[0](context, request, callback);
            }
            return callback();
          },
          ...(typeof origExternals[0] === 'function' ? [] : origExternals),
        ];
        config.module.rules.unshift({
          test: antStyles,
          use: 'null-loader',
        });
      }
    },
  }),
  // withCss(),
]);

// module.exports = compose([[withBundleAnalyzer, { enabled: process.env.ANALYZE === 'true' }]]);
