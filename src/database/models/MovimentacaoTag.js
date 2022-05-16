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
    timestamps: true,
  };

  const movimentacaoTag = sequelize.define(
    "MovimentacaoTag",
    tableDefinitions,
    tableConfiguration
  );
  return movimentacaoTag;
};
