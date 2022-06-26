const { Op } = require("sequelize");
const { Categoria, Movimentacao } = require("../database/models");
const iwanthue = require("iwanthue");

const chartController = {
  index: async (req, res) => {
    const now = new Date();
    const inicioAno = new Date(now.getFullYear(), 0, 1);
    const fimAno = new Date(now.getFullYear() + 1, 0, 0);

    const categoriasRaw = await Categoria.findAll({ raw: true });
    const categorias = categoriasRaw.map((cat) => {
      return {
        id: cat.id,
        nome: cat.nome,
      };
    });

    let gastos = 0;
    let receita = 0;
    const gastosCategoria = [];
    categorias.forEach((cat) => {
      gastosCategoria[cat.id] = 0;
    });
    const rendimentosMes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    const movimentacoes = await Movimentacao.findAll({
      where: {
        id_usuario: req.session.usuario.id,
        data: { [Op.between]: [inicioAno, fimAno] },
      },
      raw: true,
    });
    movimentacoes.forEach((mov) => {
      const valor = +mov.valor;

      if (mov.valor < 0) {
        gastos += valor;
        gastosCategoria[mov.id_categoria] -= valor;
      } else {
        receita += valor;
        rendimentosMes[mov.data.getMonth()] += valor;
      }
    });

    const dados = [
      {
        valor: gastos.toFixed(2),
        descricao: "Gastos",
        icone: "msentiment_satisfied_alt",
      },
      {
        valor: receita.toFixed(2),
        descricao: "Receita",
        icone: "payments",
      },
      {
        valor: (receita + gastos).toFixed(2),
        descricao: "Balanço",
        icone: "account_balance_wallet",
      },
    ];

    gastosCategoria.shift();

    res.render("chart", {
      styles: ["chart"],
      dados,
      title: "Análise anual",
      name: req.session.usuario.nome,
      categorias,
      gastosCategoria,
      rendimentosMes,
      paletteCat: iwanthue(categorias.length),
      paletteMonths: iwanthue(12),
    });
  },
};

module.exports = chartController;
