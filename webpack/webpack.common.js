const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const DotenvConfig = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');

const progressPlugin = new webpack.ProgressPlugin();
const checkerPlugin = new CheckerPlugin();
const cleanPlugin = new CleanWebpackPlugin();
const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: '[name].css',
  chunkFilename: '[id].css',
});
const dotenv = new DotenvConfig();
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  inject: 'body',
  template: './src/index.html',
});

const bundleAnalyzerPlugin = new BundleAnalyzerPlugin({
  analyzerMode: 'static',
  openAnalyzer: false,
});
const momentWebPackPlugin = new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/);

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash].bundle.js',
    chunkFilename: '[name].[hash].bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/,
        use: 'file-loader',
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png',
            },
          },
        ],
      },
      {
        test: /\.ts(x)?$/,
        use: ['awesome-typescript-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'],
    modules: ['./src', 'node_modules'],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'redux-saga': 'ReduxSaga',
  },

  plugins: [
    progressPlugin,
    dotenv,
    htmlWebpackPlugin,
    cleanPlugin,
    bundleAnalyzerPlugin,
    momentWebPackPlugin,
    miniCssExtractPlugin,
    checkerPlugin,
  ],
};
