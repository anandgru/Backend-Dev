const http = require("http");
const express = require("express");
const app = express();
app.use((req, res, next) => {
  console.log("In the Middleware!");
  next();
});
app.use((req, res, next) => {
  console.log("In another Middleware!");
  res.send('<h1>Hi!</h1>')
});
const server = http.createServer(app);
// Define the port to listen on
server.listen(3000);
