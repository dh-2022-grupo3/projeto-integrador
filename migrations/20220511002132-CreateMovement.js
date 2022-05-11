'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('movimentacao', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
      },
      descricao: {
        type: Sequelize.DataTypes.STRING,
      },
      valor: {
        type: Sequelize.DataTypes.DECIMAL(10, 2),
      },
      data: {
        type: Sequelize.DataTypes.DATE,
      },
      id_categoria: {
        type: Sequelize.DataTypes.INTEGER,
      },
      id_recorrencia: {
        type: Sequelize.DataTypes.INTEGER,
      },
      id_usuario: {
        type: Sequelize.DataTypes.INTEGER,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('movimentacao');
  },
};
