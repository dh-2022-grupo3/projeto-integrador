const chartController = {
  index: (req, res) => {
    res.render('my_chart', {
      styles: ['chart'],
    });
  },
};

module.exports = chartController;
