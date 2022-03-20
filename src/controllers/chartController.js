const chartController = {
  index: (req, res) => {
    const valoresPrevisao =
    {
      valor: '500,00',
      descricao: 'Previsão de Gastos',
    };

    const valoresPagamentos =
    {
      valor: '125,80',
      descricao: 'Pagamentos',
    };

    const valoresBalanco =
    {
      valor: '374,20',
      descricao: 'Balanço',

    };

    res.render('chart', {
      styles: ['chart'],
      valoresPrevisao,
      valoresPagamentos,
      valoresBalanco,
    });
  },
};

module.exports = chartController;
