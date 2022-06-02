const chartController = {
  index: (req, res) => {
    const dados = [
      {
        valor: "500,00",
        descricao: "Previsão de Gastos",
        icone: "msentiment_satisfied_alt",
      },
      {
        valor: "125,80",
        descricao: "Pagamentos",
        icone: "payments",
      },
      {
        valor: "374,20",
        descricao: "Balanço",
        icone: "account_balance_wallet",
      },
    ];

    res.render("chart", {
      styles: ["chart"],
      dados,
      title: "Análise",
      name: req.session.usuario.nome
    });
  },
};

module.exports = chartController;
