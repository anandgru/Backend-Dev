const express = require("express");
const router = express.Router();

router.get("/home", (req, res, next) => {
  res.send(
    '<form action="/office" method="POST"><input type="text" name="title"> <button type="submit"> Add Product</button></form>'
  );
});
router.post("/office", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});
module.exports = router;
