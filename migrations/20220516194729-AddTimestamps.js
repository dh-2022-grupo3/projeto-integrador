"use strict";

const tables = [
  "categoria",
  "movimentacao",
  "movimentacaotag",
  "recorrencia",
  "tag",
  "usuario",
];

module.exports = {
  async up(queryInterface, Sequelize) {
    for (const table of tables) {
      await queryInterface.addColumn(table, "createdAt", {
        type: Sequelize.DataTypes.DATE,
      });
      await queryInterface.addColumn(table, "updatedAt", {
        type: Sequelize.DataTypes.DATE,
      });
    }
  },

  async down(queryInterface, Sequelize) {
    for (const table of tables) {
      await queryInterface.removeColumn(table, "createdAt");
      await queryInterface.removeColumn(table, "updatedAt");
    }
  },
};
