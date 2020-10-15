'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enderecos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Enderecos.init({
    logradouro: DataTypes.STRING(45),
    numero: DataTypes.INTEGER,
    complemento: DataTypes.STRING(45),
    comunidade: DataTypes.STRING(45),
    bairro: DataTypes.STRING(45),
    cidade: DataTypes.STRING(45),
    estado: DataTypes.STRING(45),
    cep: DataTypes.STRING(9)
  }, {
    sequelize,
    modelName: 'Enderecos',
  });
  return Enderecos;
};