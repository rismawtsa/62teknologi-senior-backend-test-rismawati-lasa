const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/category.controller");
const categoryValidator = require("../middlewares/validators/category.validator");

router.post("/", categoryValidator, categoryController.createCategory);
router.get("/", categoryController.getCategories);

module.exports = router;
