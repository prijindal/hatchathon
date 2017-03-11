const path = require('path');
const webpack = require('webpack');

module.exports = options => ({
  entry: options.entry,
  output: Object.assign({
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/',
  }, options.output),
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      include: /(node_modules|app|css)/,
      loaders: ['style-loader', 'css-loader'],
    }, {
      test: /\.(eot|svg|woff|woff2|ttf)$/,
      loader: 'file-loader',
    }, {
      test: /\.(jpg|png|gif)$/,
      loaders: [
        'file-loader',
      ],
    }, {
      test: /\.html$/,
      loader: 'html-loader',
    }, {
      test: /\.json/,
      loader: 'json-loader',
    }, {
      test: /\.(mp4|webm)/,
      loader: 'url-loader',
      query: {
        limit: 10000,
      },
    }],
  },
  plugins: options.plugins.concat([
    new webpack.ProvidePlugin({
      fetch: 'exports-loader?self.fetch|whatwg-fetch',
    }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new webpack.NamedModulesPlugin(),
  ]),

  resolve: {
    modules: ['app', 'node_modules'],
    extensions: [
      '.js',
      '.jsx',
      '.react.js',
    ],
    mainFields: [
      'browser',
      'jsnext:main',
      'main',
    ],
  },
  devtool: options.devtool,
  target: 'web', // Make web variables accessible to webpack, e.g. window
  performance: options.performance || {},
});
