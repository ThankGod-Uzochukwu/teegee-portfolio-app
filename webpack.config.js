const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const path = require('path');

module.exports = async function(env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  // Example: Add custom alias
  config.resolve.alias['@tabs'] = path.resolve(__dirname, 'app/(tabs)');

  // Example: Add custom plugin
  config.plugins.push(new MyCustomWebpackPlugin());

  // Example: Add custom loader
  config.module.rules.push({
    test: /\.md$/,
    use: 'raw-loader'
  });

  // Example: Change output directorynpx serve web-build --single
  config.output.path = path.resolve(__dirname, 'build');

  return config;
};


// // webpack.config.js
// const { withExpo } = require('@expo/webpack-config');

// module.exports = async function(env, argv) {
//   return withExpo(env, argv);
// };
