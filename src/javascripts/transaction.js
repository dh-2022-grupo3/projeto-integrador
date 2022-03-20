class Transaction {
  constructor (id, value, description, date) {
    this.id = id;
    this.value = value;
    this.description = description;
    this.date = date;

    this.dateParsed = date.toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' });
    this.valueParsed = `R$ ${Math.abs(value)}`;
  }
}

module.exports = Transaction;
