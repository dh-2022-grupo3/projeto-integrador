"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("fonte_renda", {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("fonte_renda");
  },
};
