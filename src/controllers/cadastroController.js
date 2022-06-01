const bcrypt = require("bcryptjs");
const { Usuario } = require("../database/models");

const cadastroController = {
  index: (req, res) => {
    res.render("cadastro", {
      styles: ["cadastro"],
    });
  },

  salvarForm: async (req, res) => {
    const { nome, email, senha } = req.body;

    const usuarioJaExiste = await Usuario.findOne({ where: { email } });
    if (usuarioJaExiste != null) {
      return res.status(400).json({ message: "Usuário já existe" });
    }

    const senhaCryp = bcrypt.hashSync(senha, 8);

    await Usuario.create({ nome, email, senha: senhaCryp });

    return res.redirect("/login");
  },
};

module.exports = cadastroController;
