const cadastroController = {
  index: (req, res) => {
    res.render('cadastro', {
      styles: ['cadastro'],
    });
  },
};

module.exports = cadastroController;
