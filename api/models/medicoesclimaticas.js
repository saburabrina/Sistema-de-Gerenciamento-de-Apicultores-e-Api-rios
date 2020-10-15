'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MedicoesClimaticas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      MedicoesClimaticas.belongsTo(models.Propriedades, {
        foreignKey: 'propriedade'
      });
    }
  };
  MedicoesClimaticas.init({
    temperatura: DataTypes.FLOAT,
    indicePluviometrico: DataTypes.FLOAT,
    umidadeAr: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'MedicoesClimaticas',
  });
  return MedicoesClimaticas;
};