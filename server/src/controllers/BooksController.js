const { Book } = require('../models')

module.exports = {

  async index(req,res){
    const books = await Book.findAll()
    res.send(books)
  },

  async show(req,res){
    const book = await Book.findByPk(req.params.bookId)
    res.send(book)
  },

  async create(req,res){
    try{
      const book = await Book.create(req.body)
      res.send(book)
    }catch(err){
      res.status(400).send({
        error:'Create book incorrect'
      })
    }
  },

  async put(req,res){
    try{
      await Book.update(req.body,{
        where:{ id:req.params.bookId }
      })
      res.send(req.body)
    }catch(err){
      res.status(400).send({
        error:'Update book incorrect'
      })
    }
  },

  async delete(req,res){
    try{
      const book = await Book.findByPk(req.params.bookId)
      await book.destroy()
      res.send(book)
    }catch(err){
      res.status(400).send({
        error:'Delete book incorrect'
      })
    }
  }

}