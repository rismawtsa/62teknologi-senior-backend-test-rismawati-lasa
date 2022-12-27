const { check, validationResult } = require("express-validator");
const logger = require("../../utils/logger.util");

const validators = [
  check("name").notEmpty(),
  check("alias").notEmpty(),
  check("phone").notEmpty(),
  (req, res, next) => {
    logger.info("business.validator", { body: req.body });

    const error = validationResult(req);
    if (!error.isEmpty()) {
      logger.error("business.validator", { error });
      return res
        .status(422)
        .send({ error: { code: "INVALID_REQUEST", errors: error.array() } });
    }
    next();
  },
];

module.exports = validators;
