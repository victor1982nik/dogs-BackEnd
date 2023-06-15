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

const schemaDogQuery = Joi.object({
  limit: Joi.number()
    .min(1)
    .max(20)
    .messages({
      "number.min": `"limit" must be equal or greater than {#limit}. You provided: {limit}`,
    })
    .optional(),
  pageNumber: Joi.number()
    .min(1)
    .messages({
      "number.min": `"page" must be equal or greater than {#limit}. You provided: {page}`,
    })
    .optional(),
  attribute: Joi.string().optional(),
  order: Joi.string().optional(),
});

module.exports = { Dog, schemaAddDog, schemaDogQuery };
