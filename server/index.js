const fs = require('fs');
const resolve = require('path').resolve;
const express = require('express');
const socket = require('./socket')(3030);
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');


const production = process.env.NODE_ENV === 'production';
const port = production ? 8080 : 8181;
const middleware = require('./middleware')(app);

require('./database.js'); // loads database into this file

const router = express.Router({
  mergeParams: true, // all params inside of an object
});

app.use(bodyParser.json());

app.use(express.static(resolve(process.cwd(), '.build')));

app.use(cors());

require('./api-routes/albums.js')(router);
require('./api-routes/auths.js')(router);
app.use(router);


app.get('*', (req, res) => {
  fs.readFile(resolve(process.cwd(), '.build/index.html'), (err, file) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(file.toString());
    }
  });
});

app.listen(port, (err) => {
  /* eslint no-console: ["error", { allow: ["error", "info"] }] */
  if (err) {
    console.error('There was an error starting Express: ', err);
  } else {
    console.info(`Express was started! Listening on port: ${port}`);
  }
});
