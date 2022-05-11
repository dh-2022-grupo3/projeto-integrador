'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('movimentacao', 'id', {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    });
    await queryInterface.changeColumn('movimentacao', 'descricao', {
      type: Sequelize.DataTypes.STRING,
      allowNull: true,
    });
    await queryInterface.changeColumn('movimentacao', 'valor', {
      type: Sequelize.DataTypes.DECIMAL(10, 2),
      allowNull: false,
    });
    await queryInterface.changeColumn('movimentacao', 'data', {
      type: Sequelize.DataTypes.DATE,
      allowNull: false,
    });
    await queryInterface.changeColumn('movimentacao', 'id_categoria', {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'categoria', key: 'id' },
    });
    await queryInterface.changeColumn('movimentacao', 'id_recorrencia', {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'recorrencia', key: 'id' },
    });
    await queryInterface.changeColumn('movimentacao', 'id_usuario', {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'usuario', key: 'id' },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('movimentacao', 'id', {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: null,
      autoIncrement: null,
    });
    await queryInterface.changeColumn('movimentacao', 'descricao', {
      type: Sequelize.DataTypes.STRING,
      allowNull: null,
    });
    await queryInterface.changeColumn('movimentacao', 'valor', {
      type: Sequelize.DataTypes.DECIMAL(10, 2),
      allowNull: null,
    });
    await queryInterface.changeColumn('movimentacao', 'data', {
      type: Sequelize.DataTypes.DATE,
      allowNull: null,
    });
    await queryInterface.changeColumn('movimentacao', 'id_categoria', {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: null,
      references: null,
    });
    await queryInterface.changeColumn('movimentacao', 'id_recorrencia', {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: null,
      references: null,
    });
    await queryInterface.changeColumn('movimentacao', 'id_usuario', {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: null,
      references: null,
    });
  },
};
