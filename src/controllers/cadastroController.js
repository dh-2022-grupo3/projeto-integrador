const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const usuarioJson = path.join('usuarios.json');
const cadastroController = {
  index: (req, res) => {
    res.render('cadastro', {
      styles: ['cadastro'],
    });
  },
  salvarForm: (req, res) => {
    const { nome, email, senha } = req.body;
    const senhaCryp = bcrypt.hashSync(senha, 8);
    const usuario = JSON.stringify([{ nome, email, senha: senhaCryp }]);

    fs.writeFileSync(usuarioJson, usuario);
    res.send('Cadastrado com sucesso');
  },
};

module.exports = cadastroController;
