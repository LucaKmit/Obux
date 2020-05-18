const bookSchema = require('../Models/booksSchema');

module.exports = {
  async getBook(req, res) {
    const { id } = req.params.id;

    const book = await bookSchema.findById(id);

    return book ? res.send({ book }) : res.status(404).send({});
  },

  async updateBook(req, res) {
    const { titulo, qualidade, disponibilidade } = req.body;
  },

  async delBook(req, res) {
    const { id } = req.params.id;

    const book = await bookSchema.findByIdAndDelete(id);

    res.send(book, ' Deleted!');
  },

  async findBook(req, res) {
    const { titulo, genero, autor, ano } = req.body;
    const book = await bookSchema.find({ titulo, genero, autor, ano });

    res.send({ book });
  }

};
