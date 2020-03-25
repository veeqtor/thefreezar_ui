const webpack = require('webpack');

const HMRPlugin = new webpack.HotModuleReplacementPlugin();

module.exports = {
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    compress: true,
    port: 5000,
    historyApiFallback: true,
  },
  plugins: [HMRPlugin],
};
