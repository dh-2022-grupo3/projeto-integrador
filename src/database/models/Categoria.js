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
    timestamps: true,
  };

  const categoria = sequelize.define(
    "Categoria",
    tableDefinitions,
    tableConfiguration
  );
  return categoria;
};
