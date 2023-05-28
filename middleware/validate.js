const validator = require("../helpers/validate");

const saveTraveler = (req, res, next) => {
  const validationRule = {
    name: "required|string",
    rarity: "required|string",
    job: "required|string",
    influence: "required|string",
    hp: "required|string",
    sp: "required|string",
    atk: "required|string",
    def: "required|string",
    mag: "required|string",
    mdef: "required|string",
    crit: "required|string",
    speed: "required|string"
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: "Validation failed",
        data: err,
      });
    } else {
      next();
    }
  });
};

module.exports = {
  saveTraveler,
};
