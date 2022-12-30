"use strict";
const { Sequelize, Model, Deferrable } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class BusinessCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Business, Category }) {
      this.belongsTo(Business, {
        foreignKey: "business_id",
        as: "business",
      });

      this.belongsTo(Category, {
        foreignKey: "category_id",
      });
    }
  }
  BusinessCategory.init(
    {
      category_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      business_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: "businesses",
          key: "id",
          deferrable: Deferrable.INITIALLY_IMMEDIATE,
        },
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "BusinessCategory",
      tableName: "business_categories",
    },
  );
  return BusinessCategory;
};
