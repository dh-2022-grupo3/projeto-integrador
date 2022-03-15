const User = require('../javascripts/user');
const Transaction = require('../javascripts/transaction');

const homeController = {
  index: (req, res) => {
    function createTransactionTable (transactions) {
      const table = {
        ids: [],
        values: [],
        descriptions: [],
        dates: [],
        total: 0,
      };

      transactions.forEach(transaction => {
        table.ids.push(transaction.id);
        table.values.push(transaction.value);
        table.descriptions.push(transaction.description);
        table.dates.push(transaction.date);

        table.total += transaction.value;
      });

      return table;
    }

    const user = new User('1', 'Nome Sobrenome', 'nome@nome.nome', 5000);
    const transactions = [
      new Transaction('1', 1000, 'Salario', new Date(2022, 0, 1, 6)),
      new Transaction('2', -10, 'Uber', new Date(2022, 0, 1, 6)),
      new Transaction('3', -50, 'Ifood', new Date(2022, 0, 1, 6)),
    ];
    const futureTransactions = [
      new Transaction('1', 1000, 'Salario', new Date(2022, 1, 1, 6)),
      new Transaction('2', -10, 'Uber', new Date(2022, 1, 1, 6)),
      new Transaction('3', -5000, 'Ifood', new Date(2022, 1, 1, 6)),
    ];

    res.render('home', {
      styles: ['home'],
      user,
      transactionTable: createTransactionTable(transactions),
      futureTransactionTable: createTransactionTable(futureTransactions),
    });
  },
};

module.exports = homeController;
