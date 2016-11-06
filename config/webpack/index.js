/*
 * @author: Michael De Abreu
 */

/**
 * Main webpack config file.
 *
 * You can add here more configurations and set the target in the script.
 */

module.exports = function(env) {
  env = env || {};
  switch (env.target) {
    case 'electron':
      return require('./electron')(env);
    case 'github':
      return require('./github')(env);
    case 'web':
    default:
      return require('./browser')(env);
  }
}
