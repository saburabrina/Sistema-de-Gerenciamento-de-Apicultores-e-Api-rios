'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Amostras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      controleVeterinario: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'ControleVeterinarios', key: 'id' }
      },
      tipoAbelha: {
        type: Sequelize.STRING(45)
      },
      materialBiologico: {
        type: Sequelize.STRING(45)
      },
      mel: {
        type: Sequelize.STRING(45)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Amostras');
  }
};