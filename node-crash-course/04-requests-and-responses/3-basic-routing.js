const http = require('http');
const fs = require('fs');

/// Create web server.
const server = http.createServer((req, res) => {
  /// Print request url and method to console
  console.log(req.url, req.method);

  // set header content type
  res.setHeader('Content-Type', 'text/html');

  let path = './views/';
  res.statusCode = 200;

  switch (req.url) {
    case '/':
      path += 'index.html';
      break;
    case '/about':
      // Render about.html with status code 200
      path += 'about.html';
      break;
    case '/about-me':
      // Example redirect operation
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      break;
    default:
      // Use 404 page on default case.
      res.statusCode = 404;
      path += '404.html';
      break;
  }

  if (res.statusCode === 301) {
    return;
  }
  
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.statusCode = 404;
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
