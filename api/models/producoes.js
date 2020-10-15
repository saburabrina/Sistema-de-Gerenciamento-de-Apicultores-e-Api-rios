'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Producoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Producoes.belongsTo(models.Apiarios, {
        foreignKey: 'apiario'
      });
    }
  };
  Producoes.init({
    rotulo: DataTypes.BOOLEAN,
    destino: DataTypes.STRING(45),
    tipo: DataTypes.STRING(45),
    material: DataTypes.STRING(45)
  }, {
    sequelize,
    modelName: 'Producoes',
  });
  return Producoes;
};