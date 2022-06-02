"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("usuario", "balanco", {
      type: Sequelize.DataTypes.DECIMAL(10, 2),
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("usuario", "balanco");
  },
};
