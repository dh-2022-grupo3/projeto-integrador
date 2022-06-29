const { Op } = require("sequelize");
const { Categoria, Movimentacao } = require("../database/models");

const homeController = {
  index: async (req, res) => {
    const now = new Date();

    if (req.query.ano == null) {
      req.query.ano = now.getFullYear();
    }
    if (req.query.mes == null) {
      req.query.mes = now.getMonth();
    }
    const categorias = await Categoria.findAll({ raw: true });
    const movimentacoes = await criarTabelaMovimentacao(
      req.session.usuario.id,
      req.query.ano,
      req.query.mes
    );

    const total = movimentacoes
      .reduce((anterior, atual) => {
        return anterior + +atual.valor;
      }, 0)
      .toFixed(2);

    const balanco = await Movimentacao.sum("valor", {
      where: {
        data: { [Op.lte]: now },
      },
    });

    req.session.usuario.balanco = balanco.toFixed(2);

    res.render("home", {
      styles: ["home"],
      table: {
        transactions: movimentacoes,
        total,
        totalParsed: `R$ ${Math.abs(total)}`,
      },
      title: "Home",
      name: req.session.usuario.nome,
      balanco: req.session.usuario.balanco,
      categorias,
    });
  },

  salvarTransacao: async (req, res) => {
    const { value, description, date, categoria } = req.body;
    const data = new Date(date);
    data.setHours(data.getHours() + 3);
    await Movimentacao.create({
      descricao: description,
      valor: value,
      data: data,
      id_categoria: categoria,
      id_usuario: req.session.usuario.id,
    });

    const now = new Date();

    if (req.query.ano == null) {
      req.query.ano = now.getFullYear();
    }
    if (req.query.mes == null) {
      req.query.mes = now.getMonth();
    }
    return res.redirect("/home");
  },

  deletarTransacao: async (req, res) => {
    await Movimentacao.destroy({
      where: {
        id: req.body.id,
      },
    });

    return res.sendStatus(200);
  },
};

// eslint-disable-next-line camelcase
async function criarTabelaMovimentacao(id_usuario, ano, mes) {
  const inicioMes = new Date(ano, mes, 1);
  const fimMes = new Date(ano, +mes + 1, 0);
  const movimentacoes = await Movimentacao.findAll({
    where: {
      id_usuario,
      data: { [Op.between]: [inicioMes, fimMes] },
    },
    order: [["data", "ASC"]],
    raw: true,
  });

  movimentacoes.forEach((movimentacao) => {
    movimentacao.dataParsed = new Date(movimentacao.data).toLocaleString(
      "pt-BR",
      { dateStyle: "short" }
    );
  });

  return movimentacoes;
}

module.exports = homeController;
