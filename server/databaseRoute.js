/* eslint-disable */ 
const pg = require('pg');
// instantiate a new client
// the client will read connection information from
// the same environment variables used by postgres cli tools
const client = new pg.Client({
  user: 'fergusmacconnell',
  password: 'postgres',
  database: 'redit1',
  host: 'localhost',
  port: '5432',
});
// connect to our database
client.connect(function (err) {
  if (err) throw err;
  // execute a query on our database
  client.query('SELECT * FROM artists', function (err, result) {
    if (err) throw err;
    // just print the result to the console
    console.log(JSON.stringify(result.rows));
    // JSON.STRINGify gets rid of anonymous object
    // disconnect the client
    client.end(function (err) {
      if (err) throw err;
    });
  });
});
