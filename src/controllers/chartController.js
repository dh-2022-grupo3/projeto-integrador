const chartController = {
  index: (req, res) => {
    res.render('my_chart', {
      styles: ['my_chart'],
    });
  },
};

module.exports = chartController;
