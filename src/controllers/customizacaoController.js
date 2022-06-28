const { Usuario } = require("../database/models");

const customizacaoController = {
  index: (req, res) => {
    res.render("customizacao", {
      styles: ["customizacao"],
      usuario: req.session.usuario,
      title: "Customização",
      name: req.session.usuario.nome,
    });
  },

  salvarCusotmizacao: async (req, res) => {
    const { nome, sobrenome } = req.body;

    await Usuario.update(
      { nome, sobrenome },
      { where: { id: req.session.usuario.id } }
    );

    req.session.usuario.nome = nome;
    req.session.usuario.sobrenome = sobrenome;

    return res.redirect("/customizacao");
  },
};

module.exports = customizacaoController;
