'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('usuario', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.DataTypes.STRING,
      },
      email: {
        type: Sequelize.DataTypes.STRING,
      },
      senha: {
        type: Sequelize.DataTypes.STRING,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
