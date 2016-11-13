/*
 * @author: @michaeljota
 */

const webpack = require('webpack');
const appRoot = require('app-root-path');

/*
 * Webpack Plugins
 */
const { DefinePlugin, ProvidePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { HTML_OPTIONS } = require('./../../options');

/*
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = (env) => {
  const _env = Object.assign({}, HTML_OPTIONS, env, {
    baseUrl: './',
  });
  return {

    /**
     * The plataform target where the aplication is going to run in.
     * It support target electron-renderer, but is not documented.
     *
     * See: https://webpack.github.io/docs/configuration.html#target
     */

    target: 'electron-renderer',

    /**
     * Options affecting the output of the compilation.
     *
     * See: http://webpack.github.io/docs/configuration.html#output
     */
    output: {

      /**
       * The output directory as absolute path (required).
       *
       * See: http://webpack.github.io/docs/configuration.html#output-path
       */
      path: appRoot.resolve('dist'),
    },

    /**
     * Add additional plugins to the compiler.
     *
     * See: http://webpack.github.io/docs/configuration.html#plugins
     */
    plugins: [

      /**
       * Automatically loaded modules. Module (value) is loaded when the identifier (key) is used as
       * free variable in a module. The identifier is filled with the exports of the loaded module.
       *
       * See: http://webpack.github.io/docs/list-of-plugins.html#provideplugin
       */
      new ProvidePlugin({
        /*
         * Require the electron module and expose it as a global variable.
         */
        electron: 'electron',
      }),

      /**
       * Plugin: DefinePlugin
       * Description: Define free variables.
       * Useful for having development builds with debug logging or adding global constants.
       *
       * Environment helpers
       *
       * See: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
       */
      // NOTE: when adding more properties make sure you include them in custom-typings.d.ts
      new DefinePlugin({
        'RENDERER': true,
        'process.env': {
          'RENDERER': true,
        },
      }),

      /*
       * Plugin: HtmlWebpackPlugin
       * Description: Simplifies creation of HTML files to serve your webpack bundles.
       * This is especially useful for webpack bundles that include a hash in the filename
       * which changes every compilation.
       *
       * See: https://github.com/ampedandwired/html-webpack-plugin
       */
      new HtmlWebpackPlugin(_env),
    ],

    /**
     * Include polyfills or mocks for various node stuff
     * Description: Node configuration
     *
     * See: https://webpack.github.io/docs/configuration.html#node
     */
    node: {
      global: true,
      crypto: 'empty',
      process: true,
      module: false,
      clearImmediate: false,
      setImmediate: false,
    },
  };
};
