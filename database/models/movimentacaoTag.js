// eslint-disable-next-line no-unused-vars
import { Sequelize, DataTypes } from 'sequelize/types';

/**
 *
 * @param {Sequelize} sequelize
 * @param {DataTypes} dataTypes
 */
module.exports = (sequelize, dataTypes) => {
  const tableDefinitions = {
    id_movimentacao: {
      type: dataTypes.INTEGER,
    },
    id_tag: {
      type: dataTypes.INTEGER,
    },
  };

  const tableConfiguration = {
    tableName: 'movimentacao_tag',
    timestamps: false,
  };

  const movimentacaoTag = sequelize.define('movimentacao_tag', tableDefinitions, tableConfiguration);
  return movimentacaoTag;
};
