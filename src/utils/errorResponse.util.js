const { ERROR_CODES, DEFAULT_ERROR } = require("../constants/response");
const logger = require("./logger.util");

const errorResponse = ({ res, error, logName }) => {
  console.log(logName, { error });
  logger.error(logName, { error });

  const { name } = error;

  let response = DEFAULT_ERROR;
  const data = Object.values(ERROR_CODES).find((item) => {
    return item.errorNames.includes(name);
  });
  if (data) {
    response = data;
  }

  return res.status(response.httpCode).json({
    error: {
      code: response.code,
      description: error.message || response.description,
    },
  });
};

module.exports = errorResponse;
