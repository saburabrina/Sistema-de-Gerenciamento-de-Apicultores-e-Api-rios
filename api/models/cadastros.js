'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cadastros extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cadastros.belongsTo(models.Apicultores, {
        foreignKey: 'apicultor'
      });

      Cadastros.belongsTo(models.Apiarios, {
        foreignKey: 'apiario'
      });

      Cadastros.belongsTo(models.Propriedades, {
        foreignKey: 'propriedade'
      });
    }
  };
  Cadastros.init({
    data: DataTypes.DATE,
    municipio: DataTypes.STRING(45),
    comunidade: DataTypes.STRING(45)
  }, {
    sequelize,
    modelName: 'Cadastros',
  });
  return Cadastros;
};