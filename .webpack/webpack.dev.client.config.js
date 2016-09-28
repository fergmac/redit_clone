/**
 * DEVELOPMENT WEBPACK CONFIGURATION
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const cssnext = require('postcss-cssnext');
const postcssReporter = require('postcss-reporter');

module.exports = {

  target: 'web',
  stats: true,
  progress: true,
  devtool: 'inline-source-map',

  entry: [
    path.join(process.cwd(), 'web.browser/react.app.js'),
  ],

  output: {
    path: path.resolve(process.cwd(), '.build'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },

  module: {
    loaders: [{
      test: /\.js?$/,
      loaders: ['babel', 'eslint'],
      exclude: /node_modules/,
    }, {
      test: /\.html$/,
      loader: 'html-loader',
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader?localIdentName=[local]__[path][name]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader',
    }, {
      test: /\.json$/,
      loader: 'json',
    }],
  },

  postcss: () => ([
    cssnext({
      browsers: ['last 2 versions', 'IE > 10'],
    }),
    postcssReporter({
      clearMessages: true,
    }),
  ]),

  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx',
    ],
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), 'web.browser/index.html'),
      inject: true,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
};
