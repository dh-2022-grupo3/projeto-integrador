module.exports = (sequelize, dataTypes) => {
  const tableDefinitions = {
    id_usuario: {
      type: dataTypes.INTEGER,
    },
    id_fonte_renda: {
      type: dataTypes.INTEGER,
    },
  };

  const tableConfiguration = {
    tableName: "usuario_fonte_renda",
    timestamps: true,
  };

  const movimentacaoTag = sequelize.define(
    "UsuarioFonteRenda",
    tableDefinitions,
    tableConfiguration
  );
  return movimentacaoTag;
};
