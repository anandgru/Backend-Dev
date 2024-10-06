const http = require("http");
const fs = require("fs");
var fileData;

// Create the server
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    fs.readFile("msg.txt", "utf8", (err, data) => {
      if (err) {
        console.log("Error in readiing file: ", err);
        return;
      }
      fileData = data;
    });
    res.write("<html><head><title>Your Msg</title></head>");
    res.write("<body>");
    res.write(`<pre>${fileData}</pre>`);
    res.write(
      '<form action="/message" method="POST"><input type="text" name="msg"><button type="submit">Send</button></body></html>'
    );
    return res.end();
  }
  // Set the response headers
  res.setHeader("Content-Type", "text/html");
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("msg.txt", message);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  // Check the request URL and return the appropriate response
  switch (req.url) {
    case "/home":
      res.writeHead(200);
      res.end("Welcome home");
      break;
    case "/about":
      res.writeHead(200);
      res.end("Welcome to About Us page");
      break;
    case "/node":
      res.writeHead(200);
      res.end("Welcome to my Node Js project");
      break;
    default:
      res.writeHead(404);
      console.log(url);
      res.end("Page not found");
      break;
  }
});

// Define the port to listen on
const PORT = 3000;

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
