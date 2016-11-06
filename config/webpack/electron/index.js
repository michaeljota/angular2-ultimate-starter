const hasFlag = require('has-flag');

module.exports = (env) => {
  if(hasFlag('watch') || hasFlag('-w')) {
    return require('./webpack.electron.watch')(env);
  }
  return require('./webpack.electron.build')(env);
};
