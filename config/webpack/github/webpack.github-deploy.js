/*
 * @author: @AngularClass
 */

const ghpages = require('gh-pages');
const webpackMerge = require('webpack-merge'); // used to merge webpack configs


const GitHubDeploy = require('./github-deploy');
const webpackConfig = require('./../browser');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
 * Webpack Constants
 */
const GIT_REMOTE_NAME = 'origin';
const COMMIT_MESSAGE = 'Updates';
const GH_REPO_NAME = GitHubDeploy.getRepoName(GIT_REMOTE_NAME);

const { HTML_OPTIONS } = require('./../options');

module.exports = (env) => {
  const _env = Object.assign({}, HTML_OPTIONS, {
    /**
     * Prefixing the REPO name to the baseUrl for router support.
     * This also means all resource URIs (CSS/Images/JS) will have this prefix added by the browser
     * unless they are absolute (start with '/'). We will handle it via `output.publicPath`
     */
    baseUrl: '/' + GH_REPO_NAME + '/' + GitHubDeploy.safeUrl(HTML_OPTIONS.baseUrl),
  }, env);

  return webpackMerge(webpackConfig(_env), {
    output: {
      /**
       * The public path is set to the REPO name.
       *
       * `HtmlElementsPlugin` will add it to all resources url's created by it.
       * `HtmlWebpackPlugin` will add it to all webpack bundels/chunks.
       *
       * In theory publicPath shouldn't be used since the browser should automatically prefix the
       * `baseUrl` into all URLs, however this is not the case when the URL is absolute (start with /)
       *
       * It's important to prefix & suffix the repo name with a slash (/).
       * Prefixing so every resource will be absolute (otherwise it will be url.com/repoName/repoName...
       * Suffixing since chunks will not do it automatically (testes against about page)
       */
      publicPath: '/' + GH_REPO_NAME + '/' + GitHubDeploy.safeUrl(webpackConfig.output.publicPath),
    },

    plugins: [
      new HtmlWebpackPlugin(_env),
      function () {
        this.plugin('done', function (stats) {
          console.info('Starting deployment to GitHub.');

          const logger = function (msg) {
            console.info(msg);
          };

          const options = {
            logger: logger,
            remote: GIT_REMOTE_NAME,
            message: COMMIT_MESSAGE,
          };

          ghpages.publish(webpackConfig.output.path, options, function (err) {
            if (err) {
              console.error('GitHub deployment done. STATUS: ERROR.');
              throw err;
            } else {
              console.info('GitHub deployment done. STATUS: SUCCESS.');
            }
          });
        });
      },
    ],
  });

}
