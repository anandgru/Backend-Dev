const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
app.use(express.json());
const adminreq = require("./routes/admin");
const shop = require("./routes/shop");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/admin", adminreq);
app.use("/shop", shop);
app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});
app.listen(3000);
