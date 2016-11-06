module.exports = (env) => {
  if (env.prod) {
    return require('./webpack.main.prod')(env);
  }
  return require('./webpack.main.dev')(env);
}
