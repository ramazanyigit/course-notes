const http = require('http');

/// Create web server.
const server = http.createServer((req, res) => {
  console.log('request made');
});

// Listen server
server.listen(3000, 'localhost', () => {
  console.log('Server is listening for requests on port 3000!');
});
