const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/auth.middleware");
const businessRoute = require("./business.route");

router.get("/", (req, res) => {
  res.status(200).json("welcome");
});

router.use("/business", authMiddleware, businessRoute);

module.exports = router;
