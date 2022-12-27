const express = require("express");
const morganMiddleware = require("./middlewares/morgan.middleware");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morganMiddleware);

app.use(routes);

module.exports = app;
