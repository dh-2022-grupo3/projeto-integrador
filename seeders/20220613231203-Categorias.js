"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("categoria", [
      {
        nome: "Sem categoria",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Saúde",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Educação",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Transporte",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Lazer",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Outros",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categoria");
  },
};
