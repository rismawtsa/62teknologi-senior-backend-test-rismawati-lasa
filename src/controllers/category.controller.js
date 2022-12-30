const { Category } = require("../models");
const logger = require("../utils/logger.util");
const errorResponse = require("../utils/errorResponse.util");

const createCategory = async (req, res) => {
  try {
    logger.info("business.controller-createCategory", { data: req.body });

    const { title, alias } = req.body;
    const data = await Category.create({ title, alias });

    res.status(200).json({ data: { id: data.id } });
  } catch (error) {
    return errorResponse({
      logName: "business.controller-createBusiness",
      res,
      error,
    });
  }
};

const getCategories = async (req, res) => {
  try {
    logger.info("business.controller-getCategories");
    const categories = await Category.findAll({
      attributes: ["id", "alias", "title"],
    });

    res.status(200).json({ data: categories });
  } catch (error) {
    return errorResponse({
      logName: "business.controller-getCategories",
      res,
      error,
    });
  }
};

module.exports = {
  createCategory,
  getCategories,
};
