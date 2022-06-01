"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("tag", "id", {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    });
    await queryInterface.changeColumn("tag", "nome", {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    });
    await queryInterface.changeColumn("tag", "descricao", {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn("tag", "id", {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: null,
      autoIncrement: null,
    });
    await queryInterface.changeColumn("tag", "nome", {
      type: Sequelize.DataTypes.STRING,
      allowNull: null,
    });
    await queryInterface.changeColumn("tag", "descricao", {
      type: Sequelize.DataTypes.STRING,
      allowNull: null,
    });
  },
};
