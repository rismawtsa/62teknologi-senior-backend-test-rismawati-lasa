const { check, validationResult } = require("express-validator");
const logger = require("../../utils/logger.util");

const validators = [
  check("title").notEmpty(),
  check("alias").notEmpty(),
  (req, res, next) => {
    logger.info("category.validator", { body: req.body });

    const error = validationResult(req);
    if (!error.isEmpty()) {
      logger.error("category.validator", { error });
      return res.status(422).send({
        error: { code: "INVALID_REQUEST", description: error.array() },
      });
    }
    next();
  },
];

module.exports = validators;
