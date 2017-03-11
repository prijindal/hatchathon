/* eslint-disable global-require */
const path = require('path');

const appDevMiddleware = (app, webpackConfig) => {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const compiler = webpack(webpackConfig);

  const middleware = webpackDevMiddleware(compiler, {
    noInfo: false,
    publicPath: webpackConfig.output.publicPath,
    silent: false,
  });

  app.use(middleware);

  const fs = middleware.fileSystem;

  app.get('*', (req, res) => {
    fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.send(file.toString());
      }
    });
  });
};

module.exports = (app) => {
  // const isProd = process.env.NODE_ENV === 'production';
  const webpackConfig = require('../../webpack/webpack.dev.babel');
  appDevMiddleware(app, webpackConfig);

  return app;
};
