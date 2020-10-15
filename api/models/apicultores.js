'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Apicultores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Apicultores.belongsTo(models.Enderecos, {
        foreignKey: 'endereco'
      });

      Apicultores.belongsTo(models.Propriedades, {
        foreignKey: 'trabalhaEm'
      });

      Apicultores.hasMany(models.Fulmegadores, {
        foreignKey: 'apicultor'
      });
    }
  };
  Apicultores.init({
    nome: DataTypes.STRING(45),
    certificacao: DataTypes.STRING(45),
    email: DataTypes.STRING(45),
    telefone: DataTypes.STRING(13),
    producaoAnual: DataTypes.FLOAT,
    perfil: DataTypes.STRING(10),
    vinculo: DataTypes.STRING(9)
  }, {
    sequelize,
    modelName: 'Apicultores',
  });
  return Apicultores;
};