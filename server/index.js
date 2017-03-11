const express = require('express');
const setup = require('./middlewares/frontendMiddleware');
const resolve = require('path').resolve;

const app = express();

setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

const host = process.env.HOST || null;
const port = process.argv.PORT || 3000;

app.listen(port, host, () => {
  console.log(`Listening at ${host}:${port}`);
});
