'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Caixas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Caixas.belongsTo(models.Apiarios, {
        foreignKey: 'apiario'
      });

      Caixas.belongsTo(models.Colmeias, {
        foreignKey: 'colmeia'
      });

      Caixas.hasMany(models.Quadros, {
        foreignKey: 'caixa'
      });
    }
  };
  Caixas.init({
    material: DataTypes.STRING(45),
    melgueiras: DataTypes.INTEGER,
    localExtracao: DataTypes.STRING(45)
  }, {
    sequelize,
    modelName: 'Caixas',
  });
  return Caixas;
};