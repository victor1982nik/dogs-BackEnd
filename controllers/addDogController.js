const { Dog } = require("../models/dogs");

const addDogController = async (req, res, next) => {
  const { name, color, tail_length, weight } = req.body;

  //if (!name || !color || !tail_length || !weight) {
  //  return res.status(400).json({ error: "Invalid request data" });
  //}

  const existingDog = await Dog.findOne({ where: { name } });
  if (existingDog) {
    return res
      .status(409)
      .json({ error: "A dog with the same name already exists" });
  }

  const newDog = await Dog.create({ name, color, tail_length, weight });

  res.json(newDog);
};

module.exports = addDogController;
