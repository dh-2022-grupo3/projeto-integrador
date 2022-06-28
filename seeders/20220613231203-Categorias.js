"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("categoria", [
      {
        id: 1,
        nome: "Sem categoria",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        nome: "Saúde",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        nome: "Educação",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        nome: "Transporte",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        nome: "Lazer",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
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
