module.exports = (sequelize, dataTypes) => {
  const tableDefinitions = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
    },
    nome: {
      type: dataTypes.STRING,
    },
    email: {
      type: dataTypes.STRING,
    },
    senha: {
      type: dataTypes.STRING,
    },
  };

  const tableConfiguration = {
    tableName: "usuario",
    timestamps: true,
  };

  const usuario = sequelize.define(
    "Usuario",
    tableDefinitions,
    tableConfiguration
  );
  return usuario;
};
