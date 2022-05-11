'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('movimentacaoTag', 'id_movimentacao', {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'movimentacao', key: 'id' },
    });
    await queryInterface.changeColumn('movimentacaoTag', 'id_tag', {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'tag', key: 'id' },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('movimentacaoTag', 'id_movimentacao', {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: null,
      references: null,
    });
    await queryInterface.changeColumn('movimentacaoTag', 'id_tag', {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: null,
      references: null,
    });
  },
};
