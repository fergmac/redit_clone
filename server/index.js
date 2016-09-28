const fs = require('fs');
const resolve = require('path').resolve;
const express = require('express');
const app = express();

const production = process.env.NODE_ENV === 'production';
const port = production ? 8080 : 8181;

app.use(express.static(resolve(process.cwd(), '.build')));

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
