const express = require("express");
const app = express.Router();
app.get("/", (req, res, next) => {
  res.send("<h1>Product added</h1>");
});
module.exports = app;