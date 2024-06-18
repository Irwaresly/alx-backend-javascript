const http = require('http');

const host = '127.0.0.1';
const port = 1245;

/*
  Create an HTTP server that listens for incoming requests.
  The server uses a callback function to handle requests and responses.
  - req: the request object representing the incoming request
  - res: the response object used to send a response back to the client
*/
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(port, host, () => {});

module.exports = app;
