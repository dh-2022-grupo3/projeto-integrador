'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('recorrencia', 'id', {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    });
    await queryInterface.changeColumn('recorrencia', 'data_inicial', {
      type: Sequelize.DataTypes.DATE,
      allowNull: false,
    });
    await queryInterface.changeColumn('recorrencia', 'data_final', {
      type: Sequelize.DataTypes.DATE,
      allowNull: true,
    });
    await queryInterface.changeColumn('recorrencia', 'recorrencia', {
      type: Sequelize.DataTypes.ENUM('dia', 'semana', 'mes'),
      allowNull: true,
    });
    await queryInterface.changeColumn('recorrencia', 'periodicidade', {
      type: Sequelize.DataTypes.TINYINT,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('recorrencia', 'id', {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: null,
      autoIncrement: null,
    });
    await queryInterface.changeColumn('recorrencia', 'data_inicial', {
      type: Sequelize.DataTypes.DATE,
      allowNull: null,
    });
    await queryInterface.changeColumn('recorrencia', 'data_final', {
      type: Sequelize.DataTypes.DATE,
      allowNull: null,
    });
    await queryInterface.changeColumn('recorrencia', 'recorrencia', {
      type: Sequelize.DataTypes.ENUM('dia', 'semana', 'mes'),
      allowNull: null,
    });
    await queryInterface.changeColumn('recorrencia', 'periodicidade', {
      type: Sequelize.DataTypes.TINYINT,
      allowNull: null,
    });
  },
};
