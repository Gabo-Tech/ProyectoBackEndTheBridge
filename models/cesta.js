'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cesta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cesta.belongsTo(models.Pedido),
      Cesta.belongsTo(models.Producto)
    }
  }
  Cesta.init({
    id: DataTypes.INTEGER.AUTO_INCREMENT,
    ProductoId: DataTypes.INTEGER,
    PedidoId: DataTypes.INTEGER
    
  }, {
    sequelize,
    modelName: 'Cesta',
  });
  return Cesta;
};