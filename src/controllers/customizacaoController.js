const User = require("../javascripts/user");
const { Usuario } = require("../database/models");

const customizacaoController = {
  index: (req, res) => {
    req.session.usuario;

    res.render("customizacao", {
      styles: ["customizacao"],
      user,
      title: "Customização",
    });
  },

  salvarCusotmizacao: async (req, res) => {
    const { nome, sobrenome, escolaridade, fonte, renda, descricao } = req.body;

    await Customizacao.create({
      nome,
      sobrenome,
      escolaridade,
      fonte,
      renda,
      descricao,
    });

    return res.redirect("/customizacao");
  },
};

const user = new User("1", "Nome Sobrenome", "nome@nome.nome", 5000);

module.exports = customizacaoController;
