'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categoria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Categoria.belongsTo(models.Producto)
    }
  }
  Categoria.init({
    id: DataTypes.INTEGER.AUTO_INCREMENT,
    nombre: DataTypes.STRING,
    ProductoId: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'Categoria',
  });
  return Categoria;
};