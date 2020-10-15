'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ControleVeterinarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ControleVeterinarios.belongsTo(models.Apiarios, {
        foreignKey: 'apiario'
      });

      ControleVeterinarios.belongsTo(models.Veterinarios, {
        foreignKey: 'veterinario'
      });

      ControleVeterinarios.hasMany(models.Amostras, {
        foreignKey: 'controleVeterinario'
      });
    }
  };
  ControleVeterinarios.init({
    dataExame: DataTypes.DATEONLY,
    condicaoVeterinaria: DataTypes.STRING(45)
  }, {
    sequelize,
    modelName: 'ControleVeterinarios',
  });
  return ControleVeterinarios;
};