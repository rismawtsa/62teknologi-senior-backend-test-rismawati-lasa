"use strict";
const { Sequelize, Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Business extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ BusinessCategory }) {
      this.hasMany(BusinessCategory, {
        as: "categories",
        foreignKey: "business_id",
      });
    }
  }
  Business.init(
    {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      alias: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image_url: {
        type: DataTypes.STRING,
      },
      url: {
        type: DataTypes.STRING,
      },
      is_closed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      rating: {
        type: DataTypes.INTEGER,
      },
      coordinates_latitude: {
        type: DataTypes.STRING,
      },
      coordinates_longitude: {
        type: DataTypes.STRING,
      },
      prices: {
        type: DataTypes.DECIMAL(10, 2),
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
      modelName: "Business",
      tableName: "businesses",
    },
  );
  return Business;
};
