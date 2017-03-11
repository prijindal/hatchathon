
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

const plugins = [
  new webpack.NoEmitOnErrorsPlugin(),
  new HtmlWebpackPlugin({
    inject: true,
    templateContent: templateContent(), // eslint-disable-line no-use-before-define
  }),
  new CircularDependencyPlugin({
    exclude: /a\.js|node_modules/,
    failOnError: false,
  }),
];


module.exports = require('./webpack.base.babel')({
  entry: [
    'eventsource-polyfill',
    path.join(process.cwd(), 'app/app.js'),
  ],

  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },

  plugins,

  devtool: 'cheap-module-eval-source-map',

  performance: {
    hints: false,
  },
});

function templateContent() {
  return fs.readFileSync(path.resolve(process.cwd(), 'app/index.html')).toString();
}
