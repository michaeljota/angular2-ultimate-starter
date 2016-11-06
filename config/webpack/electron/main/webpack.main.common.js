/*
 * @author: @michaeljota
 */

const appRoot = require('app-root-path');

const ElectronPackagePlugin = require('electron-package-plugin');

module.exports = (dev) => {

  return {
    /*
     * The entry point for the bundle
     * Our Electron app
     *
     * See: http://webpack.github.io/docs/configuration.html#entry
     */
    entry: {
      'main': './src/main.desktop.ts',
    },

    /**
     * The plataform target where the aplication is going to run in.
     * It support target electron-renderer, but is not documented.
     *
     * See: https://webpack.github.io/docs/configuration.html#target
     */
    target: 'electron',

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

      /**
       * Specifies the name of each output file on disk.
       * IMPORTANT: You must not specify an absolute path here!
       *
       * See: http://webpack.github.io/docs/configuration.html#output-filename
       */
      filename: '[name].js',
    },

    /*
     * Options affecting the resolving of modules.
     *
     * See: http://webpack.github.io/docs/configuration.html#resolve
     */
    resolve: {
      /*
       * An array of extensions that should be used to resolve modules.
       *
       * See: http://webpack.github.io/docs/configuration.html#resolve-extensions
       */
      extensions: ['.ts', '.js', '.json'],
    },

    /*
     * Options affecting the normal modules.
     *
     * See: http://webpack.github.io/docs/configuration.html#module
     */
    module: {
      rules: [
        /*
         * Typescript loader support for .ts.
         *
         * See: https://github.com/s-panferov/awesome-typescript-loader
         */
        {
          test: /\.ts$/,
          loader: 'awesome-typescript-loader',
        },
        /*
         * Json loader support for *.json files.
         *
         * See: https://github.com/webpack/json-loader
         */
        {
          test: /\.json$/,
          loader: 'json-loader',
        },
      ],
    },

    /*
     * Add additional plugins to the compiler.
     *
     * See: http://webpack.github.io/docs/configuration.html#plugins
     */
    plugins: [

      /*
       * Plugin: ElectronPackagePlugin
       * Description: Generate the Electron package file from the project package.
       *
       * See: https://www.npmjs.com/package/electron-package-plugin
       */
      new ElectronPackagePlugin(),
    ],

    /*
     * Include polyfills or mocks for various node stuff
     * Description: Node configuration
     *
     * See: https://webpack.github.io/docs/configuration.html#node
     */
    node: {
      __dirname: false,
    },
  }
}
