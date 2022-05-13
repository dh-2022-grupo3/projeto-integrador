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
    tableName: "categoria",
    timestamps: false,
  };

  const categoria = sequelize.define(
    "categoria",
    tableDefinitions,
    tableConfiguration
  );
  return categoria;
};
