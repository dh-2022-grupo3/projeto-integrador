const { Op } = require("sequelize");
const { Categoria, Movimentacao } = require("../database/models");

const homeController = {
  index: async (req, res) => {
    const categorias = await Categoria.findAll({ raw: true });
    const agora = new Date();
    const movimentacoes = await criarTabelaMovimentacao(
      req.session.usuario.id,
      agora.getFullYear(),
      agora.getMonth()
    );
    const movimentacoesFutura = await criarTabelaMovimentacao(
      req.session.usuario.id,
      agora.getFullYear(),
      agora.getMonth() + 1
    );
    const total = movimentacoes
      .reduce((anterior, atual) => {
        console.log(anterior);
        console.log(atual);
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
      futureTable: {
        transactions: movimentacoesFutura,
        total: 2000,
        totalParsed: `R$ ${Math.abs(2000)}`,
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
