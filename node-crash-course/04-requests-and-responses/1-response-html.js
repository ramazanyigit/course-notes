const http = require('http');

/// Create web server.
const server = http.createServer((req, res) => {
  /// Print request url and method to console
  console.log(req.url, req.method);

  // set header content type
  res.setHeader('Content-Type', 'text/html');

  // set content
  res.write('<p>hello, client from node.js!</p>');
  res.write('<p>hello again, client from node.js!</p>');
  // end response to send browser
  res.end();
});

// Listen server
server.listen(3000, 'localhost', () => {
  console.log('Server is listening for requests on port 3000!');
});
