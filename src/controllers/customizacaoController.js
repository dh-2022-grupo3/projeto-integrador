const customizacaoController = {
  index: (req, res) => {
    res.render('customizacao', {
      styles: ['customizacao'],
    });
  },
};

module.exports = customizacaoController;
