"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("movimentacao", [
      {
        descricao: "Uber",
        valor: 40.5,
        data: new Date(),
        id_categoria: 4,
        id_usuario: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        descricao: "Convênio",
        valor: 600.8,
        data: new Date(),
        id_categoria: 2,
        id_usuario: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        descricao: "Faculdade",
        valor: 1800.0,
        data: new Date(),
        id_categoria: 3,
        id_usuario: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        descricao: "Show",
        valor: 120.0,
        data: new Date(),
        id_categoria: 5,
        id_usuario: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        descricao: "Ifood",
        valor: 85.0,
        data: new Date(),
        id_categoria: 6,
        id_usuario: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("movimentacao", { id_usuario: 1 });
  },
};
