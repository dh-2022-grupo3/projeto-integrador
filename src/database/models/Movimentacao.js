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
    tableName: "movimentacao",
    timestamps: true,
  };

  const movimentacao = sequelize.define(
    "Movimentacao",
    tableDefinitions,
    tableConfiguration
  );
  return movimentacao;
};
