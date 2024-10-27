const express = require("express");
const app = express();
const login = require("./routes/login");
const send_msg = require("./routes/send-msg");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/login", login);
app.use("/send-msg", send_msg);

app.use((req, res) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
