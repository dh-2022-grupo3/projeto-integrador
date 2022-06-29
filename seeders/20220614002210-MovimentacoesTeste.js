"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();

    const userTest = await queryInterface.select(Sequelize.Usuario, "usuario", {
      email: "teste@teste.com",
    });

    // eslint-disable-next-line camelcase
    const id_usuario = userTest[0].id;

    const jan =
      "Salário,10200,1;Aluguel,-2000,1;Uber,-21.35,4;Remédios,-102.39,2;Show,-140,5;Conta de água,-120,1;Conta de Luz,-110,1;Faculdade,-1800,3;Convênio,-600.8,2;Combustível,-180,4;Livro,-46.9,3;Compra do mês,-680,1;Festa,-70,5;Viagem Praia,-576.35,5;Rolê,-123,5;Boliche,-60,5;Presente de casamento,-133.67,1;Cartão de crédito,-1000,1;Uber,-73,4;Seguro do Carro,-250,1;Ifood,-136,6";
    const fev =
      "Salário,10200,1;Aluguel,-2000,1;Conta de água,-89,1;Conta de Luz,-96,1;Faculdade,-1800,3;Compra do mês,-760,1;IPVA,-350,1;Cartão de crédito,-1200,1;Seguro do Carro,-250,1;Combustível,-210,4;Festival,-720,5;Uber,-12.48,4;Uber,-130,4;Convênio,-600.8,2;Almoço no Parque,-46.7,6;Curso,-49.9,3;Ifood,-89.98,6;Estacionamento,-30,1;Jantar,-67,6;Vinho,-137.5,6;Lavagem carro,-40,1;Bateria carro,-540,1";
    const mar =
      "Salário,10200,1;Aluguel,-2000,1;Conta de água,-92,1;Conta de Luz,-111,1;Faculdade,-1800,3;Compra do mês,-646.78,1;Cartão de crédito,-1400,1;Seguro do Carro,-250,1;Combustível,-197,4;Show,-95,5;Uber,-86.34,4;Uber,-7.8,4;Convênio,-600.8,2;Ifood,-31,6;Uber,-43.9,3;Ifood,-120.34,6;Estacionamento,-50,1;Almoço,-76.43,6;Lavagem carro,-40,1;Compra roupas,-468.23,1;Teatro,-120,5;IPVA,-350,1";
    const abr =
      "Salário,10200,1;convenio,-600.8,2;faculdade,-1800,3;Aluguel,-2000,1;Seguro de Carro,-250,4;Uber,-210,4;Cinema,-88.9,5;Combustivel,-179.87,4;Remédios,-376,2;Livraria,-195.77,3;Conta de água,-121.36,1;Conta de Luz,-143.48,1;Compra do mês,-944.56,1;Cartão de crédito,-1209.85,1;Presente casamento,-320.99,1;Game,-3500.5,5;Lavagem Carro,-40,1;IPVA,-350,1;Petshop,-450.69,1";
    const mai =
      "Salário,10200,1;convenio,-600.8,2;faculdade,-1800,3;Aluguel,-2000,1;Seguro de Carro,-250,4;Uber,-159.99,4;Uber,-33.9,5;Combustivel,-300,4;Remédios,-129,2;Fisioterapia,-300,2;Conta de água,-121.36,1;Conta de Luz,-143.48,1;Compra do mês,-1060,1;Cartão de crédito,-2104.65,1;Presente aniversário,-320.99,1;Ração,-498,1;Cabeleleiro,-689,1;Lavagem Carro,-45,1;IPVA,-350,1";
    const jun =
      "Salário,10200,1;convenio,-600.8,2;faculdade,-1800,3;Aluguel,-2000,1;Seguro de Carro,-250,4;Uber,-159.99,4;Uber,-33.9,4;Combustivel,-300,4;Remédios,-129,2;Fisioterapia,-300,2;Conta de água,-121.36,1;Conta de Luz,-143.48,1;Compra do mês,-1060,1;Cartão de crédito,-2104.65,1;Presente aniversário,-320.99,1;Ração,-498,1;Cabeleleiro,-689,1;Lavagem Carro,-45,1;IPVA,-350,1";
    const outros =
      "Salário,10200,1;Convênio,-600.8,2;Faculdade,-1800,3;Aluguel,-2000,1;Seguro de Carro,-250,4";

    function parse(text, month) {
      const transactions = [];
      const days = text.split(";");
      days.forEach((day, index) => {
        const fields = day.split(",");
        transactions.push({
          descricao: fields[0],
          valor: (+fields[1]).toFixed(2),
          data: new Date(now.getFullYear(), month, index + 1),
          id_categoria: +fields[2],
          id_usuario,
          createdAt: now,
          updatedAt: now,
        });
      });
      return transactions;
    }

    const movements = [
      ...parse(jan, 0),
      ...parse(fev, 1),
      ...parse(mar, 2),
      ...parse(abr, 3),
      ...parse(mai, 4),
      ...parse(jun, 5),
      ...parse(outros, 6),
      ...parse(outros, 7),
      ...parse(outros, 8),
      ...parse(outros, 9),
      ...parse(outros, 10),
      ...parse(outros, 11),
    ];

    await queryInterface.bulkInsert("movimentacao", movements);
  },

  async down(queryInterface, Sequelize) {
    const userTest = await queryInterface.select(Sequelize.Usuario, "usuario", {
      email: "teste@teste.com",
    });

    // eslint-disable-next-line camelcase
    const id_usuario = userTest[0].id;
    await queryInterface.bulkDelete("movimentacao", { id_usuario });
  },
};
