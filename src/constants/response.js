module.exports = {
  DEFAULT_ERROR: {
    httpCode: 500,
    code: "INTERNAL_ERROR",
    description: "Something went wrong internally, please try again later.",
  },
  ERROR_CODES: {
    INVALID_REQUEST: {
      httpCode: 400,
      code: "INVALID_REQUEST",
      description: "Invalid request",
      errorNames: [
        "SequelizeUniqueConstraintError",
        "SequelizeValidationError",
        "ValidationError",
      ],
    },
  },
};
