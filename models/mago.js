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
      Mago.hasMany(models.Pedido)
    }
  }
  Mago.init({
    id: DataTypes.INTEGER.AUTO_INCREMENT,
    mago: DataTypes.STRING,
    lechuza: DataTypes.STRING,
    hechizo: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Mago',
  });
  return Mago;
};