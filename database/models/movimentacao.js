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
    descricao: {
      type: dataTypes.STRING,
    },
    valor: {
      type: dataTypes.DECIMAL(10, 2),
    },
    data: {
      type: dataTypes.DATE,
    },
    id_categoria: {
      type: dataTypes.INTEGER,
    },
    id_recorrencia: {
      type: dataTypes.INTEGER,
    },
    id_usuario: {
      type: dataTypes.INTEGER,
    },
  };

  const tableConfiguration = {
    tableName: 'movimentacao',
    timestamps: false,
  };

  const movimentacao = sequelize.define('movimentacao', tableDefinitions, tableConfiguration);
  return movimentacao;
};
