const { Business } = require("../models");
const logger = require("../utils/logger.util");

// TODO save categories, location
const createBusiness = async (req, res) => {
  try {
    logger.info("business.controller-create", { data: req.body });
    const { name, alias, phone } = req.body;

    const business = await Business.create({ name, alias, phone });

    res.status(200).json({ message: "success create business", business });
  } catch (error) {
    logger.error("business.controller-create", { error });
    res.status(500).json({ error: { code: "INTERNAL_SERVER_ERROR" } });
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
      return res.status(404).json({ error: { code: "DATA_NOT_FOUND" } });
    }

    const { name, alias, phone } = req.body;

    business.name = name;
    business.alias = alias;
    business.phone = phone;
    await business;

    res.status(200).json({ message: "success update business", business });
  } catch (error) {
    console.log({ error });
    logger.error("business.controller-update", { error });
    res.status(500).json({ error: { code: "INTERNAL_SERVER_ERROR" } });
  }
};

const deleteBusiness = async (req, res) => {
  try {
    logger.info("business.controller-delete", { data: req.body });
    const { id } = req.params;
    const business = await Business.findOne({
      where: { id },
    });

    if (!business) {
      return res.status(404).json({ error: { code: "DATA_NOT_FOUND" } });
    }

    await business.destroy();

    res.status(200).json({ message: "success delete business", business });
  } catch (error) {
    console.log({ error });
    logger.error("business.controller-update", { error });
    res.status(500).json({ error: { code: "INTERNAL_SERVER_ERROR" } });
  }
};

// TODO add query
const searchBusiness = async (req, res) => {
  try {
    logger.info("searchBusiness");
    const businesses = await Business.findAll();
    const total = businesses.length;

    res.status(200).json({ businesses, total });
  } catch (error) {
    console.log({ error });
    logger.error("business.controller-searchBusiness", { error });
    res.status(500).json({ error: { code: "INTERNAL_SERVER_ERROR" } });
  }
};

module.exports = {
  createBusiness,
  updateBusiness,
  deleteBusiness,
  searchBusiness,
};
