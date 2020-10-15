'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Veterinarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Veterinarios.init({
    nome: DataTypes.STRING(45),
    crmv: DataTypes.STRING(45)
  }, {
    sequelize,
    modelName: 'Veterinarios',
  });
  return Veterinarios;
};