const webpackMerge = require('webpack-merge');
const commonWebpackConfig = require('./webpack/webpack.common');

module.exports = ({ production }) => {
  let envConfig;
  !production
    ? (envConfig = require(`./webpack/webpack.development`))
    : (envConfig = require(`./webpack/webpack.production`));

  return webpackMerge({ mode: production ? 'production' : 'development' }, commonWebpackConfig, envConfig);
};
