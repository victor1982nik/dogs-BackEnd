const express = require("express");
const router = express.Router();
const { ctrlWrapper } = require("../helpers/ctrlWrapper");

router.get("/", ctrlWrapper(getDogsController));
//router.post("/", addContactValidation, asyncWrapper(addContactController));

module.exports = router;
