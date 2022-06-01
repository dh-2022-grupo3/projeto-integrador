module.exports = (sequelize, dataTypes) => {
  const tableDefinitions = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
    },
    nome: {
      type: dataTypes.STRING,
    },
  };

  const tableConfiguration = {
    tableName: "fonte_renda",
    timestamps: true,
  };

  const fonteRenda = sequelize.define(
    "FonteRenda",
    tableDefinitions,
    tableConfiguration
  );
  return fonteRenda;
};
