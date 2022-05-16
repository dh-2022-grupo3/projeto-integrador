const { Usuario } = require("../database/models");
const bcrypt = require("bcryptjs");

const loginController = {
  index: (req, res) => {
    res.render("login", {
      styles: ["login"],
    });
  },
  logarUsuario: async (req, res) => {
    const { email, senha } = req.body;

    const usuarioEncontrado = await Usuario.findOne({ where: { email } });

    if (usuarioEncontrado == null) {
      return res.status(401).json({ message: "E-mail inválido" });
    }

    const senhaCorreta = bcrypt.compareSync(senha, usuarioEncontrado.senha);

    if (!senhaCorreta) {
      return res.status(401).json({ message: "Senha inválida" });
    }

    req.session.autorizado = true;

    return res.redirect("/home");
  },
};

module.exports = loginController;
