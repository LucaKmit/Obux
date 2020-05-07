const mongoose = require('mongoose');

const booksSchema = mongoose.Schema({
  titulo: String,
  qualidade: String,
  foto: String,
  disponibilidade: Boolean,
  sinopse: String,
});

module.exports = mongoose.model('Books', booksSchema);
