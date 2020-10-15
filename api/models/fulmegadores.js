'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fulmegadores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Fulmegadores.belongsTo(models.Apicultores, {
        foreignKey: 'apicultor'
      });
    }
  };
  Fulmegadores.init({
    produtoUtilizado: DataTypes.STRING(45)
  }, {
    sequelize,
    modelName: 'Fulmegadores',
  });
  return Fulmegadores;
};