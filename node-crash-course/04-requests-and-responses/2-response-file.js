const http = require('http');
const fs = require('fs');

/// Create web server.
const server = http.createServer((req, res) => {
  /// Print request url and method to console
  console.log(req.url, req.method);

  // set header content type
  res.setHeader('Content-Type', 'text/html');

  // read file and send as response... 
  fs.readFile('./views/index.html', (err, data) => {
    if (err) {
      console.log(err);
      res.end();
      return;
    }
    
    res.end(data);
  });
});

// Listen server
server.listen(3000, 'localhost', () => {
  console.log('Server is listening for requests on port 3000!');
});
