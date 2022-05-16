module.exports = (sequelize, dataTypes) => {
  const tableDefinitions = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
    },
    nome: {
      type: dataTypes.STRING,
    },
    descricao: {
      type: dataTypes.STRING,
    },
  };

  const tableConfiguration = {
    tableName: "tag",
    timestamps: true,
  };

  const tag = sequelize.define("Tag", tableDefinitions, tableConfiguration);
  return tag;
};
