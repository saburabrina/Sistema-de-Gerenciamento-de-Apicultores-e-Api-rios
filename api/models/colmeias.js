'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Colmeias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Colmeias.hasMany(models.Tratamentos, {
        foreignKey: 'colmeia'
      });
    }
  };
  Colmeias.init({
    especieAbelhas: DataTypes.STRING(45),
    origem: DataTypes.STRING(45),
    dataTrocaRainha: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Colmeias',
  });
  return Colmeias;
};