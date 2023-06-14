const Dog = require("../models/dogs");

const getDogsController = async (req, res, next) => {
  const { pageNumber, limit, attribute, order } = req.query;
  const filters = {};

  if (pageNumber && limit) {
    filters.offset = (pageNumber - 1) * limit;
    filters.limit = Number(limit);
  }
  if (attribute && order) {
    filters.order = [[attribute, order]];
  }

  const dogs = await Dog.findAll(filters);
  res.json(dogs);
};

module.exports = getDogsController;
