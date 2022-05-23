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
      // define association here
      Producto.hasOne(models.Categoria)
        //   Pedido = require.belongsToMany(Producto, { through: 'Cesta' }); 
    //   Producto.belongsToMany(Pedido = require, { through: 'Cesta' });    
    // }
    }
  }
  Producto.init({
    CategoriaId: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    precio: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Producto',
  });
  return Producto;
};