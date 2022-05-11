"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("tag", {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.DataTypes.STRING,
      },
      descricao: {
        type: Sequelize.DataTypes.STRING,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable("tag");
  },
};
