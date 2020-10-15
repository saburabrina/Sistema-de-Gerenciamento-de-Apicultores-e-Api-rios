'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tratamentos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tratamentos.belongsTo(models.Colmeias, {
        foreignKey: 'colmeia'
      });

      Tratamentos.belongsTo(models.Veterinarios, {
        foreignKey: 'veterinario'
      });
    }
  };
  Tratamentos.init({
    quantidadeDoses: DataTypes.INTEGER,
    formaDosagem: DataTypes.STRING(45),
    doenca: DataTypes.STRING(45),
    produto: DataTypes.STRING(45),
    dataTratamento: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Tratamentos',
  });
  return Tratamentos;
};