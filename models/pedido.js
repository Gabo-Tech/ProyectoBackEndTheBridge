'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pedido.belongsTo(models.Cesta)
      Pedido.belongsTo(models.Producto)
    }
  }
  Pedido.init({
    id: DataTypes.INTEGER.AUTO_INCREMENT,
    MagoId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Pedido',
  });
  return Pedido;
};