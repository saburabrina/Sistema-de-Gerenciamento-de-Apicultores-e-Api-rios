'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Propriedades extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Propriedades.belongsTo(models.Enderecos, {
        foreignKey: 'endereco'
      });
      
      Propriedades.hasMany(models.Apiarios, {
        foreignKey: 'propriedade'
      });
    }
  };
  Propriedades.init({
    areaDestinada: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Propriedades',
  });
  return Propriedades;
};