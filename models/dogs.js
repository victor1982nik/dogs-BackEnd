const sequelize = require("../db/dbConfig");
const { DataTypes } = require("sequelize");
const Joi = require("joi");

const Dog = sequelize.define("dog", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    //unique: true,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tail_length: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
    validate: {
      min: 1,
      isInt: true,
    },
  },
  weight: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
});

const schemaAddDog = Joi.object({
  name: Joi.string().required(),
  color: Joi.string().required(),
  tail_length: Joi.number().positive().required(),
  weight: Joi.number().positive().required(),
});

const addDogValidation = (req, res, next) => {
  const { error } = schemaAddDog.validate(req.body);
  if (error) {
    next(new ValidationError(error.details));
  }
  next();
};

module.exports = { Dog, addDogValidation };
