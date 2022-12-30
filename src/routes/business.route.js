const express = require("express");
const router = express.Router();

const businessValidator = require("../middlewares/validators/business.validator");
const businessController = require("../controllers/business.controller");

router.post(
  "/",
  businessValidator.createBusiness,
  businessController.createBusiness,
);
router.put("/:id", businessController.updateBusiness);
router.delete("/:id", businessController.deleteBusiness);
router.get(
  "/search",
  businessValidator.searchBusiness,
  businessController.searchBusiness,
);

module.exports = router;
