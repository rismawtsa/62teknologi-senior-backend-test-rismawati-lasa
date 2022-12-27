"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class business_categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  business_categories.init(
    {
      categories_id: DataTypes.STRING,
      business_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "business_categories",
    },
  );
  return business_categories;
};
