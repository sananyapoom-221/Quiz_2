const { Movie } = require('../models')

module.exports = {
  // get all movie
  async index (req, res) {
    try {
      const movies = await Movie.findAll()
      res.send(movies)
    } catch (err) {
      res.status(500).send({
        error: 'The movies information was incorrect'
      })
    }
  },

  // create movie
  async create (req, res) {
    try {
      const movie = await Movie.create(req.body)
      res.send(movie.toJSON())
    } catch (err) {
      res.status(500).send({
        error: 'Create movie incorrect'
      })
    }
  },

  // edit movie, suspend, active
  async put (req, res) {
    try {
      await Movie.update(req.body, {
        where: {
          id: req.params.movieId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'Update movie incorrect'
      })
    }
  },

  // delete movie
  async remove (req, res) {
    try {
      const movie = await Movie.findOne({
        where: {
          id: req.params.movieId
        }
      })

      if (!movie) {
        return res.status(403).send({
          error: 'The movie information was incorrect'
        })
      }

      await movie.destroy()
      res.send(movie)
    } catch (err) {
      res.status(500).send({
        error: 'The movie information was incorrect'
      })
    }
  },

  // get movie by id
  async show (req, res) {
    try {
      const movie = await Movie.findByPk(req.params.movieId)
      res.send(movie)
    } catch (err) {
      res.status(500).send({
        error: 'The movie information was incorrect'
      })
    }
  }
}
