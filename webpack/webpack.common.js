const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');
const { config } = require('dotenv');

const getFaviconUrl = () => {
  return `https://webstockreview.net/images/earth-vector-png-10.png`;
};
const progressPlugin = new webpack.ProgressPlugin();
const checkerPlugin = new CheckerPlugin();
const cleanPlugin = new CleanWebpackPlugin();
const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: '[name].css',
  chunkFilename: '[id].css',
});

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  inject: 'body',
  template: './src/index.html',
  getFaviconUrl,
  inject: true,
  hash: true,
});

const momentWebPackPlugin = new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/);

const envs = config().parsed;
const stringifiedEnvs = {};
Object.keys(envs).forEach(envKey => {
  stringifiedEnvs[envKey] = JSON.stringify(envs[envKey]);
});

const definePlugin = new webpack.DefinePlugin({
  'process.env': stringifiedEnvs,
});

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
        test: /\.(ttf|eot|woff2|woff|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 5000,
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
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: ['./src', 'node_modules'],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'redux-saga': 'ReduxSaga',
  },

  plugins: [
    progressPlugin,
    htmlWebpackPlugin,
    cleanPlugin,
    momentWebPackPlugin,
    miniCssExtractPlugin,
    checkerPlugin,
    definePlugin,
  ],
};
