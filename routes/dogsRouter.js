const express = require("express");
const router = express.Router();
const { ctrlWrapper } = require("../helpers/ctrlWrapper");
const { getDogsController, addDogController } = require("../controllers");

router.get("/", ctrlWrapper(getDogsController));
//router.post("/", addDodsValidation, asyncWrapper(addDogController));

module.exports = router;
