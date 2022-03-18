const chartController = {
  index: (req, res) => {
    res.render('chart', {
      styles: ['chart'],
    });
  },
};

module.exports = chartController;
