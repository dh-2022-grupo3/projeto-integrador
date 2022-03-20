const chartController = {
  index: (req, res) => {
    const valores = [
      {
        valor: 40,
        descricao: 'Previsao de Gastos',
      },
    ];
    res.render('chart', {
      styles: ['chart'],
      valores,
    });
  },
};

module.exports = chartController;
