const logger = require("./src/utils/logger.util");
const app = require("./src/app");
const port = 3000;

app.listen(port, () => {
  logger.info("Listening on port " + port);
});
