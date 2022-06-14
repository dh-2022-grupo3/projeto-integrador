const User = require("../javascripts/user");
const Transaction = require("../javascripts/transaction");
const { Categoria, Movimentacao } = require("../database/models");

const homeController = {
  index: async (req, res) => {
    const user = new User("1", "Nome Sobrenome", "nome@nome.nome", 5000);
    const transactions = [
      new Transaction("1", 1000, "Salario", new Date(2022, 0, 1, 6)),
      new Transaction("2", -10, "Uber", new Date(2022, 0, 1, 6)),
      new Transaction("3", -50, "Ifood", new Date(2022, 0, 1, 6)),
    ];
    const total = transactions.reduce((prev, curr) => prev + curr.value, 0);

    const futureTransactions = [
      new Transaction("1", 1000, "Salario", new Date(2022, 1, 1, 6)),
      new Transaction("2", -10, "Uber", new Date(2022, 1, 1, 6)),
      new Transaction("3", -5000, "Ifood", new Date(2022, 1, 1, 6)),
    ];
    const futureTotal = futureTransactions.reduce(
      (prev, curr) => prev + curr.value,
      0
    );

    const categorias = await Categoria.findAll({ raw: true });

    res.render("home", {
      styles: ["home"],
      user,
      table: {
        transactions,
        total,
        totalParsed: `R$ ${Math.abs(total)}`,
      },
      futureTable: {
        transactions: futureTransactions,
        total: futureTotal,
        totalParsed: `R$ ${Math.abs(futureTotal)}`,
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
