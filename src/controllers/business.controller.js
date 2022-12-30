const { Business, BusinessCategory, Category } = require("../models");
const logger = require("../utils/logger.util");
const errorResponse = require("../utils/errorResponse.util");
const { ValidationError } = require("../utils/extendingError.util");

// TODO save location
const createBusiness = async (req, res) => {
  try {
    logger.info("business.controller-createBusiness", { data: req.body });
    const { name, alias, phone, categories } = req.body;

    const business = await Business.create({ name, alias, phone });

    let categoryData = categories.map((item) => ({
      category_id: item,
      business_id: business.id,
    }));
    await BusinessCategory.bulkCreate(categoryData);

    res.status(200).json({ data: { id: business.id } });
  } catch (error) {
    return errorResponse({
      res,
      error,
      logName: "business.controller-createBusiness",
    });
  }
};

const getBusinessById = async (req, res) => {
  try {
    logger.info("business.controller-getBusinessById", { data: req.query });
    const { id } = req.params;
    const business = await Business.findOne(
      { where: { id } },
      { model: BusinessCategory, as: "categories" },
    );

    res.status(200).json({ business });
  } catch (error) {
    return errorResponse({
      res,
      error,
      logName: "business.controller-getBusinessById",
    });
  }
};

const updateBusiness = async (req, res) => {
  try {
    logger.info("business.controller-update", { data: req.body });
    const { id } = req.params;
    const business = await Business.findOne({
      where: { id },
    });

    if (!business) {
      throw new ValidationError("Data not found");
    }

    const { name, alias, phone } = req.body;

    business.name = name;
    business.alias = alias;
    business.phone = phone;
    await business;

    res.status(200).json({ business });
  } catch (error) {
    return errorResponse({
      res,
      error,
      logName: "business.controller-updateBusiness",
    });
  }
};

const deleteBusiness = async (req, res) => {
  try {
    logger.info("business.controller-deleteBusiness", { data: req.body });
    const { id } = req.params;
    const business = await Business.findOne({
      where: { id },
    });

    if (!business) {
      throw new ValidationError("Data not found");
    }

    await business.destroy();

    res.status(200).json({ business });
  } catch (error) {
    return errorResponse({
      res,
      error,
      logName: "business.controller-deleteBusiness",
    });
  }
};

// TODO add query
const searchBusiness = async (req, res) => {
  try {
    logger.info("searchBusiness");
    const businesses = await Business.findAll({
      include: {
        model: BusinessCategory,
        as: "categories",
        include: { model: Category },
      },
    });
    const total = businesses.length;

    // console.log(businesses.categories);
    const data = businesses.map((item) => {
      return {
        id: item.id,
        alias: item.alias,
        name: item.name,
        phone: item.phone,
        image_url: item.image_url,
        url: item.url,
        is_closed: item.is_closed,
        rating: item.rating,
        prices: item.prices,
        categories: item.categories.map((ctg) => {
          return {
            alias: ctg?.Category?.alias,
            title: ctg?.Category?.title,
          };
        }),
      };
    });

    res.status(200).json({ data, total });
  } catch (error) {
    return errorResponse({
      res,
      error,
      logName: "business.controller-searchBusiness",
    });
  }
};
module.exports = {
  createBusiness,
  getBusinessById,
  updateBusiness,
  deleteBusiness,
  searchBusiness,
};
