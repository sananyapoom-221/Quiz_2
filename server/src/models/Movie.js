module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    title: DataTypes.STRING,
    director: DataTypes.STRING,
    genre: DataTypes.STRING,
    releaseYear: DataTypes.INTEGER,
    rating: DataTypes.FLOAT
  })
  return Movie
}
