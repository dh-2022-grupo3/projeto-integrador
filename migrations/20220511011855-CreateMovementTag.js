'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('movimentacaoTag', {
      id_movimentacao: {
        type: Sequelize.DataTypes.INTEGER,
      },
      id_tag: {
        type: Sequelize.DataTypes.INTEGER,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('movimentacaoTag');
  },
};
