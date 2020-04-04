const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const HMRPlugin = new webpack.HotModuleReplacementPlugin();
const bundleAnalyzerPlugin = new BundleAnalyzerPlugin({
  analyzerMode: 'static',
  openAnalyzer: false,
});

module.exports = {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    compress: true,
    port: 5000,
    historyApiFallback: true,
  },
  plugins: [HMRPlugin, bundleAnalyzerPlugin],
};
