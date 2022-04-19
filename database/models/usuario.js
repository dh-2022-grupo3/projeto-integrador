// eslint-disable-next-line no-unused-vars
import { Sequelize, DataTypes } from 'sequelize/types';

/**
 *
 * @param {Sequelize} sequelize
 * @param {DataTypes} dataTypes
 */
module.exports = (sequelize, dataTypes) => {
  const tableDefinitions = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
    },
    nome: {
      type: dataTypes.STRING,
    },
    email: {
      type: dataTypes.STRING,
    },
    senha: {
      type: dataTypes.STRING,
    },
  };

  const tableConfiguration = {
    tableName: 'usuario',
    timestamps: true,
  };

  const usuario = sequelize.define('usuario', tableDefinitions, tableConfiguration);
  return usuario;
};
