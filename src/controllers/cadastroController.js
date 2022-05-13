const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const usuarios = require("../../usuarios.json");
const { usuario } = require("../../database/models");

const usuarioJson = path.join("usuarios.json");
const cadastroController = {
  index: (req, res) => {
    res.render("cadastro", {
      styles: ["cadastro"],
    });
  },

  salvarForm: (req, res) => {
    const { nome, email, senha } = req.body;

    const usuarioJaExiste = usuarios.find((pessoa) => pessoa.email === email);
    if (usuarioJaExiste) {
      return res.status(400).json({ message: "Usuário já existe" });
    }

    const senhaCryp = bcrypt.hashSync(senha, 8);

    usuarios.push({ nome, email, senha: senhaCryp });

    const usuarioString = JSON.stringify(usuarios);

    fs.writeFileSync(usuarioJson, usuarioString);

    return res.send("Usuário cadastrado com sucesso");
  },
};

module.exports = cadastroController;
