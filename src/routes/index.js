const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/auth.middleware");
const businessRoute = require("./business.route");
const categoryRoute = require("./category.route");

router.get("/", (req, res) => {
  res.status(200).json("welcome");
});

router.use("/business", authMiddleware, businessRoute);
router.use("/category", authMiddleware, categoryRoute);

module.exports = router;
