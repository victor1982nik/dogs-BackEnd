const express = require("express");
const router = express.Router();
//const { ctrlWrapper } = require("../helpers/ctrlWrapper");
//const { pingController } = require("../controllers");

router.get("/", (req, res) => {
  res.send("Dogshouseservice.Version1.0.1");
});

module.exports = router;
