'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('recorrencia', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
      },
      data_inicial: {
        type: Sequelize.DataTypes.DATE,
      },
      data_final: {
        type: Sequelize.DataTypes.DATE,
      },
      recorrencia: {
        type: Sequelize.DataTypes.ENUM('dia', 'semana', 'mes'),
      },
      periodicidade: {
        type: Sequelize.DataTypes.TINYINT,
      },
    });
  },

  async down(queryInterface, Sequelize) {

  },
};
