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
    data_inicial: {
      type: dataTypes.DATE,
    },
    data_final: {
      type: dataTypes.DATE,
    },
    recorrencia: {
      type: dataTypes.ENUM('dia', 'semana', 'mes'),
    },
    periodicidade: {
      type: dataTypes.TINYINT,
    },
  };

  const tableConfiguration = {
    tableName: 'recorrencia',
    timestamps: true,
  };

  const recorrencia = sequelize.define('recorrencia', tableDefinitions, tableConfiguration);
  return recorrencia;
};
