"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("categories", [
      {
        alias: "delis",
        title: "Delis",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        alias: "sandwiches",
        title: "Sandwiches",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        alias: "soup",
        title: "Soup",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        alias: "bakeries",
        title: "Bakeries",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
