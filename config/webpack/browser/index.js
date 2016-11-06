module.exports = (env) => {
  if (env.prod) {
    return require('./webpack.browser.prod')(env);
  }
  return require('./webpack.browser.dev')(env);
};
