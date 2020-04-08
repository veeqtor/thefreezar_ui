const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');

const HMRPlugin = new webpack.HotModuleReplacementPlugin();
const bundleAnalyzerPlugin = new BundleAnalyzerPlugin({
  analyzerMode: 'static',
  openAnalyzer: false,
});

module.exports = {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    compress: true,
    port: 5000,
    historyApiFallback: true,
    hot: true,
    open: true,
    overlay: true,
    watchContentBase: true,
    watchOptions: {
      poll: true,
      ignored: /node_modules/,
    },
  },
  plugins: [HMRPlugin, bundleAnalyzerPlugin],
};
