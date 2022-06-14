"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("usuario", [
      {
        nome: "Teste",
        sobrenome: "Testando",
        email: "teste@teste.com",
        senha: "$2a$08$gegY0ClMATve5pjCRq7CSOBDBdTpkmhrDbP0BhIAEHgmZ9XAeZCPK", // 123456
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("usuario", { email: "teste@teste.com" });
  },
};
