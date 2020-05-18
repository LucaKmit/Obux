const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  dataNasc: {
    type: Date,
    required: true,
  },
  telefone: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  cpf: {
    type: String,
    required: true,
    max: 14,
    select: true,
    unique: true,
  },
  senha: {
    type: String,
    required: true,
    select: false,
    min: 6,
  },
  cidade: {
    type: String,
    required: true,
  },
  estado: {
    required: true,
    type: String,
    max: 2,
  },
  biblioteca: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Books',
  },
  pfp: String,
  stars: Number
});

module.exports = mongoose.model('User', userSchema);
