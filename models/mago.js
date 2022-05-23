'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mago extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Mago.init({
    mago: DataTypes.STRING,
    lechuza: DataTypes.STRING,
    hechizo: DataTypes.STRING,
    PedidoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Mago',
  });
  return Mago;
};