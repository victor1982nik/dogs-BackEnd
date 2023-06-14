const express = require("express");
const router = express.Router();
const { ctrlWrapper } = require("../helpers/ctrlWrapper");
const { getDogsController, addDogController } = require("../controllers");
const { addDogValidation } = require("../models/dogs");

// TO  DO validateQueryParams(dogsQueryParam),

router.get("/", ctrlWrapper(getDogsController));
router.post("/", addDogValidation, ctrlWrapper(addDogController));

module.exports = router;
