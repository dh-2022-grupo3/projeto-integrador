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
      type: dataTypes.ENUM("dia", "semana", "mes"),
    },
    periodicidade: {
      type: dataTypes.TINYINT,
    },
  };

  const tableConfiguration = {
    tableName: "recorrencia",
    timestamps: true,
  };

  const recorrencia = sequelize.define(
    "Recorrencia",
    tableDefinitions,
    tableConfiguration
  );
  return recorrencia;
};
