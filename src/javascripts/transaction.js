class Transaction {
  constructor (id, value, description, date) {
    this.id = id;
    this.value = value;
    this.description = description;
    this.date = date;
  }
}

module.exports = Transaction;
