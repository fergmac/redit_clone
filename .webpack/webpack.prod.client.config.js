/**
 * PRODUCTION WEBPACK CONFIGURATION
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const cssnext = require('postcss-cssnext');
const postcssReporter = require('postcss-reporter');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  target: 'web',
  stats: true,
  progress: true,

  entry: [
    path.join(process.cwd(), 'src/client/web.browser/react.app.js'),
  ],

  output: {
    path: path.resolve(process.cwd(), '.build/production/src/client/web.browser'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },

  module: {
    loaders: [{
      test: /\.js?$/,
      loader: 'babel!eslint',
      exclude: /node_modules/,
    }, {
      test: /\.html$/,
      loader: 'html-loader',
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract(
        'style-loader',
        'css-loader?modules&importLoaders=1!postcss-loader'
      ),
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
    modules: ['web.browser', 'node_modules'],
    extensions: [
      '',
      '.js',
      '.jsx',
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin('[name].[contenthash].css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), 'src/client/web.browser/index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
};
