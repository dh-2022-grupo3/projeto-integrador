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
    descricao: {
      type: dataTypes.STRING,
    },
  };

  const tableConfiguration = {
    tableName: 'tag',
    timestamps: false,
  };

  const tag = sequelize.define('tag', tableDefinitions, tableConfiguration);
  return tag;
};
