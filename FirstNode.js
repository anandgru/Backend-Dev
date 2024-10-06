const http = require("http");
const cu = require("./cleanUp");
const server=http.createServer(cu);
// Define the port to listen on
const PORT = 3000;

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
