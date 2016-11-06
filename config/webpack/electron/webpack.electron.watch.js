/*
 * @author: @michaeljota
 */

const appRoot = require('app-root-path');

const mainThreadConfig = require('./main');
const rendererThreadConfig = require('./renderer');

const webpackMerge = require('webpack-merge');
const { server, client } = require('electron-connect');

const electron = server.create({ path: appRoot.resolve('dist') });

/*
 * Webpack Plugins
 */
const { ProvidePlugin } = require('webpack');
const WebpackOnBuildPlugin = require('on-build-webpack');

module.exports = (env) => {
  let started = false;

  return [
    // The Electron main thread configuration
    webpackMerge(mainThreadConfig(env), {
      plugins: [
        new WebpackOnBuildPlugin(function (stats) {
          if (!started) {
            started = true;
            electron.start();
          } else {
            electron.restart();
          }
        }),
        new ProvidePlugin({
          livesyncClient: client,
        }),
      ],
    }),
    // The Electron renderer thread configuration
    webpackMerge(rendererThreadConfig(env), {
      plugins: [
        new WebpackOnBuildPlugin(function (stats) {
          if (started) {
            electron.reload();
          }
        }),
      ],
    }),
  ];
};
