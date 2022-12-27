"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("businesses", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      alias: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING,
      },
      image_url: {
        type: Sequelize.STRING,
      },
      url: {
        type: Sequelize.STRING,
      },
      is_closed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      rating: {
        type: Sequelize.INTEGER,
      },
      coordinates_latitude: {
        type: Sequelize.STRING,
      },
      coordinates_longitude: {
        type: Sequelize.STRING,
      },
      prices: {
        type: Sequelize.DECIMAL(10, 2),
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("businesses");
  },
};
