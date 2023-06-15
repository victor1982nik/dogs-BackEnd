//require("dotenv").config();
const app = require("./app");
const { sequelize, databaseInitialisation } = require("./db");
const PORT = process.env.PORT;

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
