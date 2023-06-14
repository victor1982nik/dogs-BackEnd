const pingController = (req, res, next) => {
  res.send("Dogshouseservice.Version1.0.1");
};

module.exports = pingController;
