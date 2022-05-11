'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('categoria', 'id', {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    });
    await queryInterface.changeColumn('categoria', 'nome', {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('categoria', 'id', {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: null,
      autoIncrement: null,
    });
    await queryInterface.changeColumn('categoria', 'nome', {
      type: Sequelize.DataTypes.STRING,
      allowNull: null,
    });
  },
};
