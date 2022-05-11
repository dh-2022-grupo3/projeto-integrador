const fs = require("fs");
const path = require("path");
const User = require("../javascripts/user");
const customizacao = require("../../customizacao.json");

const customizacaoController = {
  index: (req, res) => {
    res.render("customizacao", {
      styles: ["customizacao"],
      user,
      title: "Customização",
    });
  },

  salvarCusotmizacao: (req, res) => {
    const { nome, sobrenome, escolaridade, fonte, renda, descricao } = req.body;

    customizacao.push({
      nome,
      sobrenome,
      escolaridade,
      fonte,
      renda,
      descricao,
    });

    fs.writeFileSync(
      path.join("customizacao.json"),
      JSON.stringify(customizacao)
    );

    return res.send("Usuário modificado com sucesso");
  },
};

const user = new User("1", "Nome Sobrenome", "nome@nome.nome", 5000);

module.exports = customizacaoController;
