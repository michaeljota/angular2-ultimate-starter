/*
 * @author: @michaeljota
 */

const webpackMerge = require('webpack-merge');
const MainTreadConfig = require('./main');
const RendererThreadConfig = require('./renderer');

module.exports = (env) => {
  return [
    // The Electron main thread configuration
    webpackMerge(MainTreadConfig(env), {
    }),
    // The Electron renderer thread configuration
    webpackMerge(RendererThreadConfig(env), {
    }),
  ]
};
