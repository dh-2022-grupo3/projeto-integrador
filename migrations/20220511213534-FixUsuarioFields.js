'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('usuario', 'id', {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    });
    await queryInterface.changeColumn('usuario', 'nome', {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    });
    await queryInterface.changeColumn('usuario', 'email', {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    });
    await queryInterface.changeColumn('usuario', 'senha', {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('usuario', 'id', {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: null,
      autoIncrement: null,
    });
    await queryInterface.changeColumn('usuario', 'nome', {
      type: Sequelize.DataTypes.STRING,
      allowNull: null,
    });
    await queryInterface.changeColumn('usuario', 'email', {
      type: Sequelize.DataTypes.STRING,
      allowNull: null,
    });
    await queryInterface.changeColumn('usuario', 'senha', {
      type: Sequelize.DataTypes.STRING,
      allowNull: null,
    });
  },
};
