const Dogs = require("../models/dogs");
const initialData = [
  { name: "Neo", color: "red&amber", tail_length: 22, weight: 32 },
  { name: "Jessy", color: "black&white", tail_length: 7, weight: 14 },
];

async function databaseInitialisation() {
  try {
    await Dogs.sync({ alter: true });
    await Dogs.bulkCreate(initialData);
  } catch (error) {
    console.error("Error initialization:", error);
  }
}

module.exports = databaseInitialisation;
