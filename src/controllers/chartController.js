const chartController = {
  index: (req, res) => {
    const valoresPrevisao =
    {
      valor: '500,00',
      descricao: 'Previsão de Gastos',
      icone: 'msentiment_satisfied_alt',
    };

    const valoresPagamentos =
    {
      valor: '125,80',
      descricao: 'Pagamentos',
      icone: 'payments',
    };

    const valoresBalanco =
    {
      valor: '374,20',
      descricao: 'Balanço',
      icone: 'account_balance_wallet',

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
