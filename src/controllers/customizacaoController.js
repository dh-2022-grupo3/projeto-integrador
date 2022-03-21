const User = require('../javascripts/user');

const customizacaoController = {
  index: (req, res) => {
    res.render('customizacao', {
      styles: ['customizacao'],
      user,
      title: 'Customização',
    });
  },
};

const user = new User('1', 'Nome Sobrenome', 'nome@nome.nome', 5000);

module.exports = customizacaoController;
