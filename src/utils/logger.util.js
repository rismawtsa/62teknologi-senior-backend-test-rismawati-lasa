const winston = require("winston");

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const level = () => {
  const env = process.env.NODE_ENV || "development";
  const isDevelopment = env === "development";
  return isDevelopment ? "debug" : "warn";
};

const transports = [
  new winston.transports.File({
    filename: `logs/log_${new Date()
      .toLocaleDateString()
      .replaceAll("/", "")}.log`,
  }),
];

const logConfiguration = {
  level: level(),
  levels,
  transports,
};

const logger = winston.createLogger(logConfiguration);

if (process.env.NODE_ENV !== "production") {
  logger.add(new winston.transports.Console());
}

module.exports = logger;
