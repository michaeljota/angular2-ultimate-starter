const webpackMerge = require('webpack-merge');

const browserConfig = require('./../../browser');
const rendererCommonConfig = require('./webpack.renderer.common');

module.exports = (env) => {
  return webpackMerge(browserConfig(env), rendererCommonConfig(env));
}
