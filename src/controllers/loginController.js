
const usuarios = require('../../usuarios.json');
const bcrypt = require('bcryptjs');

const loginController = {
  index: (req, res) => {
    res.render('login', {
      styles: ['login'],
    });
  },
  logarUsuario: (req, res) => {
    const { email, senha } = req.body;

    const usuarioEncontrado = usuarios.find((usuario) => usuario.email === email);

    if (!usuarioEncontrado) {
      return res.status(401).json({ message: 'E-mail inválido' });
    }

    const senhaCorreta = bcrypt.compareSync(senha, usuarioEncontrado.senha);

    if (!senhaCorreta) {
      return res.status(401).json({ message: 'Senha inválida' });
    }

    req.session.autorizado = true;

    return res.redirect('/home');
  },
};

module.exports = loginController;
