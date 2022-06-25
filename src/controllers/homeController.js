const { Op } = require("sequelize");
const { Categoria, Movimentacao } = require("../database/models");

const homeController = {
  index: async (req, res) => {
    if (req.query.ano == null) {
      req.query.ano = new Date().getFullYear();
    }
    if (req.query.mes == null) {
      req.query.mes = new Date().getMonth();
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

    await Movimentacao.create({
      descricao: description,
      valor: value,
      data: date,
      id_categoria: categoria,
      id_usuario: req.session.usuario.id,
    });

    return res.send("Transacao cadastrada com sucesso");
  },
};

// eslint-disable-next-line camelcase
async function criarTabelaMovimentacao(id_usuario, ano, mes) {
  const inicioMes = new Date(ano, mes, 1);
  const fimMes = new Date(ano, mes + 1, 0);
  const movimentacoes = await Movimentacao.findAll({
    where: {
      id_usuario,
      data: { [Op.between]: [inicioMes, fimMes] },
    },
    raw: true,
  });

  movimentacoes.forEach((movimentacao) => {
    movimentacao.dataParsed = new Date(movimentacao.data).toLocaleString(
      "pt-BR",
      {
        dateStyle: "short",
        timeStyle: "short",
      }
    );
  });

  return movimentacoes;
}

module.exports = homeController;
