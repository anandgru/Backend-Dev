const express = require("express");
const app = express();
const adminreq = require("./routes/admin");
const shop = require("./routes/shop");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(adminreq);
app.use(shop);

app.listen(3000);
