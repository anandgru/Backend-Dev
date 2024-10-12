const express = require("express");
const app = express();
const adminreq = require("./routes/admin");
const shop = require("./routes/shop");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/admin", adminreq);
app.use("/shop", shop);
app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found re</h1>");
});
app.listen(3000);
