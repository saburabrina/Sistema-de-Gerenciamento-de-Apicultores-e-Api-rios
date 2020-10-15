'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quadros extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Quadros.belongsTo(models.Caixas, {
        foreignKey: 'caixa'
      });
    }
  };
  Quadros.init({
    tipo: DataTypes.STRING(45),
    fundo: DataTypes.STRING(45),
    material: DataTypes.STRING(45)
  }, {
    sequelize,
    modelName: 'Quadros',
  });
  return Quadros;
};