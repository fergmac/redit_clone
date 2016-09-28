const resolve = require('path').resolve;

module.exports = {
  proxy: 'localhost:8181',
  baseDir: ['../.build'],
  files: resolve(process.cwd(), '.build'),
  open: false,
};
