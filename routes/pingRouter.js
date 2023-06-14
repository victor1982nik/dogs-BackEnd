const express = require("express");
const router = express.Router();
const { ctrlWrapper } = require("../helpers/ctrlWrapper");
const { pingController } = require("../controllers");

router.get("/", ctrlWrapper(pingController));

module.exports = router;
