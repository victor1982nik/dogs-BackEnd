const express = require("express");
const router = express.Router();
const { ctrlWrapper } = require("../helpers/ctrlWrapper");
const { getDogsCtrl, addDogController } = require("../controllers");
const { schemaAddDog, schemaDogQuery } = require("../models/dogs");
const {
  validateBody,
  validateQueryParams,
} = require("../middlewares/joiValidation");

router.get("/", validateQueryParams(schemaDogQuery), ctrlWrapper(getDogsCtrl));
router.post("/", validateBody(schemaAddDog), ctrlWrapper(addDogController));

module.exports = router;
