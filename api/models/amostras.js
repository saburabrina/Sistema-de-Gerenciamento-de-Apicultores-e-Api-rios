'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Amostras extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Amostras.belongsTo(models.ControleVeterinarios, {
        foreignKey: 'controleVeterinario'
      });
    }
  };
  Amostras.init({
    tipoAbelha: DataTypes.STRING(45),
    materialBiologico: DataTypes.STRING(45),
    mel: DataTypes.STRING(45)
  }, {
    sequelize,
    modelName: 'Amostras',
  });
  return Amostras;
};