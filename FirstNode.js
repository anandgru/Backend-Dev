const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
  // Set the response headers
  res.setHeader('Content-Type', 'text/plain');

  // Check the request URL and return the appropriate response
  switch (req.url) {
    case '/home':
      res.writeHead(200);
      res.end('Welcome home');
      break;
    case '/about':
      res.writeHead(200);
      res.end('Welcome to About Us page');
      break;
    case '/node':
      res.writeHead(200);
      res.end('Welcome to my Node Js project');
      break;
    default:
      res.writeHead(404);
      res.end('Page not found');
      break;
  }
});

// Define the port to listen on
const PORT = 3000;

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});