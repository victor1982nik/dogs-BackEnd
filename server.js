//require("dotenv").config();
const app = require("./app");
const { sequelize, databaseInitialisation } = require("./db");
const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    await databaseInitialisation();
    app.listen(PORT, () => {
      console.log(`server starting on ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};
start();
/*
Dog.sync({ alter: true })
  .then(() => {
    return Dog.findAll({ order: [["weight", "DESC"]] });
  })
  .then((data) => console.log(data))
  .catch((e) => console.log(e));
*/
// sorting Dog.findAll({ order: [["weight", "DESC"]] });
// pagination  Dog.findAll({ offset: 0, limit: 10 });

// Dog.sync({ alter: true })
//   .then(() => {
//     return Dog.bulkCreate(
//       [
//         { name: "Neo", color: "red&amber", tail_length: 22, weight: 32 },
//         { name: "Jessy", color: "black&white", tail_length: 7, weight: 14 },
//       ],
//       { validate: true }
//     );
//   })
//   .then((data) => console.log("Dog added", data))
//   .catch((e) => console.log(e));
// sequelize
//   .authenticate()
//   .then(() => console.log("Connected"))
//   .catch((e) => console.log(e));
