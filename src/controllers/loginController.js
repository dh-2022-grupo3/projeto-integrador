const loginController = {
  index: (req, res) => {
    res.render('login', {
      styles: ['login'],
    });
  },
};

module.exports = loginController;
