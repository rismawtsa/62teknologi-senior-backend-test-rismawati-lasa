const { check, oneOf, validationResult } = require("express-validator");
const logger = require("../../utils/logger.util");

const createBusiness = [
  check("name").notEmpty(),
  check("alias").notEmpty(),
  check("phone").notEmpty(),
  (req, res, next) => {
    logger.info("business.validator-createBusiness", { body: req.body });

    const error = validationResult(req);
    if (!error.isEmpty()) {
      logger.error("business.validator-createBusiness", { error });
      return res.status(422).send({
        error: { code: "INVALID_REQUEST", description: error.array() },
      });
    }
    next();
  },
];

const searchBusiness = [
  oneOf([
    check("location").notEmpty(),
    check("latitude").notEmpty(),
    check("longitude").notEmpty(),
  ]),
  (req, res, next) => {
    logger.info("business.validator-searchBusiness", { body: req.query });

    const error = validationResult(req);
    if (!error.isEmpty()) {
      logger.error("business.validator-searchBusiness", { error });
      return res.status(422).send({
        error: { code: "INVALID_REQUEST", description: error.array() },
      });
    }
    next();
  },
];

module.exports = {
  createBusiness,
  searchBusiness,
};
