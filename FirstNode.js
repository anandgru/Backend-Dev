const http = require('http');

const PORT = 4000;
const name = 'Anand';

const server = http.createServer((req, res) => {
  console.log(`Accessed by: ${name}`);
  
  res.statusCode = 200; 
  res.setHeader('Content-Type', 'text/plain'); 
  res.end(`Hello! You accessed this server. Your name is ${name}.`); 
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
