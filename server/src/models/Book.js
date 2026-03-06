module.exports = (sequelize, DataTypes) => {

  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    category: DataTypes.STRING,
    status: DataTypes.STRING
  })

  return Book

}