const nconf = module.exports = require('nconf');
// managing secrets that should not be in your source code
nconf.argv()
.env([
  'POSTGRES_DB',
  'POSTGRES_USER',
  'POSTGRES_PASSWORD',
  'APP_SECRET',
]);
