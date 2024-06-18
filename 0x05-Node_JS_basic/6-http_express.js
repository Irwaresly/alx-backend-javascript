const express = require('express');
const app = express();
const port = 1245;

/*
  Create a small HTTP server using Express.
  Define a route for the root endpoint ('/').
  When a GET request is made to '/', the server responds with 'Hello Holberton School!'.
*/
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, () => {});

module.exports = app;
