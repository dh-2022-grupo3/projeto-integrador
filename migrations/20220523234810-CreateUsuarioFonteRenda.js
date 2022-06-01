"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("usuario_fonte_renda", {
      id_usuario: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: { model: "usuario", key: "id" },
      },
      id_fonte_renda: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: { model: "fonte_renda", key: "id" },
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("usuario_fonte_renda");
  },
};
