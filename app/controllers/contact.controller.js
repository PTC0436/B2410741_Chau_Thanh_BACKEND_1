module.exports.create = (req, res) => {
  res.send({ massage: "create handler" });
};

module.exports.findAll = (req, res) => {
  res.send({ massage: "findAll handler" });
};

module.exports.findOne = (req, res) => {
  res.send({ massage: "findOne handler" });
};

module.exports.update = (req, res) => {
  res.send({ massage: "update handler" });
};

module.exports.delete = (req, res) => {
  res.send({ massage: "delete handler" });
};

module.exports.deleteAll = (req, res) => {
  res.send({ massage: "deleteAll handler" });
};

module.exports.findAllFavorite = (req, res) => {
  res.send({ massage: "findAllFavorite handler" });
};
