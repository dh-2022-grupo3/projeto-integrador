const { Categoria, Movimentacao } = require("../database/models");

const homeController = {
  index: async (req, res) => {
    const movimentacoes = await Movimentacao.findAll({
      where: {
        id_usuario: req.session.usuario.id,
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

    const categorias = await Categoria.findAll({ raw: true });

    res.render("home", {
      styles: ["home"],
      table: {
        transactions: movimentacoes,
        total: 1000,
        totalParsed: `R$ ${Math.abs(1000)}`,
      },
      futureTable: {
        transactions: movimentacoes,
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

module.exports = homeController;
