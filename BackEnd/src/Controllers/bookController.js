const bookSchema = require('../Models/booksSchema');

module.exports = {
  async getBook(req, res) {
    const { id } = req.params.id;

    const book = await bookSchema.findOne({ id });

    return book ? res.send({ book }) : res.status(404).send({});
  }
};
