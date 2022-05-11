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
    tableName: "movimentacao_tag",
    timestamps: false,
  };

  const movimentacaoTag = sequelize.define(
    "movimentacao_tag",
    tableDefinitions,
    tableConfiguration
  );
  return movimentacaoTag;
};
