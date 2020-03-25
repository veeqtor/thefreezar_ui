const webpackMerge = require('webpack-merge');
const commonWebpackConfig = require('./webpack/webpack.common');

module.exports = env => {
  let envConfig;
  !env.mode
    ? (envConfig = require(`./webpack/webpack.development`))
    : (envConfig = require(`./webpack/webpack.${env.mode}`));

  return webpackMerge({ mode: env.mode }, commonWebpackConfig, envConfig);
};
