const withBundleAnalyzer = require('@next/bundle-analyzer');

const compose = (plugins) => ({
  // experimental: {
  //   modern: true,
  // },

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

module.exports = compose([[withBundleAnalyzer, { enabled: process.env.ANALYZE === 'true' }]]);
