'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Apiarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Apiarios.belongsTo(models.Apicultores, {
        foreignKey: 'dono'
      });

      Apiarios.belongsTo(models.Propriedades, {
        foreignKey: 'propriedade'
      });

      Apiarios.hasMany(models.ControleVeterinarios, {
        foreignKey: 'apiario'
      });

      Apiarios.hasMany(models.Caixas, {
        foreignKey: 'apiario'
      });
    }
  };
  Apiarios.init({
    inscricaoEstadual: DataTypes.STRING(45),
    dataFundacao: DataTypes.DATEONLY,
    tipoFlorada: DataTypes.STRING(45),
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    expandida: DataTypes.BOOLEAN,
    problemaSanitario: DataTypes.BOOLEAN,
    numeroCaixasPovoadas: DataTypes.INTEGER,
    numeroCaixasVazias: DataTypes.INTEGER,
    tipoInstalacao: DataTypes.STRING(45)
  }, {
    sequelize,
    modelName: 'Apiarios',
  });
  return Apiarios;
};