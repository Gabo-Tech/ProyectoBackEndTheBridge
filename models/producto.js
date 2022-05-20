'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Producto.hasMany(models.Cesta),
      Producto.hasOne(models.Categoria)
    }
  }
  Producto.init({
    id: DataTypes.INTEGER.AUTO_INCREMENT,
    CategoriaId: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    precio: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Producto',
  });
  return Producto;
};