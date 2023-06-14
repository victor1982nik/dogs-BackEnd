const sequelize = require("../db/dbConfig");
const { DataTypes } = require("sequelize");

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

module.exports = Dog;
