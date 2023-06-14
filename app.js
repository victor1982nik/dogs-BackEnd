const express = require("express");
const cors = require("cors");
const dogsRouter = require("./routes/dogsRouter");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/dogs", dogsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Illegal path" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
