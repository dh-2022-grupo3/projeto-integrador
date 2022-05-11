'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('categoria', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
      },
      nome: {
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
