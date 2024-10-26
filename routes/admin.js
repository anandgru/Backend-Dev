const express = require("express");
const router = express.Router();

router.get("/login", (req, res, next) => {
  res.send(
    '<form action="/admin/office" method="POST"> <input type="text" name ="username" id="username" placeholder="Enter your username" required> <button type="submit"> LogIn</button></form>'
  );
});
router.post("/office", (req, res, next) => {
  console.log(req.body.username);
  // const username = req.body.toString();//.substring(9, req.body.length - 3);
  //localStorage.setItem("username", username);
  res.redirect("/shop");
});
module.exports = router;
