const forgotController = {
  index: (req, res) => {
    res.render("forgot", {
      styles: ["forgot"],
    });
  },
};

module.exports = forgotController;
